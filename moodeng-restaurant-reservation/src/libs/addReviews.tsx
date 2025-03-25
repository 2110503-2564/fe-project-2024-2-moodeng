export default async function addReviews(token:string,
    {user,restaurant,reviewStar,Description}:
    {user:string,restaurant:string,reviewStar:string,Description:string}
) {

    const response=await fetch(`https://restaurant-reservation-backend-blush.vercel.app/api/v1/restaurants`, {
        method:"POST",
        headers:{
            "Content-Type": "application/json",  
            authorization:`Bearer ${token}`,
        },
        body:JSON.stringify({
            user: user,
            restaurant: restaurant,
            reviewStar: reviewStar,
            Description: Description
        })
    });

    if(!response.ok){
        throw new Error("failed to add the review")
    }
    return await response.json();
}