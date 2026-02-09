import React from "react";
import Image from "next/image";
import banner1 from "@/assets/images/banner1.jpeg";
import banner2 from "@/assets/images/banner2.jpeg";
export default function Banner() {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-2 gap-10">
        <Image src={banner1} alt="banner1" className="w-full rounded-xl" />
        <Image src={banner2} alt="banner2" className="w-full  rounded-xl" />
      </div>
    </div>
  );
}
