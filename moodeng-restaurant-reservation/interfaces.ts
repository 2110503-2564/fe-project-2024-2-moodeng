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