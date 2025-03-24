'use client'
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Select, MenuItem, TextField } from "@mui/material";
import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { RestaurantItem, RestaurantJson } from "../../interfaces";

export default  function LocationDateReserve({ onDateChange, onLocationChange,onQuantityChange,restaurants }: 
    { onDateChange: Function, onLocationChange: Function ,onQuantityChange:Function,restaurants:RestaurantJson}) {
    

    const [reserveDate, setReserveDate] = useState<Dayjs | null>(null);
    const [location, setLocation] = useState("");
    const [quantity, setQuantity] = useState<number>(0);


    return (
        <div className="bg-slate-100 rounded-lg space-x-5 space-y-2 w-fit px-10 py-5 justify-center">
        <div className="bg-slate-100 rounded-lg space-x-5 space-y-2 w-fit  flex flex-row ">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    className="bg-white"
                    value={reserveDate}
                    onChange={(value) => {
                        setReserveDate(value);
                        onDateChange(value);
                    }}
                />
            </LocalizationProvider>

            <Select
                variant="standard"
                name="location"
                id="location"
                className="h-[2em] w-[200px]"
                value={location}
                onChange={(e) => {
                    setLocation(e.target.value);
                    onLocationChange(e.target.value);
                }}
            >
                {restaurants.data.map((restaurant:RestaurantItem) => (
                    <MenuItem key={restaurant.name} value={restaurant.name}>
                        {restaurant.name}
                    </MenuItem>
                ))}
            </Select>
        </div>
                <TextField variant="standard" name="Quantity" label="Quantity"
                className="flex justify-center w-[50%]"
                    value={quantity}
                    onChange={(e) => {
                        const newValue = Number(e.target.value); // แปลงเป็น number
                        setQuantity(newValue);
                        onQuantityChange(newValue);
                      }}
                />
        </div>
    );
}

