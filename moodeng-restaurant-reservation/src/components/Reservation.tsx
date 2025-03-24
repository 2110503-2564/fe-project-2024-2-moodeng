"use client";

import LocationDateReserve from "@/components/LocationDateReserveServer";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { ReservationItem } from "../../interfaces"; 
import { addReservation } from "@/redux/features/cartSlice";

export default function ReservationsClient({ userName }: { userName: string }) {
  const urlParams = useSearchParams();
  const rid = urlParams.get("id");
  const restaurant = urlParams.get("name");

  const [pickupDate, setPickupDate] = useState<Dayjs | null>(null);
  const [quantity, setQuantity] = useState<number>(0);
  const dispatch = useDispatch<AppDispatch>();

  const makeReservation = () => {
    if (rid && restaurant && pickupDate) {
      const item: ReservationItem = {
        _id: rid,
        resDate: dayjs(pickupDate).format("YYYY/MM/DD"),
        user: userName,
        restaurant: restaurant,
        quantity: quantity.toString(),
      };
      dispatch(addReservation(item));
    }
  };

  return (
    <main className="w-[100%] flex flex-col items-center space-y-4">
      <div className="text-xl font-medium">New Reservation</div>
      <div className="text-xl font-medium">{userName}</div>
      <div className="text-xl font-medium">{rid}</div>

      <div className="w-fit space-y-2">
        <div className="text-md text-left text-gray-600">
          Pick-Up Date and Location
        </div>
        <LocationDateReserve
                  onDateChange={(value: Dayjs) => setPickupDate(value)}
                  onLocationChange={(value: string) => setQuantity(Number(value))} 
   />
      </div>

      <button
        className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm"
        onClick={makeReservation}
      >
        Reserve this car
      </button>
    </main>
  );
}
