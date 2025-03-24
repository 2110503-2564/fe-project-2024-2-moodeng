
export default async function addReservation(id:string,token:string) {

    const response=await fetch(`https://restaurant-reservation-backend-blush.vercel.app/api/v1/reservations/${id}`, {
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
        throw new Error("failed to add the reservation")
    }
    return await response.json();
}