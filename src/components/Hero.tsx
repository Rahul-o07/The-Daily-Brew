"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden py-10 md:py-14 lg:py-16 bg-cream"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10 xl:gap-12">
          {/* Text Content (Left Column) */}
          <motion.div
            initial={{ opacity: 1, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full lg:w-[44%] xl:w-[42%] text-center lg:text-left flex flex-col justify-center"
          >
            <span className="inline-block self-center lg:self-start px-3.5 py-1 mb-4 rounded-full bg-warmBeige/35 text-espresso text-xs sm:text-sm font-semibold tracking-wide uppercase">
              Specialty Café &amp; Roastery
            </span>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.15rem] xl:text-[3.45rem] font-bold text-espresso leading-[1.14] tracking-tight">
              Your Everyday Coffee Destination.
            </h1>

            <p className="mt-4 sm:mt-5 text-base sm:text-lg text-darkText/85 leading-relaxed font-sans max-w-xl mx-auto lg:mx-0">
              From freshly brewed coffee to delicious bites, discover your favourite spot to relax, recharge and reconnect.
            </p>

            <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href="#menu"
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-base font-semibold text-softWhite bg-coffee hover:bg-espresso shadow-md hover:shadow-lg transition-colors focus:outline-none focus:ring-2 focus:ring-coffee focus:ring-offset-2"
                >
                  Explore Our Menu
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Café Hero Image (Right Column - Entire image perfectly fitted without cropping) */}
          <motion.div
            initial={{ opacity: 1, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="w-full lg:w-[56%] xl:w-[58%] flex items-center justify-center lg:justify-end"
          >
            {/* Perfectly fitted rounded rectangular frame preserving 100% of the original photo */}
            <div className="relative w-full max-w-[800px] rounded-2xl md:rounded-3xl overflow-hidden border-2 border-cream/90 shadow-card bg-cream/20 transition-shadow duration-300 hover:shadow-cardHover">
              <Image
                src="/images/01_hero_banner_clean.jpg"
                alt="The Daily Brew coffee bar and freshly roasted beans"
                width={768}
                height={341}
                priority
                unoptimized
                className="w-full h-auto block object-contain"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
