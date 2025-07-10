"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

export default function MotorClaimForm() {
  const [submitted, setSubmitted] = useState(false);
  const inputClass =
    "border rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500";

  return (
    <section className="max-w-6xl mx-auto pb-20 px-6">
      <h2 className="text-3xl font-bold mb-6">
        Formulir Klaim Asuransi Kendaraan Bermotor
      </h2>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8 text-sm text-gray-700 space-y-2">
        <p>
          1. Apabila terjadi kerugian, Tertanggung harus memperhatikan Ketentuan
          Umum dalam Polis.
        </p>
        <p>
          2. Formulir ini harus diisi selengkap-lengkapnya dan dikirimkan
          setelah ditandatangani.
        </p>
        <p>
          3. Reparasi tidak boleh dilakukan tanpa persetujuan tertulis dari
          Penanggung.
        </p>
        <p>
          4. Tertanggung tidak boleh mengakui tanggung jawab kepada Pihak Ketiga
          tanpa izin Penanggung.
        </p>
      </div>

      {!submitted ? (
        <form
          className="space-y-6"
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
        >
          {/* DATA TERTANGGUNG */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Data Tertanggung</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                required
                type="text"
                placeholder="Nama Lengkap"
                className={inputClass}
              />
              <input
                required
                type="text"
                placeholder="Nomor Polis"
                className={inputClass}
              />
              <input
                required
                type="tel"
                placeholder="Nomor Telepon"
                className={inputClass}
              />
              <input
                required
                type="email"
                placeholder="Email"
                className={inputClass}
              />
            </div>
          </div>

          {/* DATA KENDARAAN */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Data Kendaraan</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                required
                type="text"
                placeholder="Nomor Polisi / Plat"
                className={inputClass}
              />
              <input
                required
                type="text"
                placeholder="Merk & Tipe"
                className={inputClass}
              />
              <input
                required
                type="number"
                placeholder="Tahun Kendaraan"
                className={inputClass}
              />
              <input
                type="text"
                placeholder="Warna Kendaraan"
                className={inputClass}
              />
            </div>
          </div>

          {/* DETAIL KEJADIAN */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Detail Kejadian</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                required
                type="date"
                placeholder="Tanggal Kejadian"
                className={inputClass}
              />
              <input
                required
                type="text"
                placeholder="Lokasi Kejadian"
                className={inputClass}
              />
            </div>
            <textarea
              required
              placeholder="Jelaskan kronologi kejadian secara lengkap"
              rows={5}
              className={cn(inputClass, "mt-4")}
            ></textarea>
          </div>

          {/* KERUSAKAN */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Detail Kerusakan</h3>
            <textarea
              required
              placeholder="Jenis kerusakan, bagian kendaraan yang rusak, dll"
              rows={4}
              className={inputClass}
            ></textarea>
          </div>

          {/* LAMPIRAN */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Lampiran (opsional)</h3>
            <input type="file" multiple className={inputClass} />
            <p className="text-xs text-gray-500 mt-1">
              Lampirkan dokumen pendukung seperti foto kendaraan, SIM, STNK,
              dll.
            </p>
          </div>

          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Kirim Klaim
          </button>
        </form>
      ) : (
        <div className="bg-green-100 border-l-4 border-green-500 p-4 text-green-700 text-center rounded">
          <p>
            Formulir klaim Anda telah dikirim! Kami akan menghubungi Anda dalam
            waktu dekat.
          </p>
        </div>
      )}
    </section>
  );
}
