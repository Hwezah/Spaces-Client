import DateSelector from "@/app/_components/DateSelector";
import ReservationForm from "@/app/_components/ReservationForm";
import { getSettings, getBookedDatesByspaceId } from "@/app/_lib/data-service";
import LoginMessage from "@/app/_components/LoginMessage";
import { auth } from "@/app/_lib/auth";
export default async function Reservation({ space }) {
  const [settings, bookedDates] = await Promise.all([
    getSettings(),
    getBookedDatesByspaceId(space.id),
  ]);
  const session = await auth();
  return (
    <div className="grid xl:grid-cols-[2fr_1fr] lg:flex-row  border border-primary-800 min-h-[400px]">
      <DateSelector
        settings={settings}
        bookedDates={bookedDates}
        space={space}
      />
      {session?.user ? (
        <ReservationForm space={space} user={session.user} />
      ) : (
        <LoginMessage />
      )}
    </div>
  );
}
