"use client"
import { ReservationJson } from "../../interfaces"
export default  function ReservationCart2({reservationJson}:{reservationJson:ReservationJson}){
    return(
        <>
        <div className="flex flex-row items-end">
        <div className="font-serif text-xl"> Reservations</div>
        <button className='bg-amber-800 text-white rounded border border-white
            font-serif text-xl py-2 px-2 m-2 z-50 ml-auto
            hover:bg-white  hover:text-amber-800 hover:border-transparent'>
            Add Restaurant
        </button>
        </div>    
        <div className=" w-[100%] p-10">
           
        {
            reservationJson.data.map((reservationItem)=>(
                <div className="bg-slate-200 rounded px-5 py-2 my-2"
                    key={reservationItem.id}>
                        {/* <div className="text-xl">{reservationItem.user.toString()}</div> */}
                        <div className="text-sm">Quantity {reservationItem.quantity}</div>
                        <div className="text-sm">Reservaition Date {reservationItem.resDate} </div>
                        <div className="text-md">{reservationItem.restaurant.toString()}</div>
                        <button className="bg-amber-800 text-white rounded border border-white
                            font-serif text-xl py-2 px-2 m-2 z-50 
                            hover:bg-white  hover:text-amber-800 hover:border-transparent" 
                            onClick={()=>{}}>
                            Remove Reservation
                        </button>
                </div>
                
            ))
         }
            
        </div>
    </>
    )
}
