"use client";

import { motion } from "framer-motion";

export default function Stats() {
  const stats = [
    { number: "351", label: "PROJECT SELESAI" },
    { number: "12", label: "PROJECT ONGOING" },
    { number: "349", label: "CLIENT SENANG" }
  ];

  return (
    <section className="bg-zinc-900 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="text-center"
            >
              <h3 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">
                {stat.number}
              </h3>
              <p className="text-white text-lg">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}