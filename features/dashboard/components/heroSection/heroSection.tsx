import React from "react";
import Image from "next/image";
import bg from "@/assets/images/bg.jpeg";
export default function HeroSection() {
  return (
    <section className="container mx-auto py-32">
      <div className="gap-8">
        <div></div>
        <div className="">
          <div>
            <Image src={bg} alt="bg" className="w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
