"use client";

import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-cream">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative bg-softWhite/80 backdrop-blur-sm border border-warmBeige/50 rounded-3xl p-8 sm:p-12 md:p-16 shadow-card"
        >
          {/* Subtle Decorative Accent */}
          <div className="w-12 h-1 bg-coffee/60 mx-auto mb-6 rounded-full" />

          <span className="inline-block px-3.5 py-1 mb-4 rounded-full bg-warmBeige/30 text-espresso text-xs sm:text-sm font-medium tracking-wide uppercase">
            Our Philosophy
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-espresso tracking-tight mb-6">
            About The Daily Brew
          </h2>

          <p className="font-serif italic text-lg sm:text-xl md:text-2xl text-darkText/90 leading-relaxed max-w-2xl mx-auto">
            &ldquo;At The Daily Brew, we believe every great day starts with a good cup of coffee. Enjoy freshly brewed beverages, delicious food and a welcoming atmosphere.&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  );
}
