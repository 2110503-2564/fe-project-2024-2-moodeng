import { resolve } from "path";

export default async function getCars() {
    //const response=await fetch("http://localhost:5000/api/v1/cars");
    await new Promise((resolve)=>setTimeout(resolve,5000) )

    const response=await fetch("http://localhost:5000/api/v1/cars", {next:{tags:['cars']}});
    
    if(!response.ok){
        throw new Error("failed to loaded the cars")
    }
    return await response.json();
}