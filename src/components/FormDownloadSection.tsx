"use client";

import { Download } from "lucide-react";
import Link from "next/link";

const forms = [
  {
    no: "SPP01",
    name: "Surat Permohonan Penutupan Asuransi Kendaraan Bermotor (SPPAKB)",
    size: "28 KB",
    file: "/files/SPP01.pdf",
  },
  {
    no: "SPP02",
    name: "Surat Permohonan Penutupan Asuransi Pengangkutan Barang",
    size: "28 KB",
    file: "/files/SPP02.pdf",
  },
  {
    no: "SPP03",
    name: "Surat Permintaan Penutupan Asuransi Kecelakaan Diri (SPPAKD)",
    size: "29 KB",
    file: "/files/SPP03.pdf",
  },
  {
    no: "SPP04",
    name: "Surat Permohonan Penutupan Asuransi Gempa Bumi",
    size: "15 KB",
    file: "/files/SPP04.pdf",
  },
  {
    no: "SPK02a",
    name: "Surat Permohonan Klaim Rawat Inap (Bahasa Indonesia)",
    size: "-",
    file: "/files/SPK02a.pdf",
  },
  {
    no: "SPK02b",
    name: "Surat Permohonan Klaim Rawat Inap (Bilingual)",
    size: "-",
    file: "/files/SPK02b.pdf",
  },
  {
    no: "SPK03a",
    name: "Surat Permohonan Klaim Rawat Jalan (Bahasa Indonesia)",
    size: "-",
    file: "/files/SPK03a.pdf",
  },
  {
    no: "SPK03b",
    name: "Surat Permohonan Klaim Rawat Jalan (Bilingual)",
    size: "-",
    file: "/files/SPK03b.pdf",
  },
  {
    no: "SPK04",
    name: "Surat Permohonan Klaim Property",
    size: "20 KB",
    file: "/files/SPK04.pdf",
  },
  {
    no: "-",
    name: "Tabel Persentase Penggantian Santunan Cacat Tetap",
    size: "23 KB",
    file: "/files/SantunanCacatTetap.pdf",
  },
];

export default function DownloadFormsSection() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold mb-2">Download Formulir</h2>
        <p className="text-gray-600">
          Unduh formulir dan brosur resmi yang tersedia untuk layanan klaim dan
          pendaftaran.
        </p>
      </div>

      <div className="overflow-x-auto border rounded-lg">
        <table className="min-w-full table-auto bg-white dark:bg-gray-800">
          <thead className="bg-gray-100 dark:bg-gray-700 text-left text-sm font-semibold text-gray-600">
            <tr>
              <th className="p-2 md:p-4">No</th>
              <th className="p-2 md:p-4">Nama Formulir</th>
              <th className="p-2 md:p-4 text-center">Ukuran</th>
              <th className="p-2 md:p-4 text-center">Download</th>
            </tr>
          </thead>
          <tbody>
            {forms.map((form, idx) => (
              <tr
                key={idx}
                className="border-t hover:bg-gray-50 dark:bg-gray-800 transition"
              >
                <td className="p-2 md:p-4">{form.no}</td>
                <td className="p-2 md:p-4">{form.name}</td>
                <td className="p-2 md:p-4 text-center text-sm text-gray-500">
                  {form.size}
                </td>
                <td className="p-2 md:p-4 text-center">
                  <Link
                    href={form.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 hover:underline"
                  >
                    <Download size={16} />
                    <span className="text-sm">Unduh</span>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
