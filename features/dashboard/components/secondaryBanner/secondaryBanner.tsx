import React from 'react'
import Image from "next/image";
import banner3 from "@/assets/images/banner3.jpeg"
import banner4 from "@/assets/images/banner4.jpeg";
import banner5 from "@/assets/images/banner5.jpeg";
export default function SecondaryBanner() {
    return (
        <div className='container mx-auto'>
            <div className='grid grid-cols-3 gap-10'>
                <Image src={banner3} alt="banner1" className='w-full rounded-xl' />
                <Image src={banner4} alt="banner2" className='w-full  rounded-xl' />
                <Image src={banner5} alt="banner2" className='w-full  rounded-xl' />
            </div>
        </div>
    )
}
