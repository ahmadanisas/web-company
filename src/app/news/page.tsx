import PageHeader from "@/components/PageHeader";
import NewsList from "@/components/NewsList";
import Link from "next/link";

const NewsPage = () => {
  return (
    <>
      <PageHeader className="pt-16 pb-8">
        <div className="w-full inline-flex justify-center gap-3 mb-2">
          <Link
            href="/"
            className="text-sm font-medium text-gray-600 dark:text-gray-200 dark:hover:text-gray-50 hover:text-gray-800 hover:font-semibold transition-all"
          >
            Home
          </Link>
          <span className="text-sm font-medium text-gray-600 dark:text-gray-200 ">
            Berita
          </span>
        </div>
        <h1 className="font-bold text-center text-5xl mb-16">Berita</h1>
      </PageHeader>
      <NewsList />
    </>
  );
};

export default NewsPage;
