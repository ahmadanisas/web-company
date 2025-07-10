import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import PageHeader from "@/components/PageHeader";
import Link from "next/link";

export default function ArticleDetail() {
  return (
    <>
      <PageHeader className="pt-16 pb-8">
        <div className="w-full inline-flex justify-center gap-3 mb-2">
          <Link
            href="/"
            className="text-sm font-medium text-gray-600 hover:text-gray-800 dark:text-gray-100 dark:hover:text-gray-50 hover:font-semibold transition-all"
          >
            Home
          </Link>
          <Link
            href="/news"
            className="text-sm font-medium text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-50 hover:font-semibold transition-all"
          >
            Berita
          </Link>
          <span className="text-sm font-medium text-gray-600 dark:text-gray-200">
            Detail
          </span>
        </div>
        <h1 className="font-bold text-center text-5xl mb-16">Berita</h1>
      </PageHeader>
      <section className="max-w-6xl mx-auto w-full px-6 pb-20">
        <article className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          <div className="lg:col-span-3 space-y-10">
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-gray-100 leading-tight">
                Panduan Terbaru untuk Dukungan Pseudo Modern di CSS
              </h1>
              <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
                <span>25 Maret 2020</span>
                <span className="h-1 w-1 rounded-full bg-gray-400 dark:text-gray-300" />
                <span>Bisnis</span>
                <span className="h-1 w-1 rounded-full bg-gray-400 dark:text-gray-300" />
                <span>David Jones</span>
              </div>
            </div>

            <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/article.jpeg"
                alt="Gambar utama artikel"
                fill
                className="object-cover"
              />
            </div>

            <div className="prose prose-neutral max-w-none text-gray-700 dark:text-gray-200">
              <p>
                Menggandakan gaji dari pekerjaan 9–5 saya beberapa kali selama
                karier adalah sesuatu yang sebelumnya tidak pernah saya
                bayangkan. Karier saya berkembang dari operator konten
                semi-terampil hingga posisi senior di beberapa perusahaan
                teknologi terbesar.
              </p>
              <p>
                Ini berarti saya mendapatkan pengalaman bekerja dengan rekan
                dari berbagai negara seperti Australia, Asia, Amerika Serikat,
                dan Eropa. Saya telah memimpin tim internasional — mengelola
                situs — membangun strategi konten — hingga menjalankan
                eksperimen akuisisi.
              </p>
              <p>
                Paragraf ini menjelaskan lebih lanjut dan memecah tampilan agar
                artikel terasa berbobot, serta memberikan alur bacaan yang
                nyaman bagi pembaca.
              </p>

              <blockquote>
                <p className="text-lg font-medium text-gray-900 dark:text-gray-50">
                  Anda bisa mengembangkan bisnis sampingan, side hustle, atau
                  hobi yang bisa menjadi penghasilan tambahan selain pekerjaan
                  utama Anda — dan semuanya bisa menambah pemasukan sekaligus
                  mengurangi stres tentang tagihan.
                </p>
              </blockquote>

              <p>
                Jika kita melihat beberapa peran dengan penghasilan tertinggi
                yang bisa menggandakan gaji mereka, harapan tetap ada bagi
                mereka yang berambisi. Topik seperti freelance, desain, startup,
                teknologi, dan kesejahteraan finansial juga dibahas secara luas.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-4">
              {[
                "Freelance",
                "Bisnis",
                "Penghasilan",
                "Desain",
                "Pekerjaan",
                "Pemasaran",
              ].map((tag) => (
                <Badge key={tag} variant="outline" className="capitalize">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <aside className="space-y-10 lg:col-span-2">
            <div className="border p-5">
              <h4 className="text-base font-semibold text-gray-900 dark:text-gray-100 border-b pb-2 mb-4">
                <span className="border-b-2 border-gray-900 dark:text-gray-100">
                  Recent Posts
                </span>
              </h4>
              <ul className="space-y-4 text-sm text-gray-800 dark:text-gray-200">
                {[
                  {
                    title: "How To Blow Through Capital At An Incredible Rate",
                    date: "Jan 14, 2020",
                  },
                  {
                    title: "Design Studios That Everyone Should Know About?",
                    date: "Jan 14, 2020",
                  },
                  {
                    title:
                      "How did we get 1M+ visitors in 30 days without anything!",
                    date: "Jan 14, 2020",
                  },
                  {
                    title:
                      "Figma On Figma: How We Built Our Website Design System",
                    date: "Jan 14, 2020",
                  },
                ].map((post, i) => (
                  <li key={i} className="space-y-1 border-b pb-3">
                    <p className="font-medium leading-tight">{post.title}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-300">
                      {post.date}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border p-5">
              <h4 className="text-base font-semibold text-gray-900 dark:text-gray-100 border-b pb-2 mb-4">
                <span className="border-b-2 border-gray-900 dark:text-gray-100">
                  Categories
                </span>
              </h4>
              <ul className="space-y-3 text-sm text-gray-800 dark:text-gray-200">
                <li>
                  <span className="font-semibold">Technology</span> – 20 Posts
                </li>
                <li>
                  <span className="font-semibold">Freelancing</span> – 07 Posts
                </li>
                <li>
                  <span className="font-semibold">Writing</span> – 16 Posts
                </li>
                <li>
                  <span className="font-semibold">Marketing</span> – 11 Posts
                </li>
                <li>
                  <span className="font-semibold">Business</span> – 35 Posts
                </li>
                <li>
                  <span className="font-semibold">Education</span> – 14 Posts
                </li>
              </ul>
            </div>
          </aside>
        </article>
      </section>
    </>
  );
}
