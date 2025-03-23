import { resolve } from "path";

export default async function getRestaurants() {
    //await new Promise((resolve)=>setTimeout(resolve,5000) )

    const response=await fetch("http://localhost:5001/api/v1/restaurants", {next:{tags:['restaurant']}});

    if(!response.ok){
        throw new Error("failed to loaded the restaurants")
    }
    return await response.json();
}