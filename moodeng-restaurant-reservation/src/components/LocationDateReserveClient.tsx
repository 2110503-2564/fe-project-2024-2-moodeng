"use client";

import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Select, MenuItem } from "@mui/material";
import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { RestaurantItem } from "../../interfaces";

export default function LocationDateReserveClient({
    restaurants,
    onDateChange,
    onLocationChange
}: {
    restaurants: RestaurantItem[];
    onDateChange: Function;
    onLocationChange: Function;
}) {
    const [reserveDate, setReserveDate] = useState<Dayjs | null>(null);
    const [location, setLocation] = useState("BKK");

    return (
        <div className="bg-slate-100 rounded-lg space-x-5 space-y-2 w-fit px-10 py-5 flex flex-row justify-center">
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
                {restaurants.map((restaurant) => (
                    <MenuItem key={restaurant.name} value={restaurant.name}>
                        {restaurant.name}
                    </MenuItem>
                ))}
            </Select>
        </div>
    );
}
