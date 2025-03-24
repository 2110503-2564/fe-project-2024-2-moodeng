//delete later
import {RestaurantItem,RestaurantJson} from "../../interfaces";

export default async function RestaurantCart({venuesJson}:{venuesJson:Promise<RestaurantJson>}){
    const venuesJsonready=await venuesJson
    
    return(
        <>
        <div className="flex flex-row items-end">
        <div className="font-serif text-xl">Explore {venuesJsonready.count} Restaurant in our catalog</div>
        <button className='bg-amber-800 text-white rounded border border-white
            font-serif text-xl py-2 px-2 m-2 z-50 ml-auto
            hover:bg-white  hover:text-amber-800 hover:border-transparent'>
            Add Restaurant
        </button>
        </div>    
            <div className=" w-[100%] p-10">
            {
            venuesJsonready.data.map((carditem:RestaurantItem)=>
                (
                    <div className="bg-slate-200 rounded px-5 py-2 my-2"
                    key={carditem.id}>
                        <div className="text-xl">ID:{carditem.id}</div>
                        <div className="text-sm">Open-time  {carditem.name} </div>
                        <div className="text-sm">Open-time  {carditem.opentime} </div>
                        <div className="text-sm">Close-time {carditem.closetime}  </div>
                        <div className="text-md">{carditem.tel}</div>
                        <button className='bg-amber-800 text-white rounded border border-white
                            font-serif text-xl py-2 px-2 m-2 z-50 
                            hover:bg-white  hover:text-amber-800 hover:border-transparent'>
                            Remove Restaurant
                        </button>
                    </div>
                ))
            }
            
        </div>
        </>
    )

}

