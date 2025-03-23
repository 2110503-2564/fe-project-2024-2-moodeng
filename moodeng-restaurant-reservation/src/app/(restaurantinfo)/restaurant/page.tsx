import CarPanel from "@/components/CarPanel";
import getCars from "@/libs/getCars";
import CarCatalog from "@/components/CarCatalog";
import { Suspense } from "react";
import { LinearProgress } from "@mui/material";
import { Pattaya } from "next/font/google";

const pattaya = Pattaya({ weight: "400", subsets: ["thai", "latin"] }); 


export default function Car(){

    const cars = getCars();
    
    return( 
        <main className="text-center p-5 ">
            <h1 className={pattaya.className} style={{ fontSize: "40px" }}>Select Your Restaurants</h1>
            {/* // <CarPanel/> */}
            <Suspense fallback={<p>Loading ...<LinearProgress/></p>}>
            <CarCatalog carJson={cars}/>
            </Suspense>
            <hr className="my-10"/>
             <CarPanel/>

        </main>
    )
}