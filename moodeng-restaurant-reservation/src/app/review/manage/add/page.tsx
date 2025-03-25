import ReviewForm from "@/components/ReviewForm";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
export default async function addReviews() {
    const session =await getServerSession(authOptions);
    
    return (
        <main className="p-10">
            {
            session?
            <ReviewForm session={session}/>
            :null
            }
            
        </main>
    )
}