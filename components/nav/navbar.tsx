"use client";

import Link from "next/link";
import { ShoppingBag, Menu, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Category from "./category";

export function Navbar() {
  return (
    <section className="bg-primary">
      <div className="container mx-auto py-2">
        <div className="flex items-center justify-between">
          <div>
            <Category></Category>
          </div>

          <div className="flex items-center gap-8">
            <div className="hidden md:flex items-center gap-6 text-sm uppercase tracking-tighter font-medium">
              <Link href="/" className="text-secondary transition-colors">
                Home
              </Link>
              <Link href="/shop" className="text-secondary transition-colors">
                Shop All
              </Link>

              <Link href="/about" className="text-secondary transition-colors">
                Our Story
              </Link>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
}
