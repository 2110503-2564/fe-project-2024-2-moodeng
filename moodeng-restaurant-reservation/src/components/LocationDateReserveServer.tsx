import getRestaurants from "@/libs/getRestaurants";
import LocationDateReserveClient from "./LocationDateReserveClient";

export default async function LocationDateReserve({ onDateChange, onLocationChange }: { onDateChange: Function, onLocationChange: Function }) {
    const restaurantsJson = await getRestaurants(); // Fetch data on server

    return (
        <LocationDateReserveClient 
            restaurants={restaurantsJson.data} 
            onDateChange={onDateChange} 
            onLocationChange={onLocationChange} 
        />
    );
}
