"use client";
import { differenceInDays, isSameDay, isWithinInterval, set } from "date-fns";
import { useReservation } from "./ReservationContext";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { isPast } from "date-fns";
import { is } from "date-fns/locale";
function isAlreadyBooked(range, datesArr) {
  return (
    range.from &&
    range.to &&
    datesArr.some((date) =>
      isWithinInterval(date, { start: range.from, end: range.to })
    )
  );
}

function DateSelector({ settings, space, bookedDates }) {
  const { range, setRange, resetRange } = useReservation();
  const displayRange = isAlreadyBooked(range, bookedDates) ? {} : range;

  const { regularPrice, discount } = space;
  const numNights = differenceInDays(displayRange.from, displayRange.to);
  const spacePrice = (regularPrice - discount) * numNights;
  // const range = { from: null, to: null };

  // SETTINGS
  const { maxBookingLength, minBookingLength } = settings;

  return (
    <div className="flex flex-col justify-between w-half  border border-primary-800 min-h-[400px]">
      <DayPicker
        className="pt-12 place-self-center "
        mode="range"
        min={minBookingLength + 1}
        max={maxBookingLength}
        onSelect={(range) => {
          setRange(range);
        }}
        selected={displayRange}
        fromMonth={new Date()}
        fromDate={new Date()}
        toYear={new Date().getFullYear() + 5}
        captionLayout="dropdown"
        numberOfMonths={2}
        disabled={(curDate) =>
          isPast(curDate) ||
          bookedDates.some((date) => isSameDay(date, curDate))
        }
        classNames={{
          months: "flex flex-row gap-2", // ✅ This lays out months side-by-side
          day: "hover:bg-accent-600 hover:text-primary-800 rounded-full ",
        }}
        modifiersClassNames={{
          selected: "bg-white text-primary-800", // Selected days
          range_start: "bg-white text-primary-800", // Start of range
          range_end: "bg-white text-primary-800", // End of range
          today: "border border-accent-400 rounded-full", // Optional: highlight today
        }}
      />

      <div className="flex items-center justify-between px-8 bg-accent-500 text-primary-800 h-[72px]">
        <div className="flex items-baseline gap-6">
          <p className="flex gap-2 items-baseline">
            {discount > 0 ? (
              <>
                <span className="text-2xl">${regularPrice - discount}</span>
                <span className="line-through font-semibold text-primary-700">
                  ${regularPrice}
                </span>
              </>
            ) : (
              <span className="text-2xl">${regularPrice}</span>
            )}
            <span className="">/night</span>
          </p>
          {numNights ? (
            <>
              <p className="bg-accent-600 px-3 py-2 text-2xl">
                <span>&times;</span> <span>{numNights}</span>
              </p>
              <p>
                <span className="text-lg font-bold uppercase">Total</span>{" "}
                <span className="text-2xl font-semibold">${spacePrice}</span>
              </p>
            </>
          ) : null}
        </div>

        {range.from || range.to ? (
          <button
            className="border border-primary-800 py-2 px-4 text-sm font-semibold"
            onClick={resetRange}
          >
            Clear
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default DateSelector;
