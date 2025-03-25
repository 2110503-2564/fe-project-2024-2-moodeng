'use client'
import Link from "next/link";
import { RestaurantItem, RestaurantJson } from "../../interfaces";
import { ReviewItem, ReviewJson } from "../../interfaces";
import deleteReview from "@/libs/DeleteReview";
import { Session } from "next-auth";

export default function ReviewCart({ venuesJson, session }: { venuesJson: ReviewJson, session: Session }) {
    const venuesJsonready = venuesJson;

    const onDelete = (rid: string) => {
        alert('delete review')
        deleteReview(
            session.user.token, rid
        ).then(() => {
            window.location.reload();
        })
    };

    return (
        <>
            <div className="flex flex-row items-end mb-6">
                <div className="font-serif text-xl">{venuesJsonready.count} Review in your catalog</div>
                <Link href='/review/manage/add' className='m-2 z-50 ml-auto'>
                    <button className='bg-amber-800 text-white rounded border border-white
                    font-serif text-xl py-2 px-2 
                    hover:bg-white hover:text-amber-800 hover:border-transparent'>
                        Add Review
                    </button>
                </Link>
            </div>
            <div className="w-full p-10 space-y-6">
                {venuesJsonready.data.map((carditem: ReviewItem) => (
                    <Link href={`manage/add?id=${carditem._id}`} className="w-full" key={carditem._id}>
                        <div className="bg-blue-200 rounded-lg px-5 py-4 my-4 hover:bg-blue-300 transition-all duration-300">
                            <div className="text-xl font-semibold">ID: {carditem._id}</div>
                            <div className="text-sm">Name: {carditem.user}</div>
                            <div className="text-sm">Review Star: {carditem.reviewStar}</div>
                            <div className="text-sm">Description: {carditem.Description}</div>
                            <button
                                className='bg-amber-800 text-white rounded border border-white
                                font-serif text-xl py-2 px-2 m-2 z-50 
                                hover:bg-white hover:text-amber-800 hover:border-transparent'
                                onClick={(e) => {
                                    e.stopPropagation(); e.preventDefault();
                                    onDelete(carditem._id)
                                }}
                            >
                                Remove Review
                            </button>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    );
}
