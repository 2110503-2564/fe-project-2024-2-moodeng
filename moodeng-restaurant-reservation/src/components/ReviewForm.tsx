'use client'
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import addReviews from "@/libs/addReviews";
import editReview from "@/libs/editReview";
import { TextField } from "@mui/material";
import { getServerSession, Session } from "next-auth";
import { Pattaya } from "next/font/google";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const pattaya = Pattaya({ weight: "400", subsets: ["thai", "latin"] }); 


export default  function Reviewform({ session }: { session: Session  }) {
          
  const urlParams = useSearchParams();
  const [rid, setRid] = useState<string>("");

  useEffect(() => {
    const idFromUrl = urlParams.get("id");
    if (idFromUrl) setRid(idFromUrl);
  }, [urlParams]); 

  const [user, setUser] = useState<string>('');
  const [restaurant, setRestaurant] = useState<string>('');
  const [reviewStar, setReviewStar] = useState<number>();
  const [Description, setDescription] = useState<string>('');

  const makeReview= () => {
    if (user && restaurant && reviewStar&&Description) {

        addReviews(
        
        session.user.token,{
            user: user,
            restaurant: restaurant,
            reviewStar: reviewStar.toString(),
            Description: Description
        }
        
      );
      alert("Add Review Successfully!");

      
    }else if(rid){
        
        const reviewData = {
            ...(user && { user }),
            ...(restaurant && { restaurant }),
            ...(reviewStar && { reviewStar }),
            ...(Description && { Description })
          };
            editReview(session.user.token, rid, reviewData);
          alert("Review updated successfully!");
    }
  };

  return (
    <main className="w-[100%] flex flex-col items-center space-y-4">
        {rid?
        <div className={pattaya.className} style={{ fontSize: "96px" }}>Edit Review</div>
        :
        <div className={pattaya.className} style={{ fontSize: "96px" }}>New Review</div>
        }
      
      

      <div className="w-[50%] space-y-2 bg-yellow-50 p-5 rounded-xl border border-green-600">
        <div className="font-serif text-lg text-md text-left text-gray-600">
        Review Information
        </div>
        <div>
            <div className="flex flex-row px-2">
            <div className="w-[30%]">User:</div>
            <TextField variant="standard" name="user" label="user"
            className="flex justify-center w-[70%]" value={user}
            onChange={(e) => {
                setUser(e.target.value );
            }}
            />
            </div>
            <div className="flex flex-row px-2">
            <div className="w-[30%]">Restaurant Name :</div>
            <TextField variant="standard" name="Name" label="Name"
            className="flex justify-center w-[70%]" value={restaurant}
            onChange={(e) => {
                setRestaurant(e.target.value );
            }}
            />
            </div>
            <div className="flex flex-row ">
                <div className="flex flex-row px-2">
                <div className="w-[30%]">Review Star:</div>
                <TextField variant="standard" name="reviewStar" label="reviewStar"
                className="flex justify-center w-[70%]" value={reviewStar}
                onChange={(e) => {
                    setReviewStar(Number(e.target.value ));
                }}
                />
                </div>
                <div className="flex flex-row px-2">
                <div className="w-[30%]">Description:</div>
                <TextField variant="standard" name="Description" label="Description"
                className="flex justify-center w-[70%]" value={Description}
                onChange={(e) => {
                    setDescription(e.target.value );
                }}
                />
                </div>
            </div>
                </div>
            </div>
      <button
        className="font-serif
        block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm"
        onClick={makeReview}
      >
        Review this Restaurant
      </button>
    </main>
  );

}