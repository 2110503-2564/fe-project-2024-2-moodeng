import { PickerValueUpdateAction } from "@mui/x-date-pickers/internals/hooks/usePicker/usePickerValue.types"

export interface ReservationItem{
    carId:string
    carModel:string
    NumOfDays:string
    pickupDate:string
    pickupLocation:string
    returnDate:string
    returnLocation:string
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

export interface VenueItem {
    _id: string,
    name: string,
    address: string,
    district: string,
    province: string,
    postalcode: string,
    tel: string,
    picture: string,
    dailyrate: number,
    __v: number,
    id: string
  }
  
  export interface VenueJson {
    success: boolean,
    count: number,
    pagination: Object,
    data: VenueItem[]
  }

  export interface BookingItem {
    nameLastname: string;
    tel: string;
    venue: string;
    bookDate: string;
  }