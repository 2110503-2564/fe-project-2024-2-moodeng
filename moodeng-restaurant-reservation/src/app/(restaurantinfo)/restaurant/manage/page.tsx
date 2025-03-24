import RestaurantCart from "@/components/RestaurantCart"
import getRestaurants from "@/libs/getRestaurants";
import { Pattaya } from "next/font/google";

const pattaya = Pattaya({ weight: "400", subsets: ["thai", "latin"] }); 


export default async function ManageReservations() {
    const restaurant = await getRestaurants();
    
    return (
        <main className="p-10 w-full">
            <h1 className={`${pattaya.className} text-center text-4xl`} style={{ fontSize: "40px" }}>Manage Restaurants</h1>

            <RestaurantCart venuesJson={restaurant}/>
        </main>
    )
}