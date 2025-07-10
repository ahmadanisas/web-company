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
            src="/meeting.png"
            alt="Meeting"
            width={600}
            height={400}
            className="rounded-md shadow-md"
          />

          {/* Garis dekoratif kiri atas */}
          <svg
            className="absolute top-[-20px] left-[-20px] z-1 text-white dark:text-[#2c2a33]"
            width="128"
            height="128"
            viewBox="0 0 270 296"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M67.561 208.706C64.1105 209.402 61.1471 210.109 58.1341 210.577C45.0377 212.628 32.5778 210.388 20.6947 204.714C7.37955 198.353 0.866181 187.503 0.339146 172.959C-0.307218 154.892 6.40503 139.523 18.3976 126.403C22.4548 121.963 27.0588 117.892 31.9314 114.348C61.2565 93.0258 93.9128 80.1548 129.96 75.7649C148.247 73.5451 166.554 71.3054 184.682 68.0802C205.585 64.3672 224.916 55.9856 243.561 45.9516C251.417 41.731 255.852 35.3801 256.399 26.5705C256.687 22.0014 256.329 17.3726 255.852 12.8036C255.663 10.952 254.241 9.25982 253.624 7.40831C253.177 6.05452 252.551 4.29259 253.058 3.20757C253.575 2.10263 255.444 0.888187 256.618 0.98773C258.547 1.13705 260.655 1.96327 262.216 3.12793C265.309 5.43734 266.661 8.99105 267.596 12.6344C270.142 22.5887 269.465 32.3739 265.826 41.94C262.783 49.9533 256.767 55.3087 249.587 59.5095C235.805 67.5825 221.306 73.9732 205.972 78.5522C187.089 84.2062 167.708 86.9736 148.178 88.8848C127.554 90.8956 107.059 93.4538 87.4492 100.75C69.6891 107.35 53.2018 116.269 38.2061 127.796C25.0501 137.91 16.6275 151.01 15.2552 168.012C14.241 180.634 18.4473 187.861 30.0023 192.968C37.4504 196.253 45.2068 198.174 53.4405 197.487C54.0371 197.437 54.6238 197.278 54.6934 197.268C53.2018 192.181 51.392 187.274 50.3677 182.207C48.1701 171.267 50.7854 161.124 56.8712 151.976C64.6275 140.299 74.5616 131.032 87.6779 125.507C88.4038 125.198 89.1496 123.994 89.1894 123.168C89.3187 120.46 89.1695 117.743 89.0402 115.035C88.901 111.949 89.8854 109.5 92.7991 108.146C95.5138 106.882 99.2528 107.499 101.152 110.127C102.793 112.407 104.235 115.134 104.762 117.862C106.363 126.104 107.586 134.436 108.739 142.758C109.943 151.448 110.897 160.168 111.981 168.868C112.071 169.565 112.13 170.381 112.518 170.919C114.408 173.557 114.238 177.369 112.041 179.241C109.724 181.212 105.955 180.883 103.917 177.956C101.928 175.1 100.078 171.934 99.1036 168.629C96.4088 159.541 94.1912 150.313 91.7947 141.135C91.5461 140.2 91.3671 139.254 91.0986 138.049C90.4423 138.368 89.9849 138.468 89.7065 138.746C83.561 144.968 77.0377 150.881 71.3895 157.54C63.2652 167.106 62.937 178.285 66.5268 189.832C66.8749 190.937 67.4218 192.022 68.0781 192.978C69.3907 194.869 71.7574 194.71 72.9109 192.749C72.9606 192.669 72.9805 192.579 73.0203 192.5C75.3373 188.2 77.4454 186.876 80.717 187.632C83.8096 188.359 85.9774 191.375 85.4504 195.785C84.6947 202.046 83.6008 208.317 82.0694 214.429C76.3615 237.185 72.3839 260.239 69.1521 283.453C68.7643 286.22 68.0781 288.958 67.4914 291.695C67.0439 293.766 66.1191 295.488 63.7226 295.727C61.3162 295.966 59.4467 294.741 58.86 292.631C57.8059 288.838 56.7121 284.916 56.6226 281.024C56.2845 265.495 58.3528 250.165 61.4355 234.985C63.0166 227.191 65.0352 219.486 66.855 211.742C67.0738 210.886 67.2627 210.01 67.561 208.706Z"
              fill="currentColor"
            />
          </svg>

          {/* Card testimoni */}
          <div className="absolute bottom-[-20px] left-4 bg-blue-100 text-sm p-4 rounded-md shadow-md w-72">
            <div className="flex items-center gap-3 mb-2">
              <Image
                src="/user_headshot.jpg"
                alt="User"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <p className="font-semibold text-gray-800">
                  Forman Cebid, <span className="text-red-500"> Founder</span>
                </p>
              </div>
            </div>
            <p className="text-gray-700 italic">
              “Uhhh wholesome quotes goes here ahh description”
            </p>
          </div>
        </div>

        {/* Right: Text content */}
        <div>
          <p className="text-red-500 font-semibold mb-2">About Company</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-200 leading-tight mb-4">
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
              className="inline-flex items-center text-sm font-semibold leading-0.5 gap-2 bg-black text-white px-7 py-4 rounded-full hover:bg-gray-800 transition"
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
