
export default async function getRestaurant(id:string) {

    const response=await fetch(`https://restaurant-reservation-backend-blush.vercel.app/api/v1/restaurants/${id}`, { cache: "no-store" });

    if(!response.ok){
        throw new Error("failed to loaded the restaurant")
    }
    return await response.json();
}