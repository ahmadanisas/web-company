"use client";
import { useState } from "react";
import { Mail, Linkedin, Github, Instagram, Plus, X } from "lucide-react";

export default function FloatingSocialButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 cursor-pointer">
      {open && (
        <>
          <a
            href="mailto:ahmadanisasusatyo@example.com"
            className="bg-blue-500 text-white p-3 rounded-full shadow hover:bg-[#004182] transition"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
          <a
            href="https://linkedin.com/in/ahmadanisa-n-a-susatyo-611359342/"
            target="_blank"
            className="bg-blue-500 text-white p-3 rounded-full shadow hover:bg-[#004182] transition"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://github.com/ahmadanisas"
            target="_blank"
            className="bg-blue-500 text-white p-3 rounded-full shadow hover:bg-[#004182] transition"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://instagram.com/nisasusatyo"
            target="_blank"
            className="bg-blue-500 text-white p-3 rounded-full shadow hover:bg-[#004182] transition"
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </a>
        </>
      )}

      <button
        onClick={() => setOpen(!open)}
        className="bg-blue-500 hover:bg-gray cursor-pointer text-white p-4 rounded-full shadow-lg hover:bg-gray-800 transition"
        aria-label="Toggle Social Links"
      >
        {open ? <X size={16} /> : <Plus size={16} />}
      </button>
    </div>
  );
}
