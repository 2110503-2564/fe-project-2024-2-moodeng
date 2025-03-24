import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import getUserProfile from "@/libs/getUserProfile";
import ReservationsClient from "@/components/Reservation";

export default async function ReservationsServer() {
    const session = await getServerSession(authOptions);
    const profile = session ? await getUserProfile(session.user?.token) : null;
  
    return <ReservationsClient userName={profile?.data.name || "Guest"} />;
}
