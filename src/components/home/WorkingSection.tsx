"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

// Define the type for each step
type Step = {
  id: string;
  title: string;
};

const steps: Step[] = [
  { id: "01", title: "Analisis Kebutuhan" },
  { id: "02", title: "Perencanaan Strategi" },
  { id: "03", title: "Penyampaian Solusi" },
  { id: "04", title: "Evaluasi & Perbaikan" },
];

// Animation variants for staggered steps
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Fix: Use the correct type for 'type' property in transition
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6, 
      type: "spring" as const // <-- Fix: use 'as const' to ensure type safety
    } 
  },
};

const WorkingSection: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center px-6 py-16 max-w-6xl mx-auto w-full">
      {/* Left Side: Steps */}
      <div className="w-full md:w-1/2 space-y-6">
        <div>
          <motion.p
            className="text-sm text-blue-500 font-bold"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            How We Work
          </motion.p>
          <motion.h2
            className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-gray-100 mt-2"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Cara Kami Bekerja <br /> untuk Layanan Asuransi Anda
          </motion.h2>
        </div>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {steps.map((step) => (
            <motion.div
              key={step.id}
              className="flex items-start space-x-4"
              variants={itemVariants}
            >
              <div className="w-10 h-10 rounded-full bg-blue-500 text-white font-semibold flex items-center justify-center aspect-square">
                {step.id}
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">
                  {step.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Kami memastikan setiap langkah sesuai kebutuhan perlindungan
                  finansial Anda.
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      {/* Right Side: Image */}
      <motion.div
        className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4, type: "spring" as const }}
        viewport={{ once: true }}
      >
        <div className="max-w-xs md:max-w-sm">
          <Image
            src="/maximus-work.webp"
            alt="Ilustrasi proses kerja layanan asuransi Maximus"
            width={400}
            height={500}
            className="rounded-lg object-cover w-full"
            priority
          />
        </div>
      </motion.div>
    </section>
  );
};

export default WorkingSection;