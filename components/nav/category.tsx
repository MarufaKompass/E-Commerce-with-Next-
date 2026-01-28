"use client";

import React, { useEffect, useRef, useState } from "react";
import { AlignJustify } from 'lucide-react';

const categories = [
  {
    name: "Egg",
    sub: ["Chicken Egg", "Duck Egg", "Organic Egg"],
  },
  {
    name: "Fish",
    sub: ["Hilsa", "Rui", "Katla", "Tilapia"],
  },
  {
    name: "Meat",
    sub: ["Mutton", "Lamb", "Goat"],
  },
  {
    name: "Chicken",
    sub: ["Broiler", "Desi Chicken", "Frozen Chicken"],
  },
  {
    name: "Beef",
    sub: ["Regular Beef", "Premium Beef", "Minced Beef"],
  },
];

export default function Category() {
  const [active, setActive] = useState<number | null>(null);
  const [open, setOpen] = useState(false);
  // const dropdownRef = useRef(null);

  // useEffect(() => {
  //   function handleClickOutside(event: { target: any; }) {
  //     if (
  //       dropdownRef.current &&
  //       !dropdownRef.current.contains(event.target)
  //     ) {
  //       setOpen(false);
  //     }
  //   }

  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () =>
  //     document.removeEventListener("mousedown", handleClickOutside);
  // }, []);
  return (

    <section>
      <div className="relative"    >
        <button
          onClick={() => setOpen(!open)}
          className="font-medium text-secondary transition flex  gap-3 cursor-pointer"
        >
          <AlignJustify /> Categories
        </button>
        {open && (
          <div className="absolute top-full left-0 mt-2 w-72 bg-white shadow-lg p-4">

            {categories.map((item, index) => (
              <div key={item.name} className="border-b last:border-none">
                {/* Main Category */}
                <button
                  onClick={() => setActive(active === index ? null : index)}
                  className="w-full flex justify-between items-center py-3 text-left font-medium"
                >
                  {item.name}
                  <span className="text-sm">{active === index ? "−" : "+"}</span>
                </button>

                {/* Sub Categories */}
                {active === index && (
                  <ul className="pl-4 pb-3 space-y-2 text-sm text-gray-600">
                    {item.sub.map((subItem) => (
                      <li
                        key={subItem}
                        className="cursor-pointer hover:text-black transition"
                      >
                        {subItem}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
