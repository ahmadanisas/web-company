import PageHeader from "@/components/PageHeader";
import ServiceSection from "@/components/ServiceSection";
import Link from "next/link";

const Form = () => {
  return (
    <>
      <PageHeader className="pt-16 pb-8">
        <div className="w-full inline-flex justify-center gap-3 mb-2">
          <Link
            href="/"
            className="text-sm font-medium text-gray-600 hover:text-gray-800 dark:text-gray-200 dark:hover:text-gray-50 hover:font-semibold transition-all"
          >
            Home
          </Link>
          <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
            Layanan
          </span>
        </div>
        <h1 className="font-bold text-center text-5xl mb-16">Layanan</h1>
      </PageHeader>
      <ServiceSection />
    </>
  );
};

export default Form;
