import style from './topmenu.module.css'
import Link from 'next/link'

export default function TopMenuItem({title,pageRef}:{title:string,pageRef:string}){
    return(
        <Link href={pageRef} className={style.itemcontainer}>
            {title}
        </Link>
    )
}