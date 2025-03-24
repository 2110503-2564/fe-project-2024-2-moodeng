
export default async function addReservation(id:string,token:string) {

    const response=await fetch(`http://localhost:5000/api/v1/reservations/${id}`, {
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