import Link from 'next/link'; 

export default  function ManagePage(){

    return(
        <div className='p-10 font-serif text-4xl '>
            <Link href='/reservations/manage'className=' hover:text-cyan-600 hover:underline'><div >
                - Manage your reservations</div></Link>

            <Link href='/review/manage'className=' hover:text-cyan-600 hover:underline'><div>
                - Manage your review</div></Link>

            <Link href='/restaurant/manage'className=' hover:text-cyan-600 hover:underline'><div>
                - Manage restaurant</div></Link>

        </div>
    )
}