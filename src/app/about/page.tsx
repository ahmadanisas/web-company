import AwardSection from "@/components/AwardSection";
import PageHeader from "@/components/PageHeader";

import Link from "next/link";

const AboutPage = () => {
  return (
    <>
      <PageHeader className="pt-16 pb-8">
        <div className="w-full inline-flex justify-center gap-3 mb-2">
          <Link
            href="/"
            className="text-sm font-medium text-gray-600 hover:text-gray-800 hover:font-semibold transition-all"
          >
            Home
          </Link>
          <span className="text-sm font-medium text-gray-600">Profil</span>
          <span className="text-sm font-medium text-gray-800">
            Tentang Kami
          </span>
        </div>
        <h1 className="font-bold text-center text-5xl mb-16">Tentang Kami</h1>
      </PageHeader>
      <main className="max-w-6xl mx-auto px-4 py-20 space-y-20 text-gray-800 dark:text-gray-200 font-inter">
        {/* Header Section */}
        <section className="space-y-6">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
            Tentang Perusahaan
          </h1>
          <div className="space-y-4 text-lg leading-relaxed">
            <p>
              Berlandaskan komitmen untuk menjadi mitra asuransi terdepan bagi
              para nasabahnya, sejak awal pendiriannya PT Asuransi Kresna Mitra
              Tbk (Asuransi Kresna) secara konsisten mengembangkan asuransi
              sesuai dengan perkembangan kebutuhan para nasabahnya.
            </p>
            <p>
              Perjalanan Perusahaan diawali pada tanggal 24 April 1956 dengan
              pendirian Perusahaan di bawah nama PT Maskapai Asuransi Patriot
              (Patriot Insurance Society Ltd.). Pada tahun 1991, Perusahaan
              diakuisisi oleh Kalbe Group dan mengubah namanya menjadi PT
              Asuransi Mitra Maparya. Pada tahun 2014, Asuransi Kresna secara
              resmi mencatatkan sahamnya di Bursa Efek Indonesia dengan kode
              saham “ASMI” melalui penerbitan 402.871.000 lembar saham.
              Mengikuti pencatatan saham tersebut, nama Perusahaan berubah
              menjadi PT Asuransi Mitra Maparya Tbk.
            </p>
            <p>
              Pada tahun 2016, Asuransi Kresna mulai dikenal sebagai PT Asuransi
              Kresna Mitra Tbk, sebagai bentuk konsolidasi mengikuti
              bergabungnya Perusahaan dengan Kresna Group di tahun 2014.
              Perubahan nama tersebut dilakukan berdasarkan keputusan RUPS Luar
              Biasa pada tanggal 15 Juni 2016.
            </p>
            <p>
              Pada tanggal 28 Agustus 2020, Perseroan telah melakukan perubahan
              nama menjadi PT Asuransi Maxmus Graha Persada Tbk, berdasarkan
              keputusan RUPS Luar Biasa dan telah mendapat persetujuan
              Kementerian Hukum dan HAM serta Otoritas Jasa Keuangan.
            </p>
            <p>
              Dengan perubahan ini, Asuransi Maximus membuka lembaran baru dalam
              perjalanannya sebagai mitra perlindungan usaha yang terpercaya
              bagi seluruh masyarakat Indonesia. Asuransi Maximus berkomitmen
              penuh untuk memegang teguh asas-asas profesionalisme, keterbukaan,
              akuntabilitas, serta kepatuhan, dalam upaya pengembangan yang
              terus dilakukan sejalan dengan visi dan tujuan jangka panjang
              Perusahaan.
            </p>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="border rounded-xl p-10 shadow-md">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Vision */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-yellow-600 border-b border-yellow-400 pb-2">
                Visi
              </h2>
              <p className="text-base text-gray-700 dark:text-gray-200">
                Menjadi perusahaan terkemuka dan terpercaya sebagai mitra
                asuransi bagi Masyarakat Indonesia.
              </p>
            </div>

            {/* Mission */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-yellow-600 border-b border-yellow-400 pb-2">
                Misi
              </h2>
              <ul className="list-disc list-inside space-y-3 text-base text-gray-700 dark:text-gray-200">
                <li>
                  Memelihara budaya kepercayaan, integritas dan keunggulan di
                  Industri Asuransi
                </li>
                <li>
                  Menyediakan produk Asuransi kerugian yang dapat memenuhi
                  kebutuhan nasabah yang dinamis
                </li>
                <li>
                  Meningkatkan kesejahteraan karyawan guna kesuksesan Perusahaan
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <AwardSection />
    </>
  );
};

export default AboutPage;
