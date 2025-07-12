import PageHeader from "@/components/PageHeader";
const AboutPage = () => {
  return (
    <>
      <PageHeader className="pt-16 pb-8">
        <div className="w-full inline-flex justify-center gap-3 mb-2">
          <span className="text-sm font-medium text-blue-300">Karir</span>
        </div>
        <h1 className="font-bold text-center text-5xl mb-16">
          Lowongan Pekerjaan
        </h1>
      </PageHeader>
      <main className="max-w-6xl mx-auto px-4 py-20 space-y-20 text-gray-800 dark:text-gray-200 font-inter">
        {/* Header Section */}
        <section className="space-y-6">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 center">
            Posisi yang Tersedia
          </h1>
        </section>

        <section className="border rounded-xl p-10 shadow-md">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-blue-500 border-b border-blue-500 pb-2">
                CLAIM GENERAL STAFF (SPESIALIS MARINE CARGO & HULL)
              </h2>
              <h3 className="text-l font-bold text-blue-500 pb-2">
                PT Asuransi Maximus Graha Persada Tbk
              </h3>
              <ul className="list-disc list-inside space-y-3 text-base text-gray-700 dark:text-gray-200">
                <li>Menerima laporan klaim marine baik cargo atau hull.</li>
                <li>
                  Mencari file polis dan koordinasi dengan Atasan serta input ke
                  sistem.
                </li>
                <li>
                  Mengumpulkan dokumen secara lengkap untuk perhitungan
                  adjustment.
                </li>
                <li>Melakukan survey apabila dibutuhkan.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-blue-500 border-b border-blue-500 pb-2">
                STAFF MARKETING
              </h2>
              <h3 className="text-l font-bold text-blue-500 pb-2">
                PT Asuransi Maximus Graha Persada Tbk
              </h3>
              <p className="font-bold">Requirements:</p>
              <ul className="list-disc list-inside space-y-3 text-base text-gray-700 dark:text-gray-200">
                <li>Age 25-30 years old</li>
                <li>Good communication skills</li>
                <li>Target oriented </li>
                <li>
                  Having networking in insurance market especially for banks,
                  leasing company and motor dealers
                </li>
                <li>Having experience as General Insurance Marketing</li>
                <li>Minimum Bachelor’s Degree from any major</li>
                <li>
                  Willing to be located at Branch Office : Jakarta Barat & Bandung
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <div className="max-w-2xl mx-auto mt-16 p-8 bg-blue-50 dark:bg-blue-900 rounded-xl shadow text-center">
            <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-300 mb-4">
              Interested applicants
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-200">
              <span>
                <strong>Interested applicants should send their CV and cover letter to</strong>
                <br />
                <a
                  href="mailto:recruitment@asuransimaximus.com"
                  className="text-blue-700 dark:text-blue-300 underline break-all"
                >
                  recruitment@asuransimaximus.com
                </a>
              </span>
            </p>
          </div>
        </section>
        
      </main>
    </>
  );
};

export default AboutPage;
