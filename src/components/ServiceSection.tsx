"use client";

import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    title: "Asuransi Kendaraan Bermotor",
    description:
      "Perlindungan atas kerusakan atau kehilangan kendaraan bermotor Anda.",
  },
  {
    title: "Asuransi Kebakaran",
    description:
      "Menjamin kerusakan harta benda akibat kebakaran, petir, ledakan, dan pesawat jatuh.",
  },
  {
    title: "Asuransi Kesehatan",
    description:
      "Menunjang kesejahteraan karyawan melalui perlindungan kesehatan.",
  },
  {
    title: "Asuransi Engineering",
    description:
      "Lindungi proyek konstruksi dan risiko pihak ketiga selama pelaksanaan.",
  },
  {
    title: "Asuransi Pengangkutan Barang",
    description:
      "Perlindungan menyeluruh atas barang selama pengiriman darat dan laut.",
  },
  {
    title: "Asuransi Uang",
    description:
      "Lindungi uang perusahaan dari risiko kehilangan atau pencurian.",
  },
  {
    title: "Asuransi Pekerja",
    description:
      "Memberikan kompensasi dan tunjangan bagi pekerja yang mengalami cedera.",
  },
  {
    title: "Asuransi Syariah",
    description:
      "Perlindungan berbasis prinsip syariah untuk berbagai jenis aset dan risiko.",
  },
];

export default function ServiceSection() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-6">
        <div>
          <p className="text-red-500 font-semibold mb-2">Layanan Kami</p>
          <h2 className="text-4xl font-bold leading-tight max-w-lg">
            Perlindungan Terbaik untuk Kebutuhan Anda
          </h2>
        </div>
        <p className="text-gray-500 max-w-md">
          Kami menyediakan berbagai solusi asuransi terpercaya untuk mendukung
          keamanan dan kenyamanan Anda, baik secara pribadi maupun bisnis.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <motion.div
            className="cursor-pointer p-6 border rounded-md group transition-all duration-300 relative pb-12 hover:bg-[#fad783] bg-white text-black hover:shadow-md"
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Link href={"/service/test"} key={index} className="">
              <div className="text-2xl font-thin mb-4">―</div>
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-gray-600 mb-6">
                {service.description}
              </p>
              <div className="w-10 h-10 rounded-full flex items-center justify-center absolute bottom-6 right-6 transition-all group-hover:bg-white bg-black text-white group-hover:text-black group-hover:-rotate-45">
                <ArrowRight size={16} />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
