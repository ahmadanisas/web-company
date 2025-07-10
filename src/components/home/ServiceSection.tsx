"use client";

import { Car, Flame, Hospital, Hammer, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const ServiceSection = () => {
  return (
    <section className="w-full max-w-7xl mx-auto py-16 border px-16 mb-16">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left: Title & CTA */}
        <div>
          <p className="text-red-500 font-medium mb-2">Layanan Kami</p>
          <h2 className="text-3xl/normal md:text-4xl/normal font-bold text-gray-900 dark:text-gray-200 mb-4 spacing">
            Perlindungan Asuransi Terpercaya untuk Berbagai Kebutuhan
          </h2>
          <Link
            href="/services"
            className="inline-flex items-center text-sm gap-2 mt-4 px-7 py-4 bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-500 transition"
          >
            Learn More <ArrowUpRight />
          </Link>
        </div>

        {/* Right: Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex flex-col items-start gap-2">
            <Car className="w-6 h-6 text-black dark:text-gray-100" />
            <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Asuransi Kendaraan
            </h4>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Perlindungan atas kehilangan, kerusakan, dan risiko pihak ketiga
              untuk kendaraan Anda.
            </p>
          </div>
          <div className="flex flex-col items-start gap-2">
            <Flame className="w-6 h-6 text-black dark:text-gray-100" />
            <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Asuransi Kebakaran
            </h4>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Ganti rugi terhadap risiko kebakaran, banjir, gempa, dan lainnya.
            </p>
          </div>
          <div className="flex flex-col items-start gap-2">
            <Hospital className="w-6 h-6 text-black dark:text-gray-100" />
            <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Asuransi Kesehatan
            </h4>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Bantu perusahaan kelola anggaran kesehatan karyawan secara
              efisien.
            </p>
          </div>
          <div className="flex flex-col items-start gap-2">
            <Hammer className="w-6 h-6 text-black dark:text-gray-100" />
            <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Asuransi Engineering
            </h4>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Lindungi proyek konstruksi dan risiko pihak ketiga selama
              pelaksanaan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
