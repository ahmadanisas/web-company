"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white py-16">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Logo + desc */}
        <div className="md:col-span-1">
          <div className="flex items-center mb-4">
            {/* Ganti ini dengan logo kamu */}
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 mr-2" />
            <h3 className="text-xl font-bold">Maximus</h3>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            We denounce with righteous indignation and dislike men who are so
            beguiled and demoralized by the charms of pleasure.
          </p>
        </div>

        {/* Footer menu sections */}
        {[
          { title: "Company", links: ["About", "Features", "Works", "Career"] },
          {
            title: "Help",
            links: [
              "Customer Support",
              "Delivery Details",
              "Terms & Conditions",
              "Privacy Policy",
            ],
          },
          {
            title: "Resources",
            links: [
              "Free eBooks",
              "Development Tutorial",
              "How to - Blog",
              "Youtube Playlist",
            ],
          },
          {
            title: "Link",
            links: [
              "Free eBooks",
              "Development Tutorial",
              "How to - Blog",
              "Youtube Playlist",
            ],
          },
        ].map((section, i) => (
          <div key={i}>
            <h4 className="text-white font-semibold mb-4">{section.title}</h4>
            <ul className="space-y-2">
              {section.links.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 hover:text-white transition"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom section */}
      <div className="border-t border-gray-700 mt-12 pt-8 px-4 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto">
        <p>© 2025 Maximus – Insurance Company. All Rights Reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Link href="#">
            <Facebook className="w-4 h-4 hover:text-white" />
          </Link>
          <Link href="#">
            <Twitter className="w-4 h-4 hover:text-white" />
          </Link>
          <Link href="#">
            <Instagram className="w-4 h-4 hover:text-white" />
          </Link>
          <Link href="#">
            <Linkedin className="w-4 h-4 hover:text-white" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
