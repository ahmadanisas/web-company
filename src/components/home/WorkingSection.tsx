import Image from "next/image";

export default function WorkingSection() {
  const steps = [
    { id: "01", title: "Analisis Kebutuhan" },
    { id: "02", title: "Perencanaan Strategi" },
    { id: "03", title: "Penyampaian Solusi" },
    { id: "04", title: "Evaluasi & Perbaikan" },
  ];

  return (
    <section className="flex flex-col md:flex-row justify-between items-center px-6 py-16 max-w-6xl mx-auto w-full">
      <div className="w-full md:w-1/2 space-y-6">
        <div>
          <p className="text-sm text-orange-500 font-medium">Proses Kerja</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-gray-100 mt-2">
            Cara Kami Bekerja <br /> untuk Layanan Asuransi Anda
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
          {steps.map((step) => (
            <div key={step.id} className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-full bg-sky-200 text-sky-800 font-semibold flex items-center justify-center aspect-square">
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
            </div>
          ))}
        </div>
      </div>
      <div className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <div className="max-w-xs md:max-w-sm">
          <Image
            src="/meeting2.jpg"
            alt="Ilustrasi proses kerja asuransi"
            width={400}
            height={500}
            className="rounded-lg object-cover w-full"
          />
        </div>
      </div>
    </section>
  );
}
