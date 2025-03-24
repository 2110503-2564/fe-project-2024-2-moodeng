
export default async function addReviews(id:string,token:string) {

    const response=await fetch(`https://restaurant-reservation-backend-blush.vercel.app/api/v1/restaurants/${id}/reviews`, {
        method:"POST",
        headers:{
            authorization:`Bearer ${token}`,
        },
        body:JSON.stringify({
            email:'',
            password:''
        })
    });

    if(!response.ok){
        throw new Error("failed to add the review")
    }
    return await response.json();
}