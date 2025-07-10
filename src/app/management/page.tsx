import PageHeader from "@/components/PageHeader";
import TeamSection from "@/components/TeamSection";
import Link from "next/link";

const ManagementPage = () => {
  return (
    <>
      <PageHeader className="pt-16 pb-8">
        <div className="w-full inline-flex justify-center gap-3 mb-2">
          <Link
            href="/"
            className="text-sm font-medium text-gray-600 hover:text-gray-800 hover:font-semibold transition-all"
          >
            Home
          </Link>
          <span className="text-sm font-medium text-gray-600">Profil</span>
          <span className="text-sm font-medium text-gray-900">Manajemen</span>
        </div>
        <h1 className="font-bold text-center text-5xl mb-16">Tentang Kami</h1>
      </PageHeader>
      <TeamSection />
    </>
  );
};

export default ManagementPage;
