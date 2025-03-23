import CarPanel from "@/components/CarPanel";
import getCars from "@/libs/getCars";
import getRestaurants from "@/libs/getRestaurants";
import CarCatalog from "@/components/CarCatalog";
import { Suspense } from "react";
import { LinearProgress } from "@mui/material";
import { Pattaya } from "next/font/google";
import RestaurantCatalog from "@/components/RestaurantCatalog";

const pattaya = Pattaya({ weight: "400", subsets: ["thai", "latin"] }); 


export default function Car(){

    const cars = getCars();
    const restaurant=getRestaurants();
    
    return( 
        <main className="text-center p-5 ">
            <h1 className={pattaya.className} style={{ fontSize: "40px" }}>Select Your Restaurants</h1>
            {/* // <CarPanel/> */}
            <Suspense fallback={<p>Loading ...<LinearProgress/></p>}>
            <RestaurantCatalog venuesJson={restaurant} />
            <CarCatalog carJson={cars}/>
            </Suspense>
            <hr className="my-10"/>
             <CarPanel/>

        </main>
    )
}