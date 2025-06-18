import { PencilSquareIcon } from "@heroicons/react/24/solid";
import { format, formatDistance, isPast, isToday, parseISO } from "date-fns";
import DeleteReservation from "./DeleteReservation";
import Image from "next/image";
import Link from "next/link";
export const formatDistanceFromNow = (dateStr) =>
  formatDistance(parseISO(dateStr), new Date(), {
    addSuffix: true,
  }).replace("about ", "");

function ReservationCard({ booking, onDelete }) {
  const {
    id,
    guestId,
    startDate,
    endDate,
    numNights,
    totalPrice,
    numGuests,
    status,
    created_at,
    spaces: { name, image },
  } = booking;

  return (
    <div className="flex flex-col lg:flex-row">
      <div className="relative h-32 aspect-square">
        <Image
          src={image}
          fill
          alt={`space ${name}`}
          className="object-cover"
        />
      </div>

      <div className="flex-grow lg:px-6 flex flex-col">
        <div className="flex items-center justify-between">
          <h3 className="lg:text-xl font-semibold">
            {numNights} nights in space {name}
            <span className="lg:text-xl font-semibold dark:text-accent-400 ml-4 leading-none">
              ${totalPrice}
            </span>
          </h3>
          {isPast(new Date(startDate)) ? (
            <span className="bg-yellow-800 text-yellow-200 p-1 uppercase text-xs font-bold text-center mb-2 rounded-sm">
              past
            </span>
          ) : (
            <span className="bg-green-800 text-green-200 h-7 px-3 uppercase text-xs font-bold flex items-center rounded-sm">
              upcoming
            </span>
          )}
        </div>

        <p className="lg:text-lg leading-none">
          {format(new Date(startDate), "EEE, MMM dd yyyy")} (
          {isToday(new Date(startDate))
            ? "Today"
            : formatDistanceFromNow(startDate)}
          ) &mdash; {format(new Date(endDate), "EEE, MMM dd yyyy")}
        </p>

        <div className="flex items-baseline">
          {/* <p className="lg:text-lg">
            {numGuests} guest{numGuests > 1 && "s"}
          </p> */}
          <span className="text-sm">
            Booked {format(new Date(created_at), "EEE, MMM dd yyyy, p")}
          </span>
        </div>
      </div>

      <div className="flex flex-col border-l border-primary-800">
        {!isPast(startDate) ? (
          <>
            <Link
              href={`/account/reservations/edit/${id}`}
              className="group flex items-center gap-2 uppercase text-xs font-bold -300 border-b border-primary-800 flex-grow px-3 hover:bg-accent-600 transition-colors hover:-900"
            >
              <PencilSquareIcon className="h-5 w-5 -600 group-hover:-800 transition-colors" />
              <span className="mt-1">Edit</span>
            </Link>
            <DeleteReservation bookingId={id} onDelete={onDelete} />{" "}
          </>
        ) : null}
      </div>
    </div>
  );
}

export default ReservationCard;
