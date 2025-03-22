'use client'
import { useState } from 'react';
import styles from './banner.module.css'
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

export default function banner(){
    const covers=['/image/temp.png'];
    const [index,setIndex]=useState(0);
    const rounter =useRouter();

    const{data:session}=useSession();
    console.log(session?.user.token);

    return( 
        <div className={styles.banner} onClick={()=> {setIndex(index+1)}}>
            <Image src={covers[index%3]}
            alt='cover'
            fill={true}
            objectFit='cover'
            priority
            /> 

            <div className={styles.bannerText}>
                <h1 className='text-4xl'>Your Travel Partner</h1>
                <h3 className='text-xl font-serif'>Explore Your World with Us</h3>
            </div>

            {session?
                <div className='z-30 absolute top-5 right-10 font-semibold text-cyan-800 text-xl'> 
                    Hello {session.user?.name}
                </div>
                : null
            }

            <button className='bg-white text-cyan-600 border border-cyan-600
            font-semibold py-2 px-2 m-2 z-30 absolute bottom-0 right-0
            hover:bg-cyan-600  hover:text-white hover:border-transparent'
            onClick={(e)=>{rounter.push('/car');e.stopPropagation()}}>
                Select Your Travel Parner NOW
            </button>

        </div>
    )
}