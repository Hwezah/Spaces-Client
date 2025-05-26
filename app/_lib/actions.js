"use server";
import { revalidatePath } from "next/cache";
import { signIn } from "./auth.js";
import { signOut } from "./auth.js";
import { auth } from "./auth.js";
import { supabase } from "./supabase.js";
import { deleteBooking } from "./data-service.js";
import { getBookings } from "./data-service.js";
import { redirect } from "next/navigation";
export async function signInAction() {
  await signIn("google", { redirectTo: "/account" });
}
export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}

export async function updateGuestAction(formData) {
  const session = await auth();
  if (!session) throw new Error("You must be logged in");
  const nationalID = formData.get("nationalID");
  const [nationality, countryFlag] = formData.get("nationality").split("%");
  if (!/^[a-zA-Z0-9]{6,12}$/.test(nationalID))
    throw new Error("Please provide a valid national ID");
  const updateData = { nationality, countryFlag, nationalID };

  const { data, error } = await supabase
    .from("guests")
    .update(updateData)
    .eq("id", session.user.guestId);

  if (error) {
    throw new Error("Guest could not be updated");
  }
  revalidatePath("/account/profile");
}

export async function deleteReservationAction(bookingId) {
  const session = await auth();
  if (!session) throw new Error("You must be logged in");

  const guestBookings = await getBookings(session.user.guestId);
  const getBooking = guestBookings.map((booking) => booking.id);
  if (!getBooking.includes(bookingId))
    throw new Error("You are not authorized to delete this booking");
  await deleteBooking(bookingId);
  revalidatePath("/account/reservations");
}

export async function updateBookingAction(formData) {
  console.log(formData);
  const bookingId = Number(formData.get("bookingId"));
  const session = await auth();
  if (!session) throw new Error("You must be logged in");

  const guestBookings = await getBookings(session.user.guestId);
  const getBooking = guestBookings.map((booking) => booking.id);
  if (!getBooking.includes(bookingId))
    throw new Error("You are not authorized to update this booking");
  // const updateData = { ...formData };
  const updateData = {
    numGuests: Number(formData.get("numGuests")),
    observations: formData.get("observations").slice(0, 1000),
  };

  const { error } = await supabase
    .from("bookings")
    .update(updateData)
    .eq("id", bookingId)
    .select()
    .single();

  if (error) throw new Error("Booking could not be updated");
  revalidatePath("/account/reservations");
  revalidatePath(`/account/reservations/edit/${bookingId}`);
  redirect("/account/reservations");
}
