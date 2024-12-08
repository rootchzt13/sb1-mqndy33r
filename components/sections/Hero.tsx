"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { HERO_IMAGE } from "@/lib/constants/images";

export default function Hero() {
  return (
    <section className="relative h-screen">
      <div className="absolute inset-0">
        <Image
          src={HERO_IMAGE}
          alt="Modern office interior"
          fill
          className="object-cover brightness-50"
          priority
          sizes="100vw"
        />
      </div>
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-[120px] h-[120px] mx-auto mb-8 bg-yellow-400 rounded-full flex items-center justify-center">
            <span className="text-2xl font-bold text-black">KHAYA</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            PRODUSEN FURNITURE CUSTOM
          </h1>
          <h2 className="text-2xl md:text-3xl mb-6">
            JASA KITCHEN SET
          </h2>
          <p className="text-xl md:text-2xl mb-8">
            FURNITURE CUSTOM <span className="text-yellow-400">TERMURAH</span>
          </p>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Dengan Workshop Sendiri, Kami Menawarkan Langsung Dari Produsen Untuk Kitchen Set, Wardrobe, Backdrop TV, Partisi, Dan Furniture Custom Lainnya.
          </p>
        </motion.div>
      </div>
    </section>
  );
}