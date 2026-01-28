"use client"

import Link from "next/link"
import { ShoppingBag, Menu, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Navbar } from "./navbar"
type Props = {}

export default function TopNav({ }: Props) {
  return (
    <section className="bg-background/80 backdrop-blur-md fixed top-0 left-0 right-0 z-50   ">
      <div className="container mx-auto  " >
        <nav className="py-6">
          <div className="flex items-center justify-between">
            <div>Logo</div>
            <div>
              Search
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="hidden sm:flex">
                <Search className="w-5 h-5" />
              </Button>
              <div className="hidden md:flex items-center gap-4 mr-2">
                <Link
                  href="/login"
                  className="text-xs uppercase tracking-widest hover:text-muted-foreground transition-colors"
                >
                  Log In
                </Link>
                <Link href="/signup">
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
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="w-5 h-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-75 sm:w-100">
                  <SheetHeader>
                    <SheetTitle className="text-left font-serif tracking-widest">LUXE</SheetTitle>
                  </SheetHeader>
                  <div className="flex flex-col gap-8 mt-12 text-lg uppercase tracking-widest font-medium">
                    <Link href="/shop" className="hover:text-muted-foreground transition-colors">
                      Shop All
                    </Link>
                    <Link href="/collections" className="hover:text-muted-foreground transition-colors">
                      Collections
                    </Link>
                    <Link href="/about" className="hover:text-muted-foreground transition-colors">
                      Our Story
                    </Link>
                    <div className="flex flex-col gap-4 pt-4 border-t border-border">
                      <Link href="/login" className="hover:text-muted-foreground transition-colors">
                        Log In
                      </Link>
                      <Link href="/signup" className="hover:text-muted-foreground transition-colors">
                        Sign Up
                      </Link>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>

            </div>
          </div>
        </nav>
      </div>
          <Navbar></Navbar>
    </section>
  )
}