
export default async function getCar(id:string) {

    const response=await fetch(`http://localhost:5000/api/v1/cars/${id}`, { cache: "no-store" });

    if(!response.ok){
        throw new Error("failed to loaded the cars")
    }
    return await response.json();
}