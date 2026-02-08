"use client"


import Link from "next/link";
import Image from "next/image"
import { useState } from "react";
import { Navbar } from "./navbar"
import SearchBar from "./searchBar"
import { Button } from "@/components/ui/button"
import logo from "@/assets/images/logo/logo.png"
import { ShoppingBag, Search } from "lucide-react"


export default function TopNav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="bg-background/80 backdrop-blur-md  top-0 left-0 right-0 z-50   relative">
      <div className="container mx-auto  " >
        <nav className="py-6">
          <div className="flex items-center justify-between">
            <div>
              <Image src={logo} alt="logo" width={150} height={100} />
            </div>
            <div className="flex items-center gap-4">

              <div className="">
                <Button
                  variant="ghost"
                  size="icon"
                  className="hidden sm:flex z-10"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <Search className="w-5 h-5" />
                </Button>
                <div className=" w-full bg-black">
                  <SearchBar isOpen={isOpen} setIsOpen={setIsOpen}></SearchBar>
                </div>
              </div>
              <div className="hidden md:flex items-center gap-4 mr-2">
                <Link
                  href="/auth/login"
                  className="text-xs uppercase tracking-widest hover:text-muted-foreground transition-colors"
                >
                  Log In
                </Link>
                <Link href="/auth/sign_up">
                  <Button size="sm" className="uppercase tracking-widest text-[10px] px-4 h-8">
                    Sign Up
                  </Button>
                </Link>
              </div>
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingBag className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-4 h-4 bg-primary text-primary-foreground text-[10px] flex items-center justify-center rounded-full">
                  0
                </span>
              </Button>

            </div>
          </div>
        </nav>
      </div>
      <Navbar></Navbar>
    </section>
  )
}


