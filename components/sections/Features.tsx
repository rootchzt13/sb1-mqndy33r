"use client";

import { motion } from "framer-motion";
import { Clock, Award, DollarSign, Ruler } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "TIM AHLI",
      description: "Pengalaman Kami Sejak Tahun 2005, Kami Memiliki Tim Yang Ahli Dan Profesional."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "KUALITAS JUARA",
      description: "Dengan Menggunakan Material Yang Terbaik Yang Kami Pilih Yang Terbaik Sehingga Menghasilkan Kualitas Berkualitas Juara."
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "HARGA KOMPETITIF",
      description: "Dengan Harga Yang Budget Friendly Dan Terjangkau, Kami Berkomitmen Dengan Kualitas."
    },
    {
      icon: <Ruler className="w-8 h-8" />,
      title: "DESIGN & SURVEY GRATIS",
      description: "Jasa Konsultasi Design Dan Survey Gratis Untuk Area Jabodetabek."
    }
  ];

  return (
    <section className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center text-yellow-400">
          KENAPA PILIH KAMI
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="text-center text-white"
            >
              <div className="text-yellow-400 mb-4 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}