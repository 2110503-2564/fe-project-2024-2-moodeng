//import getCar from "@/libs/getCar";
import getReview from "@/libs/getReview";
import Link from "next/link";
import { Pattaya } from "next/font/google";

const pattaya = Pattaya({ weight: "400", subsets: ["thai", "latin"] }); 


export default async function ReviewDetailPage({params}:{params:{rid:string}}){
    const ReviewDetail=await getReview(params.rid);

    return( 
        <main className="text-center p-5 font-serif bg-amber-50 rounded-xl border-lime-500 border-b-8">
            <h1 className={pattaya.className} style={{ fontSize: "72px" }}>{ReviewDetail.data.name} Review</h1>
            <div className="flex flex-row my-5 text-left"> 
                <div className="flex flex-col my-5 mx 5 ">
                <div className="text-2xl mx-5  ">Name: {ReviewDetail.data.user}</div>
                <div className="text-xl mx-5   mr-12">Restaurant: {ReviewDetail.data.restaurant}</div>
                <div className="text-xl mx-5   mr-12">ReviewStar: {ReviewDetail.data.reviewStar}</div>
                <div className="text-xl mx-5   ">Description: {ReviewDetail.data.Description}</div>

                </div>
            </div>
            <Link href={`/reviews?id=${params.rid}&name=${ReviewDetail.data.name}`}>
                <button className='bg-amber-800 text-white rounded border border-white
                    font-serif text-xl py-2 px-2 m-2 z-50 
                    hover:bg-white  hover:text-amber-800 hover:border-transparent'>
                    Make Review
                </button>
            </Link>

        </main>

    )
}

// export async function generateStaticParams() {
//     return[{rid:"001"},{rid:"002"},{rid:"003"},{rid:"004"}]
// }