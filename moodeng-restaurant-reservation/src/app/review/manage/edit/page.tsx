import ReviewCart from "@/components/ReviewCart"
import getReviews from "@/libs/getReviews";
import { Pattaya } from "next/font/google";

const pattaya = Pattaya({ weight: "400", subsets: ["thai", "latin"] }); 


export default function EditManageReview() {
    //const review=getReviews();
    
    return (
        <main className="p-10">
            add and edit review
        </main>
    )
}