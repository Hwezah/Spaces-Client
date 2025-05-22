import { getBookedDatesByCabinId, getCabin } from "@/app/_lib/data-service";

export async function GET(request, { params }) {
  const { spaceId } = params;

  try {
    const [space, bookedDates] = await Promise.all([
      getCabin(spaceId),
      getBookedDatesByCabinId(cabinId),
    ]);

    return Response.json({ space, bookedDates });
  } catch {
    return Response.json({ message: "Space not found" });
  }
}

// export async function POST() {}
