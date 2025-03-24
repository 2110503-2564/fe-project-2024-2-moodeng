import RestaurantCart from "@/components/RestaurantCart"
import getRestaurants from "@/libs/getRestaurants";
import { Pattaya } from "next/font/google";

const pattaya = Pattaya({ weight: "400", subsets: ["thai", "latin"] }); 


export default function EditReservation() {
    const restaurant=getRestaurants();
    
    return (
        <main className="p-10">
            add and edit restaurant
        </main>
    )
}