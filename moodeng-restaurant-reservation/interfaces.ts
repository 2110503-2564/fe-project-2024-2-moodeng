import { PickerValueUpdateAction } from "@mui/x-date-pickers/internals/hooks/usePicker/usePickerValue.types"
import mongoose from "mongoose"

export interface ReservationItem{
    _id?: string,
    resDate:string,
    user:mongoose.Types.ObjectId,
    restaurant:mongoose.Types.ObjectId,
    quantity:string
}
export interface ReservationJson{
  success: boolean,
  count: number,
  pagination: Object,
  data: ReservationItem[]
}

export interface RestaurantItem{
    _id: string,
    name: string,
    address: string,
    district: string,
    province: string,
    postalcode: string,
    tel: string,    
    region: string,
    opentime: string,    
    closetime: string,    
    picture: string,
    __v: number,
    id: string
}
export interface RestaurantJson{
    success: boolean,
    count: number,
    pagination: Object,
    data: RestaurantItem[]
}


  export interface BookingItem {
    nameLastname: string;
    tel: string;
    venue: string;
    bookDate: string;
  }