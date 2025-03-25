import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import getUserProfile from "@/libs/getUserProfile";
import ReservationsClient from "@/components/Reservation2";
import getRestaurants from "@/libs/getRestaurants";

export default async function ReservationsServer() {
    const session = await getServerSession(authOptions);
    const profile = session ? await getUserProfile(session.user?.token) : null;
    const restaurantsJson = await getRestaurants(); // Fetch data on server
    
  
    return <ReservationsClient userid={profile?.data._id } userName={profile?.data.name || "Guest"} restaurants={restaurantsJson}/>;
}
