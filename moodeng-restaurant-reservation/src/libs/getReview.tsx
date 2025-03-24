
export default async function getReview(id:string) {

    const response=await fetch(`https://restaurant-reservation-backend-blush.vercel.app/api/v1/restaurants/${id}/reviews`, { cache: "no-store" });

    if(!response.ok){
        throw new Error("failed to loaded the review")
    }
    return await response.json();
}