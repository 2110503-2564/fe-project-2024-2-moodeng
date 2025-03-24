"use client";

import LocationDateReserve from "@/components/LocationDateReserveServer";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/Reservationstore";
import { ReservationItem, RestaurantItem, RestaurantJson } from "../../interfaces"; 
import { addReservation } from "@/redux/features/ReservationSlice";
import { Pattaya } from "next/font/google";
import mongoose from "mongoose";

const pattaya = Pattaya({ weight: "400", subsets: ["thai", "latin"] }); 

export default function ReservationsClient({ userid,userName,restaurants }: 
    { userid:string,userName: string ,restaurants:RestaurantJson}) {
  const urlParams = useSearchParams();
  const rid = urlParams.get("id");
  

  const [pickupDate, setPickupDate] = useState<Dayjs | null>(null);
  const [quantity, setQuantity] = useState<number>(0);
  const [restaurant, setRestaurant] = useState<string>(urlParams.get("name")||'');
  const dispatch = useDispatch<AppDispatch>();

  const makeReservation = () => {
    if (rid && restaurant && pickupDate) {
        const restaurantitem = restaurants.data.find((r: RestaurantItem) => r.name === restaurant);
        const restaurantid=restaurantitem?._id
        console.log(restaurantid)

      const item: ReservationItem = {
        resDate: dayjs(pickupDate).format('YYYY/MM/DD'),
        user:  new mongoose.Types.ObjectId(userid),
        restaurant: new mongoose.Types.ObjectId(restaurantid),
        quantity: quantity.toString(),
      };
      
    }
  };

  return (
    <main className="w-[100%] flex flex-col items-center space-y-4">
      <div className={pattaya.className} style={{ fontSize: "96px" }}>New Reservation</div>
      <div className="text-xl font-serif">{userName}</div>
      <div className="text-xl font-serif">{rid}</div>

      <div className="w-fit space-y-2">
        <div className="font-serif text-lg text-md text-left text-gray-600">
        Reservation Information
        </div>
        <LocationDateReserve
                  onDateChange={(value: Dayjs) => setPickupDate(value)}
                  onLocationChange={(value: string) => setRestaurant(value)}
                  onQuantityChange={(value: string) => setQuantity(Number(value))}

                restaurants={restaurants}   
        />
      </div>

      <button
        className="font-serif
        block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm"
        onClick={makeReservation}
      >
        Reserve this Restaurant
      </button>
    </main>
  );
}
