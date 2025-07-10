"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const NewsList = () => {
  const articles = Array.from({ length: 9 }, (_, i) => ({
    id: i + 1,
    category: "Bisnis",
    date: "25",
    month: "Jan",
    title: "Panduan Fitur Terbaru dalam CSS Modern",
    description:
      "Baca artikel terkait dan temukan informasi aktual finansial, pertumbuhan, dan perlindungan.",
    image: `/article.jpeg`,
  }));

  return (
    <>
      <section className="px-6 max-w-6xl mx-auto w-full py-20 space-y-20">
        {["Berita Terbaru", "Berita Pilihan", "Berita Populer"].map(
          (sectionTitle, index) => (
            <div key={sectionTitle}>
              <h2 className="text-2xl md:text-3xl font-semibold dark:text-gray-100 text-gray-900 mb-6">
                {sectionTitle}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.slice(index * 3, index * 3 + 3).map((article) => (
                  <motion.div
                    key={article.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Link href={"/news/sample"} className="space-y-3">
                      <div className="relative w-full h-52 rounded-lg overflow-hidden">
                        <Image
                          src={article.image}
                          alt={article.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute flex flex-col justify-center items-center top-4 left-4 bg-[#fad783] text-xs text-[#201f1c] p-2.5 py-2">
                          <span className="font-bold text-base leading-3.5">
                            {article.date}
                          </span>
                          <span className="font-medium test-xs text-gray-700">
                            {article.month}
                          </span>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <span className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-200">
                          {article.category}
                        </span>
                        <h4 className="font-semibold text-gray-900 dark:text-gray-100 leading-snug">
                          {article.title}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-200">
                          {article.description}
                        </p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          )
        )}

        {/* Pagination */}
        <div className="flex justify-center pt-10">
          <div className="flex gap-2 items-center">
            {[1, 2, 3].map((page) => (
              <Button
                key={page}
                variant={page === 2 ? "default" : "outline"}
                className="w-10 h-10 p-0 rounded-full"
              >
                {page}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="px-6 md:px-20 py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <h3 className="text-xl font-semibold text-gray-900">
            Dapatkan pembaruan melalui langganan email
          </h3>
          <div className="flex gap-2 w-full sm:w-auto">
            <Input placeholder="Masukkan email..." className="w-full sm:w-64" />
            <Button className="bg-yellow-400 text-white hover:bg-yellow-500">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsList;
