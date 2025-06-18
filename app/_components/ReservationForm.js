"use client";
import { useReservation } from "@/app/_components/ReservationContext";
import { differenceInDays } from "date-fns";
import Image from "next/image";
import { createBooking } from "../_lib/data-service";
import SubmitButton from "./SubmitButton";
function ReservationForm({ space, user }) {
  const { range, resetRange } = useReservation();
  const { maxCapacity, regularPrice, discount, id } = space;

  const startDate = range.from;
  const endDate = range.to;

  const numNights = differenceInDays(endDate, startDate);
  const spacePrice = numNights * (regularPrice - discount);
  const bookingData = {
    startDate,
    endDate,
    numNights,
    spacePrice,
    spaceId: id,
  };
  const createBookingWithData = createBooking.bind(null, bookingData);

  return (
    <div className="scale-[1.01] flex-1">
      <div className="bg-primary-800 px-4 xl:px-16 py-2 flex justify-between items-center">
        <p>Logged in as</p>

        <div className="flex gap-4 items-center">
          <div className="relative h-8 w-8">
            <Image
              // Important to display google profile images
              referrerPolicy="no-referrer"
              className=" rounded-full object-cover "
              fill
              src={user.image}
              alt={user.name}
            />
          </div>
          <p>{user.name}</p>
        </div>
      </div>

      <form
        action={async (formData) => {
          await createBookingWithData(formData);
          resetRange();
        }}
        className=" py-10 px-12 text-lg flex gap-5 flex-col"
      >
        <div className="">
          <label htmlFor="numGuests">How many guests?</label>
          <select
            name="numGuests"
            id="numGuests"
            className="px-5 py-3 bg-primary-200 w-full shadow-sm rounded-sm"
            required
          >
            <option value="" key="">
              Select number of guests...
            </option>
            {Array.from({ length: maxCapacity }, (_, i) => i + 1).map((x) => (
              <option value={x} key={x}>
                {x} {x === 1 ? "guest" : "guests"}
              </option>
            ))}
          </select>
        </div>

        <div className="">
          <label htmlFor="observations" className="leading-none">
            About your stay?
          </label>
          <textarea
            name="observations"
            id="observations"
            className="px-5 py-3 bg-primary-200 -800 w-full shadow-sm rounded-sm"
            placeholder="Any pets, allergies, special requirements, etc.?"
          />
        </div>

        <div className="flex justify-end items-center gap-6">
          {!(startDate && endDate) ? (
            <p className="-300 text-base">Start by selecting dates</p>
          ) : (
            <SubmitButton pendingLabel="Reserving...">Reserve now</SubmitButton>
          )}
        </div>
      </form>
    </div>
  );
}

export default ReservationForm;
