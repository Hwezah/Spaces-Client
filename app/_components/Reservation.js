import DateSelector from "@/app/_components/DateSelector";
import ReservationForm from "@/app/_components/ReservationForm";
import { getSettings, getBookedDatesByspaceId } from "@/app/_lib/data-service";
export default async function Reservation({ space }) {
  const [settings, bookedDates] = await Promise.all([
    getSettings(),
    getBookedDatesByspaceId(space.id),
  ]);
  return (
    <div className="flex lg:flex-wrap border border-primary-800 min-h-[400px]">
      <DateSelector
        settings={settings}
        bookedDates={bookedDates}
        space={space}
      />
      <ReservationForm space={space} />
    </div>
  );
}
