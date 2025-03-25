'use client'
import Image from 'next/image'
import InteractiveCard from './InteractiveCard'
import { Rating } from '@mui/material';
import { useRouter } from "next/navigation"
import Link from 'next/link';
import RestaurantDetailPage from '@/app/(restaurantinfo)/restaurant/[rid]/page';

export default function productcard( {carName,imgSrc,onCompare, reviewJson}:
    {carName:string,imgSrc:string,onCompare?:Function, reviewItem?: { reviewJson:ReviewJson }}){
   
        const router = useRouter();
    return(
        //interactiveCard have child that display in itself
        <InteractiveCard contentName={carName} >
            <div className='bg-yellow-50 h-full w-full'>

            <div className='w-full h-[70%] relative rounded-t-lg '>
             <Image src={imgSrc} 
             alt='Product Picture'
             fill={true}
             className='object-cover rounded-t-lg'
             />

            </div>

            <div className='w-full h-[15%] p-[10px]'>
                {carName}
            </div>
            
            <div className='flex flex-row absoulte left-0 bottom-0
            w-full h-[15%] p-[10px] text-left m-2  '>
                <div>
                <Rating defaultValue={0} onClick={(e)=>{e.stopPropagation();}}/> 
                </div>
               <div className='text-sm underline hover:text-blue-600' onClick={(e) => {
                    e.stopPropagation(); 
                    router.push("/a"); // go to add review
                }}>4.00</div>
            
                    
            
                <button className="font-serif text-sm rounded-md bg-sky-600 hover:bg-indigo-600 mx-2 px-1 py-1 text-white shadow-sm" onClick={(e)=>{e.stopPropagation(); e.preventDefault();}}>
                +Review
                </button>
                
            </div>

            </div>
        </InteractiveCard>
    )
}