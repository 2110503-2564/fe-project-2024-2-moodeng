import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import getUserProfile from "@/libs/getUserProfile";
import ReviewsClient from "@/components/Reservation";
import getRestaurants from "@/libs/getRestaurants";
import getReservations from "@/libs/getReservations";

export default async function ReviewsServer() {
    const session = await getServerSession(authOptions);
    const profile = session ? await getUserProfile(session.user?.token) : null;
    const restaurantsJson = await getRestaurants(); // Fetch data on server
    const reservationsJson = await getReservations();
    
  
    return <ReviewsClient userid={profile?.data._id } userName={profile?.data.name || "Guest"} restaurants={restaurantsJson} reservations={reservationsJson}/>;
}