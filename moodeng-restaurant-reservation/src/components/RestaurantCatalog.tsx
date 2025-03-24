import Productcard from "./ProductCard"
import Link from "next/link"
import {RestaurantItem,RestaurantJson} from "../../interfaces";

export default async function RestaurantCatalog({venuesJson}:{venuesJson:Promise<RestaurantJson>}){
    const venuesJsonready=await venuesJson
    
    return(
        <>
        <div className="font-serif text-xl">Explore {venuesJsonready.count} Restaurant in our catalog</div>
            
            <div style={{margin:"20px", display:"flex",flexDirection:"row",
            flexWrap:"wrap",justifyContent:"space-around",
            alignContent:"space-around"}}>{
                venuesJsonready.data.map((carditem:RestaurantItem)=>(
                    <Link href={`/restaurant/${carditem.id}` }className="w-1/5"key={carditem.id}>
                   <Productcard carName={carditem.name} imgSrc={carditem.picture} />
                    </Link>
                ))
            }
            </div>
        </>
    )

}
