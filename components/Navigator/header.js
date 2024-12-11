'use client' ;

import Sidebar from "@/utilities/Sidebar";
import Link from "next/link";
import ltp from "@/public/2.png";
import Image from "next/image";
import { usePathname } from "next/navigation";


export default function Header()
{
    const path = usePathname() ;
    let activeMain , activeAbout ,activeOrder ,activeDump;



    if(path==='/')  
    {
        activeMain = "text-blue-500" ;
    }
    if(path.startsWith('/dump'))  
        {
            activeDump = "text-blue-500" ;
        }
    if(path.startsWith('/about'))  
        {
            activeAbout = "text-blue-500" ;
        }
        if(path.startsWith('/order'))  
            {
                activeOrder = "text-blue-500" ;
            }

    return (

        <div className=" bg-slate-200 p-4 rounded-b-2xl flex gap-6 items-center">
             {/* <Sidebar/> */}
             <Image src={ltp} alt="dfjpbhiorsh" priority  width={50}
      height={50} placeholder = 'blur' style={{
        objectFit: 'contain',
      }} />
            <Link href="/dashboard" className={activeMain} >
             الرئيسية </Link>
            <Link href="/about" className={activeAbout}>
             About</Link>
             <Link href="/order" className={activeOrder}>
             Orders</Link>
             <Link href="/dump" className={activeDump}>
             Dump</Link>
        </div>

    )
}