"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

type Member = {
  name: string;
  role: string;
  image: string;
  bio: string;
};

const direksi: Member[] = [
  {
    name: "Jemmy Atmadja",
    role: "Presiden Direktur",
    image: "/JemmyAtmadja.jpg",
    bio: `Bergabung dengan Perseroan sejak tahun 2015 sebagai Direktur Pemasaran, dan diangkat sebagai Direktur Utama pada tahun 2020. Meraih gelar Sarjana Manajemen Ekonomi dari Universitas Atmajaya. Sebelumnya, beliau menjabat beberapa posisi strategis di Asuransi Fairfax, PT Ace Jaya Proteksi, Asuransi LIG, dan perusahaan Asuransi lainnya di Indonesia.`,
  },
  {
    name: "Norvin Osel",
    role: "Direktur",
    image: "/NorvinOsel.jpg",
    bio: `Meraih gelar Sarjana Manajemen Ekonomi dari Universitas Trisakti. Sebelum bergabung dengan Maximus Insurance pada tahun 2020, beliau memiliki 19 tahun pengalaman di bidang perbankan dan pasar modal, mantan kepala layanan sekuritas di SCB, terakhir menjabat sebagai Direktur di KPMG.`,
  },
  {
    name: "Lianny Kosasih",
    role: "Direktur",
    image: "/LiannyKosasih.jpg",
    bio: `Warga negara Indonesia, kelahiran Jakarta 14 Juni 1970. Bergabung sejak April 2022. Berpengalaman di berbagai perusahaan Asuransi Umum seperti Sinar Mas, Mitsui Marine, MSIG Indonesia, AXA Indonesia, dan terakhir sebagai Underwriting General Manager di PT Great Eastern General Insurance Indonesia.`,
  },
];

const komisaris: Member[] = [
  {
    name: "ML Denny Tewu",
    role: "Presiden Komisaris",
    image: "/Denny Tewu.jpg",
    bio: `Menjabat sebagai Komisaris Utama sejak 2015 dan juga di PT Kresna Ventura. Memperoleh gelar Doktor Ekonomi konsentrasi Manajemen Bisnis dari Universitas Padjadjaran.`,
  },
  {
    name: "Hendra Sudjaka",
    role: "Komisaris Independen",
    image: "/HendraSudjaka.jpg",
    bio: `Bergabung sejak 2009. Pernah menjabat Wakil Direktur PT Sudjaca Palemban dan Direksi PT Jason Marintama Servindo. Sarjana Teknik Mesin dari Universitas Indonesia, 1991.`,
  },
  {
    name: "Muhamad Idrus",
    role: "Komisaris Independen",
    image: "/MuhamadIdrus.jpg",
    bio: `Menjabat sebagai Komisaris sejak 2015. Pernah menjadi Komisaris PT Inti Pratama Kinan. Meraih gelar Sarjana Teknik Metalurgi dari Universitas Indonesia.`,
  },
];

function TeamCarousel({
  title,
  heading,
  description,
  members,
}: {
  title: string;
  heading: string;
  description: string;
  members: Member[];
}) {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-6">
          <div>
            <Badge className="bg-red-100 text-red-600">{title}</Badge>
            <h2 className="text-3xl font-bold mt-4 mb-2">{heading}</h2>
          </div>
          <p className="text-muted-foreground max-w-md mt-2">{description}</p>
        </div>

        <Carousel opts={{ align: "start" }}>
          <CarouselContent>
            {members.map((member, index) => (
              <CarouselItem key={index} className="md:basis-1/3">
                <div className="space-y-4 p-4 border rounded-lg shadow-sm bg-card h-full flex flex-col">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={400}
                    height={300}
                    className="rounded-md object-cover w-full aspect-[4/5]"
                  />
                  <div>
                    <p className="text-sm text-muted-foreground">
                      {member.role}
                    </p>
                    <h3 className="text-lg font-semibold">{member.name}</h3>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {member.bio}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}

export default function TeamSection() {
  return (
    <>
      <TeamCarousel
        title="Direksi"
        heading="Pimpinan Operasional Kami"
        description="Tim Direksi kami terdiri dari para profesional berpengalaman yang memimpin strategi dan operasional perusahaan secara efektif."
        members={direksi}
      />
      <TeamCarousel
        title="Komisaris"
        heading="Dewan Komisaris"
        description="Dewan Komisaris mengawasi kebijakan strategis dan tata kelola perusahaan dengan integritas dan pengalaman luas."
        members={komisaris}
      />
    </>
  );
}
