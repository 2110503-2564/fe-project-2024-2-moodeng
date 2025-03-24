"use client"
import { removeReservation } from "@/redux/features/cartSlice"
import { useAppSelector,AppDispatch } from "@/redux/store"
import { useDispatch, UseDispatch } from "react-redux"

export default function ReservationCart(){
    const carItems=useAppSelector((state)=>state.cartSlice.carItems)
    const dispatch=useDispatch<AppDispatch>()
    return(
         <>
         {
            carItems.map((reservationItem)=>(
                <div className="bg-slate-200 rounded px-5 py-2 my-2"
                    key={reservationItem._id}>
                        <div className="text-xl">{reservationItem.user}</div>
                        <div className="text-sm">Pick-up {reservationItem.quantity}</div>
                        <div className="text-sm">Pick-up {reservationItem.resDate} </div>
                        <div className="text-md">{reservationItem.restaurant}</div>
                        <button className="block rounded-md bg-sky-600  hover:bg-indigo-600 
                            px-3 py-2 text-white shadow-sm" onClick={()=>dispatch(removeReservation(reservationItem))}>
                            Remove from Cart
                        </button>
                </div>
                
            ))
         }
         </>
    )
}