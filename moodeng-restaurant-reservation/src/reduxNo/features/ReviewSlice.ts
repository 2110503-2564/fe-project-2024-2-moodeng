import { createSlice,PayloadAction} from "@reduxjs/toolkit";
import { ReservationItem } from "../../../interfaces";
import addReviews from "@/libs/addReviews";

type CartState={
    carItems:ReviewItem[]
}

const initialState:CartState={carItems:[]}

export const cartSlice=createSlice({
    name:"reviews/manage",
    initialState,
    reducers:{
        addReviews:(state,action:PayloadAction<ReservationItem>)=>{
            state.carItems.push(action.payload)
        },
        removeReviews:(state,action:PayloadAction<ReservationItem>)=>{
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

export const{addReviews,removeReviews}=cartSlice.actions
export default cartSlice.reducer