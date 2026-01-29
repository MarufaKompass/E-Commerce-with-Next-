import React from 'react'
import Image from "next/image"
import bg from "@/assets/images/bg.jpeg"
export default function HeroSection() {
    return (
        <section className='container mx-auto py-32'>
            <div className="grid grid-cols-4 gap-8">
                <div>

                </div>
                <div className='col-span-3'>
                  <div>
                    <Image src={bg} alt ="bg"/>
                  </div>
                </div>
            </div>
        </section>
    )
}
