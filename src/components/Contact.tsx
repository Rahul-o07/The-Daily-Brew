"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "motion/react";

export default function Contact() {
  const contactDetails = [
    {
      icon: Mail,
      label: "Email",
      value: "hello@thedailybrew.example",
      href: "mailto:hello@thedailybrew.example",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 98765 43210",
      href: "tel:+919876543210",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Chennai",
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-16 md:py-24 bg-softWhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <span className="inline-block px-3.5 py-1 mb-3 rounded-full bg-warmBeige/30 text-espresso text-xs sm:text-sm font-medium tracking-wide uppercase">
              Get In Touch
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-espresso tracking-tight">
              Visit Us
            </h2>
          </motion.div>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {contactDetails.map((item, index) => {
            const Icon = item.icon;
            const cardContent = (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.12, ease: "easeOut" }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="h-full flex flex-col items-center text-center p-8 bg-cream/70 hover:bg-cream border border-warmBeige/50 rounded-2xl shadow-card hover:shadow-cardHover transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-coffee/10 text-coffee flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" aria-hidden="true" />
                </div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-darkText/60 mb-2">
                  {item.label}
                </h3>
                <p className="font-serif text-lg sm:text-xl font-bold text-espresso break-words">
                  {item.value}
                </p>
              </motion.div>
            );

            if (item.href) {
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-coffee rounded-2xl group"
                >
                  {cardContent}
                </a>
              );
            }

            return <div key={item.label}>{cardContent}</div>;
          })}
        </div>
      </div>
    </section>
  );
}
