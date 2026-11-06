"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { MenuItem } from "@/data/menu";

interface MenuCardProps {
  item: MenuItem;
  index: number;
}

export default function MenuCard({ item, index }: MenuCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.12, ease: "easeOut" }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="group flex flex-col justify-between bg-softWhite border border-warmBeige/50 rounded-2xl overflow-hidden shadow-card hover:shadow-cardHover transition-shadow duration-300 p-4 sm:p-5"
    >
      <div>
        {/* Image Presentation - aspect-[768/341] preserves native aspect ratio */}
        <div className="relative w-full aspect-[768/341] rounded-xl overflow-hidden bg-cream/60 border border-warmBeige/30 mb-4 sm:mb-5">
          <Image
            src={item.image}
            alt={item.alt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col gap-1.5">
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-espresso group-hover:text-coffee transition-colors tracking-tight">
            {item.name}
          </h3>
        </div>
      </div>

      {/* Pricing Row */}
      <div className="mt-4 pt-3.5 border-t border-warmBeige/30 flex items-center justify-between">
        <span className="text-xs font-medium text-darkText/60 uppercase tracking-wider">
          Price
        </span>
        <span className="font-serif text-xl sm:text-2xl font-bold text-coffee">
          {item.price}
        </span>
      </div>
    </motion.article>
  );
}
