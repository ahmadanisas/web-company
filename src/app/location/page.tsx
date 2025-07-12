"use client";
import { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import PageHeader from "@/components/PageHeader";

const branches = [
  {
    id: 1,
    name: "Jakarta 1",
    address: "Grand Slipi Tower Lantai 8 Unit C (JL. Letjen S Parman Kav.22-24 - Jakarta 11480)",
    phone: "(021) 29022341",
    email  :  "jakarta1@asuransimaximus.com",
    coordinates: [-6.229140681369368, 106.81038038650722],
  },
  {
    id: 2,
    name: "Jakarta 2",
    address: "Graha Inti Fauzimultika (Jl. Buncit Raya No. 22, RT. 2/RW. 7, Pejaten Bar, Pasar Minggu, Jakarta Selatan)",
    phone: "(021) 7975112",
    email  :  "jakarta2@asuransimaximus.com",
    coordinates: [-6.200202674931101, 106.79861545324053],
  },
  {
    id: 3,
    name: "Bogor",
    address: "Ruko VIP No. 88 (Jl. Raya Pajajaran Bogor)",
    phone: "(0251) 833 5663 / 833 0356",
    email  :  "bogor@asuransimaximus.com",
    coordinates: [-6.5910887955924204, 106.80434572440797],
  },
  {
    id: 4,
    name: "Tangerang",
    address: "Ruko The Element Kav.25BC No.B-02 Alam Sutera, Serpong Tangerang 15320",
    phone: "(021) 2931 4988/77",
    email  :  "alamsutera@asuransimaximus.com",
    coordinates: [-6.23184235234522, 106.65984099556928],
  },
  {
    id: 5,
    name: "Bandung",
    address: "Ruko Supratman Bizz Centre Jl.  Jend. A. Yani No. 279 E Bandung 40121",
    phone: "(022) 721 0406, 721 6425",
    email  :  "bandung@asuransimaximus.com",
    coordinates: [-6.94231166450407, 107.64902962256119],
  },
  {
    id: 6,
    name: "Malang",
    address: "Ruko Sukarno Hatta Indah C-8, Mojolangu, Lowokwaru, Malang 65142",
    phone: "(0341) 357 795",
    email  :  "malang@asuransimaximus.com",
    coordinates: [-7.269212996302311, 112.74464445331019],
  },
   {
    id: 7,
    name: "Medan",
    address: "Ruko Sukarno Hatta Indah C-8, Mojolangu, Lowokwaru, Malang 65142",
    phone: "(0341) 357 795",
    email  :  "medan@asuransimaximus.com",
    coordinates: [3.584598507251826, 98.67312318205917],
  },
   {
    id: 8,
    name: "Semarang",
    address: "Ruko Sukarno Hatta Indah C-8, Mojolangu, Lowokwaru, Malang 65142",
    phone: "(0341) 357 795",
    email  :  "semarang@asuransimaximus.com",
    coordinates: [-6.990803283314325, 110.42783818208318],
  },
   {
    id: 9,
    name: "Surabaya",
    address: "Ruko Sukarno Hatta Indah C-8, Mojolangu, Lowokwaru, Malang 65142",
    phone: "(0341) 357 795",
    email  :  "surabaya@asuransimaximus.com",
    coordinates: [-7.269212996302311, 112.74464445331019],
  },
   {
    id: 10,
    name: "Denpasar",
    address: "Ruko Sukarno Hatta Indah C-8, Mojolangu, Lowokwaru, Malang 65142",
    phone: "(0341) 357 795",
    email  :  "denpasar@asuransimaximus.com",
    coordinates: [-7.269212996302311, 112.74464445331019],
  },
   {
    id: 11,
    name: "Makassar",
    address: "Ruko Sukarno Hatta Indah C-8, Mojolangu, Lowokwaru, Malang 65142",
    phone: "(0341) 357 795",
    email  :  "makassar@asuransimaximus.com",
    coordinates: [-7.269212996302311, 112.74464445331019],
  },
];

const Branches = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBranch, setSelectedBranch] = useState<number | null>(null);

  const filteredBranches = branches.filter(
    (branch) =>
      branch.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      branch.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen0">
      <PageHeader className="pt-16 pb-8">
        <div className="w-full inline-flex justify-center gap-3 mb-2">
          <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
            Profil
          </span>
          <span className="text-sm font-medium text-blue-300">
            Lokasi Cabang Kami
          </span>
        </div>
        <h1 className="font-bold text-center text-5xl mb-16">Tentang Kami</h1>
      </PageHeader>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Find Your Nearest Branch
          </h1>
          <p className="text-lg text-gray-600 dark:text-white max-w-2xl mx-auto">
            Visit one of our convenient locations for personalized service and
            expert insurance advice.
          </p>
        </div>

        {/* Search */}
        <div className="mb-8 max-w-md mx-auto">
          <Input
            type="text"
            placeholder="Search by location or branch name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Branch List */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              All Branches ({filteredBranches.length})
            </h2>

            {filteredBranches.map((branch) => (
              <Card
                key={branch.id}
                className={`cursor-pointer transition-all hover:shadow-md ${
                  selectedBranch === branch.id
                    ? "ring-2 ring-blue-500 shadow-md"
                    : ""
                }`}
                onClick={() =>
                  setSelectedBranch(
                    selectedBranch === branch.id ? null : branch.id
                  )
                }
              >
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <MapPin className="h-5 w-5 text-blue-600 mr-2" />
                    {branch.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start">
                    <MapPin className="h-4 w-4 text-gray-400 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-white">{branch.address}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 text-gray-400 mr-2" />
                    <span className="text-gray-600  dark:text-white">{branch.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 text-gray-400 mr-2" />
                    <span className="text-gray-600  dark:text-white">{branch.email}</span>
                  </div>
                  <Button asChild variant="outline" size="sm" className="mt-3">
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${branch.coordinates[1]},${branch.coordinates[0]}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Get Directions
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Branches;
