"use client";
import { TrashIcon } from "@heroicons/react/24/solid";
import { useTransition } from "react";
import SpinnerMini from "./SpinnerMini";
function DeleteReservation({ bookingId, onDelete }) {
  const [isPending, startTransition] = useTransition();
  function handleDelete() {
    if (confirm("Are you sure you want to delete this reservation?"))
      startTransition(() => {
        onDelete(bookingId);
      });
  }
  return (
    <button
      onClick={handleDelete}
      className="group flex items-center gap-2 uppercase text-xs font-bold -300 flex-grow px-3 hover:bg-accent-600 transition-colors hover:-900"
    >
      {!isPending ? (
        <>
          <TrashIcon className="h-5 w-5 -600 group-hover:-800 transition-colors" />
          <span className="mt-1">Delete</span>{" "}
        </>
      ) : (
        <SpinnerMini />
      )}
    </button>
  );
}

export default DeleteReservation;
