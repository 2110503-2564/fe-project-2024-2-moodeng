"use client"
import { ReservationJson } from "../../interfaces"
import { Rating } from '@mui/material';
export default  function ReviewCart({reviewJson}:{reviewJson:ReviewJson}){
    console.log(reviewJson)
    return(
        <>
        <div className="flex flex-row items-end">
        <div className="font-serif text-xl"> Reviews</div>
        <button className='bg-amber-800 text-white rounded border border-white
            font-serif text-xl py-2 px-2 m-2 z-50 ml-auto
            hover:bg-white  hover:text-amber-800 hover:border-transparent'>
            Add Review
        </button>
        </div>    
        <div className=" w-[100%] p-10">
           
        {
            reviewJson.data.map((reviewItem)=>(
                <div className="bg-slate-200 rounded px-5 py-2 my-2"
                    key={reviewItem._id}>
                        {/* <div className="text-xl">{reservationItem.user.toString()}</div> */}
                        <div className="text-lg">ReviewStar: {reviewItem.reviewStar} <Rating defaultValue={reviewItem.reviewStar} onClick={(e)=>{e.stopPropagation();}}/></div>
                        <div className="text-lg">Description: {reviewItem.Description} </div>
                        <div className="text-lg">Restaurant: {reviewItem.restaurant.name} </div>
                        <div className="text-sm">Reviewer: {reviewItem.user} </div>
                        
                        <button className="bg-amber-800 text-white rounded border border-white
                            font-serif text-xl py-2 px-2 m-2 z-50 
                            hover:bg-white  hover:text-amber-800 hover:border-transparent" 
                            onClick={()=>{}}>
                            Remove Review
                        </button>
                </div>
                
            ))
         }
            
        </div>
    </>
    )
}