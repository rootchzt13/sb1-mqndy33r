"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "RESIDENTIAL PROJECT",
      description: "Kami Melayani Interior Dan Project Untuk Residential Seperti Apartemen, Design Project Bedroom, Bedroom, Bathroom, Living Room, Wardrobe, dll.",
    },
    {
      title: "COMMERCIAL PROJECT",
      description: "Kami Melayani Interior Dan Project Untuk Commercial Seperti Office, Design Project Cafe, Restaurant, Cafe, Hotel, Shop, Restaurant, Vitamin, dll.",
    }
  ];

  return (
    <section className="bg-black text-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center text-yellow-400">
          LAYANAN KAMI
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-zinc-900 p-8 rounded-lg"
            >
              <h3 className="text-xl font-bold mb-4">{project.title}</h3>
              <p className="text-gray-300 mb-6">{project.description}</p>
              <button className="flex items-center text-yellow-400 hover:text-yellow-300 transition-colors">
                READ MORE <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}