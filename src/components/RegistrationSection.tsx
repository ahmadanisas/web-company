"use client";

import { useState } from "react";

export default function RegistrationSection() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="max-w-6xl mx-auto py-20 px-4">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Formulir Pendaftaran Asuransi
      </h2>

      {!submitted ? (
        <form
          className="space-y-6"
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
        >
          {/* Informasi Pribadi */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              required
              placeholder="Nama Lengkap *"
              className="input"
            />
            <input
              type="email"
              required
              placeholder="Email *"
              className="input"
            />
            <input
              type="tel"
              required
              placeholder="Nomor Telepon *"
              className="input"
            />
            <input
              type="text"
              required
              placeholder="Alamat *"
              className="input"
            />
          </div>

          {/* Jenis Asuransi */}
          <div>
            <label className="block font-medium mb-2">
              Pilih Jenis Asuransi *
            </label>
            <select required className="input">
              <option value="">-- Pilih --</option>
              <option value="kendaraan">Asuransi Kendaraan Bermotor</option>
              <option value="properti">Asuransi Properti</option>
              <option value="kesehatan">Asuransi Kesehatan</option>
              <option value="pengangkutan">Asuransi Pengangkutan Barang</option>
              <option value="syariah">Asuransi Syariah</option>
            </select>
          </div>

          {/* Detail Tambahan */}
          <div>
            <label className="block font-medium mb-2">
              Rincian Aset (Jika Ada)
            </label>
            <textarea
              placeholder="Contoh: Mobil Honda HRV 2023 warna hitam. Alamat properti di Jl. Mawar No. 10."
              rows={4}
              className="input"
            ></textarea>
          </div>

          {/* Tombol Submit */}
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded transition"
          >
            Daftar Sekarang
          </button>
        </form>
      ) : (
        <div className="bg-green-100 border-l-4 border-green-500 p-4 text-green-700 rounded text-center">
          <p>
            Terima kasih! Pendaftaran Anda telah kami terima. Tim kami akan
            segera menghubungi Anda.
          </p>
        </div>
      )}
    </section>
  );
}
