import mongoose from "mongoose";

export default async function addReservation(id:string,token:string,
    resDate:string,user:string,restaurant:string,quantity:string) {

    const response=await fetch(`https://restaurant-reservation-backend-blush.vercel.app/api/v1/restaurants/${id}/reservations`, {
        method:"POST",
        headers:{
            authorization:`Bearer ${token}`,
        },
        body:JSON.stringify({
            resDate: '',
            user: '',
            restaurant: '',
            quantity: '',
        })
    });

    if(!response.ok){
        throw new Error("failed to add the reservation")
    }
    return await response.json();
}