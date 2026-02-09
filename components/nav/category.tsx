"use client";

import React, { useState } from "react";
import { AlignJustify } from "lucide-react";
import { ChevronRight, ChevronLeft } from "lucide-react";

const categories = [
  { name: "Egg", sub: ["Chicken Egg", "Duck Egg", "Organic Egg"] },
  { name: "Fish", sub: ["Hilsa", "Rui", "Katla", "Tilapia"] },
  { name: "Meat", sub: ["Mutton", "Lamb", "Goat"] },
  { name: "Chicken", sub: [] },
  { name: "Beef", sub: ["Regular Beef", "Premium Beef", "Minced Beef"] },
];

export default function CategoryMenu() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<number | null>(null);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Button */}
      <button className="flex items-center gap-2 font-medium  text-secondary transition">
        <AlignJustify size={20} color="white" />
        Categories
      </button>
      {/* Dropdown */}
      <div
        className={`
          absolute top-full left-0 mt-3 flex
          bg-white  shadow-lg rounded-md z-50 h-100
          transition-all duration-200
          ${open ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
      >
        {/* LEFT PANEL */}
        <div className="w-100 ">
          {categories?.map((item, index) => (
            <div
              key={item.name}
              onMouseEnter={() => setActive(index)}
              onMouseLeave={() => setActive(null)}
              className={`px-4 py-3 text-sm cursor-pointer flex justify-between
               ${active === index ? "bg-gray-100 font-medium" : ""}`}
            >
              <div>{item.name}</div>
              {item?.sub?.length == 0 ? null : (
                <span className="text-sm">
                  {active === index ? (
                    <ChevronLeft color="#939393" size={18} />
                  ) : (
                    <ChevronRight color="#b7b7b7" size={18} />
                  )}
                </span>
              )}
            </div>
          ))}
        </div>
        {/* RIGHT PANEL (NO STICKY, NO RE-MOUNT) */}
        {active !== null &&
          categories[active] &&
          (categories[active]?.sub?.length ?? 0) > 0 && (
            <div className="w-64 p-4 bg-white">
              <h4 className="font-semibold mb-3">{categories[active].name}</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                {categories[active].sub?.map((sub) => (
                  <li
                    key={sub}
                    className="cursor-pointer hover:text-black transition"
                  >
                    {sub}
                  </li>
                ))}
              </ul>
            </div>
          )}
      </div>
    </div>
  );
}
