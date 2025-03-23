import Productcard from "./ProductCard"
import Link from "next/link"

export default async function CarCatalog({carJson}:{carJson:Object}){
    const carJsonready=await carJson
    return(
        <>
        Explore {carJsonready.count} models in our catalog
            <div style={{margin:"20px", display:"flex",flexDirection:"row",
                flexWrap:"wrap",justifyContent:"space-around",
                alignContent:"space-around",padding:"10px"}}>
                    {
                        carJsonready.data.map((caritem:Object)=>(
                            <Link href={`/restaurant/${caritem.id}` }
                            className="w-[100%] sm:w-[50%] md:w-[30%] lg:w-[25%]
                            p-2 sm:p-4 md:p-4 lg:p-8"key={caritem.id}>
                                <Productcard carName={caritem.model} imgSrc={caritem.picture}/>
                            </Link>
                        ))
                    }
            </div>
        </>
    )

}