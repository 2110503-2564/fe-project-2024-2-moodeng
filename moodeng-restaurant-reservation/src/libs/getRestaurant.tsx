
export default async function getRestaurant(id:string) {

    const response=await fetch(`http://localhost:5001/api/v1/restaurants/${id}`, { cache: "no-store" });

    if(!response.ok){
        throw new Error("failed to loaded the restaurant")
    }
    return await response.json();
}