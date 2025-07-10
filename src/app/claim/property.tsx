import MotorClaimForm from "@/components/MotorClaimForm";
import PropertyClaimForm from "@/components/PropertyClaimForm";
import PageHeader from "@/components/PageHeader";
import Link from "next/link";

export default function PropertyClaimPage() {
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
          <span className="text-sm font-medium text-gray-600 dark:text-gray-200 ">
            Klaim
          </span>
          <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
            Properti
          </span>
        </div>
        <h1 className="font-bold text-center text-5xl mb-16">Properti</h1>
      </PageHeader>
      <PropertyClaimForm />
    </>
  );
}
