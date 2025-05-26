"use client";
import { useOptimistic } from "react";
import ReservationCard from "@/app/_components/ReservationCard";
import { deleteBookingAction } from "@/app/_lib/actions";
export default function ReservationList({ bookings }) {
  const [optimisticBookings, optimisticDelete] = useOptimistic(
    bookings,
    (curBookings, bookingId) => {
      return curBookings.filter((booking) => booking.id !== bookingId);
    }
  );
  async function handleDelete(bookingId) {
    optimisticDelete(bookingId);
    try {
      await deleteBookingAction(bookingId);
    } catch (err) {
      console.error("Failed to delete reservation", err);
      // Optionally refetch bookings or show a toast
    }
  }

  return (
    <ul className="space-y-6">
      {optimisticBookings.map((booking) => (
        <ReservationCard
          booking={booking}
          key={booking.id}
          onDelete={handleDelete}
        />
      ))}
    </ul>
  );
}
