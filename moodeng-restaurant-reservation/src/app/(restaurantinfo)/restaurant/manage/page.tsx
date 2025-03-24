import RestaurantCart from "@/components/RestaurantCart"
import getRestaurants from "@/libs/getRestaurants";
import { Pattaya } from "next/font/google";

const pattaya = Pattaya({ weight: "400", subsets: ["thai", "latin"] }); 


export default function ManageReservations() {
    const restaurant=getRestaurants();
    
    return (
        <main className="p-10">
            <h1 className={`${pattaya.className} text-center text-4xl`} style={{ fontSize: "40px" }}>Select Your Restaurants</h1>

            <RestaurantCart venuesJson={restaurant}/>
        </main>
    )
}