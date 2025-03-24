import { createSlice,PayloadAction} from "@reduxjs/toolkit";
import { RestaurantItem } from "../../../interfaces";

type RestaurantState={
    restaurantItems:RestaurantItem[]
}

const initialState:RestaurantState={restaurantItems:[]}

export const restaurantSlice=createSlice({
    name:"restaurant",
    initialState,
    reducers:{
        addReservation:(state,action:PayloadAction<RestaurantItem>)=>{
            state.restaurantItems.push(action.payload)
        },
        removeReservation:(state,action:PayloadAction<RestaurantItem>)=>{
             const remainItem= state.restaurantItems.filter(obj=>{
                return(obj.id!==action.payload.id)
             });
             state.restaurantItems=remainItem
        }
    }
})

export const{addReservation,removeReservation}=restaurantSlice.actions
export default restaurantSlice.reducer