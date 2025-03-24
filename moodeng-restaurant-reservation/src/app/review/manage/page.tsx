import ReviewCart from "@/components/ReviewCart"
import { Pattaya } from "next/font/google";
import getReviews from "@/libs/getReviews"
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const pattaya = Pattaya({ weight: "400", subsets: ["thai", "latin"] });

export default async function ManageReview() {
    const session =await getServerSession(authOptions);
    const review=await getReviews(session?.user?.token??'');
    return (
        <main className="w-full p-10">
            <h1 className={`${pattaya.className} text-center text-4xl`} style={{ fontSize: "40px" }}>Manage Reviews</h1>

            {/* <ReviewCart/> */}
            <ReviewCart reviewJson={review}/>
        </main>
    )
}