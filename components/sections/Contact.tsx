"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Contact() {
  return (
    <footer className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-6">CONTACT US</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-yellow-400 mr-3" />
                <p>Jalan Limo Raya No.15 Depok Country Woods</p>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-yellow-400 mr-3" />
                <p>0811 1400 988</p>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-yellow-400 mr-3" />
                <p>khaya@khayainterior.com</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative h-[300px] rounded-lg overflow-hidden"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMsKwMzInMzAuMCJTIDEwNsKwNDgnMzAuMCJF!5e0!3m2!1sen!2sid!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            />
          </motion.div>
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-800 text-center text-sm text-gray-400">
          <p>© Copyright 2024 - Khaya Interior | Design Theme by Jcmedia</p>
        </div>
      </div>
    </footer>
  );
}