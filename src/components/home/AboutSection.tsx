import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const AboutSection = () => {
  return (
    <section className="w-full max-w-6xl mx-auto py-16 mb-16">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Image + testimonial card */}
        <div className="relative">
          {/* Gambar utama */}
          <Image
            src="/asuransimaximus.webp"
            alt="Meeting"
            width={600}
            height={400}
            className="rounded-md shadow-md transform transition duration-300 ease-in-out hover:scale-105"
          />

          {/* Card testimoni */}
          <div className="absolute bottom-[-20px] left-4 bg-white text-sm p-4 rounded-md shadow-md w-72 transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
            <div className="flex items-center gap-3 mb-2">
              <div>
                <p className="font-semibold text-gray-800">
                  Jemmy Atmadja, <span className="text-blue-500"> CEO Maximus Insurance</span>
                </p>
              </div>
            </div>
            <p className="text-gray-700 italic">
              “Kami berkomitmen untuk memberikan perlindungan terbaik bagi nasabah dan kontribusi nyata bagi industri asuransi Indonesia."
            </p>
          </div>
        </div>

        {/* Right: Text content */}
        <div>
          <p className="text-blue-500 font-semibold mb-2">About Company</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-200 leading-tight mb-4 transform transition duration-300 ease-in-out hover:text-blue-500">
            Partner Asuransi Tepercaya Sejak 1956
          </h2>
          <p className="text-gray-600 dark:text-gray-100 mb-4">
            Dengan pengalaman lebih dari 65 tahun, PT Asuransi Maximus Graha
            Persada Tbk terus berkembang untuk memenuhi kebutuhan perlindungan
            nasabah di seluruh Indonesia.
          </p>
          <p className="text-gray-600 dark:text-gray-100 mb-6">
            Kami telah melalui berbagai transformasi, dari Maskapai Asuransi
            Patriot hingga menjadi bagian dari Kresna Group. Kini, Asuransi
            Maximus hadir sebagai mitra perlindungan usaha dan individu melalui
            berbagai layanan asuransi yang adaptif dan profesional.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/about"
              className="inline-flex items-center text-sm font-semibold leading-0.5 gap-2 bg-blue-500 text-white px-7 py-4 rounded-full hover:bg-gray-800 transition transform duration-300 hover:scale-105"
            >
              Learn More
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
