"use client";

import { motion } from "motion/react";
import { menuItems } from "@/data/menu";
import MenuCard from "./MenuCard";

export default function Menu() {
  return (
    <section id="menu" className="py-16 md:py-24 bg-softWhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <span className="inline-block px-3.5 py-1 mb-3 rounded-full bg-warmBeige/30 text-espresso text-xs sm:text-sm font-medium tracking-wide uppercase">
              Handcrafted Selections
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-espresso tracking-tight">
              Our Menu
            </h2>
          </motion.div>
        </div>

        {/* Menu Cards Grid: 1 col on mobile, 2 cols on tablet, 4 cols on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {menuItems.map((item, index) => (
            <MenuCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
