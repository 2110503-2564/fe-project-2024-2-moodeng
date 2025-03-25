import { createSlice,PayloadAction} from "@reduxjs/toolkit";
import { ReservationItem } from "../../../interfaces";

type CartState={
    carItems:ReservationItem[]
}

const initialState:CartState={carItems:[]}

export const cartSlice=createSlice({
    name:"reservations/manage",
    initialState,
    reducers:{
        addReservation:(state,action:PayloadAction<ReservationItem>)=>{
            state.carItems.push(action.payload)
        },
        removeReservation:(state,action:PayloadAction<ReservationItem>)=>{
             const remainItem= state.carItems.filter(obj=>{
                return((obj._id!==action.payload._id)||
                (obj.resDate!==action.payload.resDate)||
                (obj.user!==action.payload.user)||
                (obj._id!==action.payload._id))
             });
             state.carItems=remainItem
        }
    }
})

export const{addReservation,removeReservation}=cartSlice.actions
export default cartSlice.reducer