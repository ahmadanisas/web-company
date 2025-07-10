"use client";

import { useState } from "react";

export default function PropertyClaimForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="max-w-6xl mx-auto pb-20 px-6">
      <h2 className="text-3xl font-bold mb-6">
        Formulir Klaim Asuransi Properti
      </h2>

      {/* Instruksi */}
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8 text-sm text-gray-700 space-y-2">
        <p>
          <strong>Harap diperhatikan sebelum Anda mengisi formulir:</strong>
        </p>
        <ul className="list-disc list-inside">
          <li>
            Harap mengisi kolom yang bertanda{" "}
            <span className="text-red-500 font-bold">*</span>.
          </li>
          <li>Nama dan alamat harus sesuai dengan Kartu Identitas (KTP).</li>
          <li>
            Jika Anda bekerja di suatu perusahaan, harap cantumkan nama
            perusahaannya.
          </li>
        </ul>
      </div>

      {!submitted ? (
        <form
          className="space-y-6"
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
        >
          {/* Biodata */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Data Tertanggung</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                required
                type="text"
                placeholder="Nama Lengkap *"
                className="input"
              />
              <input
                required
                type="text"
                placeholder="Nomor KTP *"
                className="input"
              />
              <input
                required
                type="text"
                placeholder="Alamat Sesuai KTP *"
                className="input"
              />
              <input
                type="text"
                placeholder="Nama Perusahaan (jika ada)"
                className="input"
              />
              <input
                required
                type="tel"
                placeholder="No. Telepon *"
                className="input"
              />
              <input
                required
                type="email"
                placeholder="Email *"
                className="input"
              />
            </div>
          </div>

          {/* Detail Properti */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Data Properti</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                required
                type="text"
                placeholder="Alamat Properti *"
                className="input"
              />
              <input
                required
                type="text"
                placeholder="Jenis Bangunan / Aset *"
                className="input"
              />
              <input
                required
                type="text"
                placeholder="No. Polis / Sertifikat *"
                className="input"
              />
              <input
                type="text"
                placeholder="Taksiran Nilai Properti"
                className="input"
              />
            </div>
          </div>

          {/* Detail Kejadian */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Detail Kejadian</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                required
                type="date"
                placeholder="Tanggal Kejadian *"
                className="input"
              />
              <input
                required
                type="text"
                placeholder="Lokasi Kejadian *"
                className="input"
              />
            </div>
            <textarea
              required
              placeholder="Jelaskan kronologi kejadian secara singkat dan jelas *"
              rows={5}
              className="input mt-4"
            ></textarea>
          </div>

          {/* Kerusakan */}
          <div>
            <h3 className="text-lg font-semibold mb-2">
              Kerusakan yang Diklaim
            </h3>
            <textarea
              required
              placeholder="Tuliskan kerusakan yang dialami, estimasi kerugian, dan area terdampak *"
              rows={4}
              className="input"
            ></textarea>
          </div>

          {/* Lampiran */}
          <div>
            <h3 className="text-lg font-semibold mb-2">
              Lampiran Dokumen (opsional)
            </h3>
            <input type="file" multiple className="input" />
            <p className="text-xs text-gray-500 mt-1">
              Unggah dokumen pendukung: foto kerusakan, bukti kepemilikan, dsb.
            </p>
          </div>

          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Kirim Formulir Klaim
          </button>
        </form>
      ) : (
        <div className="bg-green-100 border-l-4 border-green-500 p-4 text-green-700 text-center rounded">
          <p>
            Formulir klaim properti Anda telah dikirim! Tim kami akan segera
            menghubungi Anda.
          </p>
        </div>
      )}
    </section>
  );
}
