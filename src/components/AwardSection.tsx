import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { Card, CardContent } from "./ui/card";

const AwardSection = () => {
  const awards = [
    {
      year: "2008",
      title: "Best General Insurance Company Equity Rp. 50 to Rp. 100 Billion",
      image: "/award1.png",
    },
    {
      year: "2010",
      title: "Best General Insurance Company Equity Rp. 50 to Rp. 100 Billion",
      image: "/award2.png",
    },
    {
      year: "2011",
      title: "As Top Ten Producer Category B",
      image: "/award3.png",
    },
    {
      year: "2012",
      title: "As Top Ten Producer Category B",
      image: "/award4.png",
    },
    {
      year: "2013",
      title: "As Top Ten Producer Category B",
      image: "/award5.png",
    },
  ];

  return (
    <section className="px-6 md:px-20 py-16 border-t">
      <div className="text-center mb-10">
        <p className="text-sm text-orange-500 font-medium">Penghargaan</p>
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-gray-100 mt-2">
          Apresiasi atas Komitmen dan Kualitas Kami
        </h2>
      </div>
      <Carousel className="w-full max-w-4xl mx-auto">
        <CarouselContent>
          {awards.map((award, index) => (
            <CarouselItem
              key={index}
              className="basis-full sm:basis-1/2 md:basis-1/3 p-4"
            >
              <Card className="h-full shadow-md rounded-2xl">
                <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                  <Image
                    src={award.image}
                    width={640}
                    height={640}
                    alt="award"
                    className="aspect-square"
                  />
                  <div className="w-12 h-12 rounded-full bg-sky-200 text-sky-800 dark:bg-gray-950 dark:text-white font-semibold flex items-center justify-center">
                    {award.year}
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 text-lg mb-2">
                    {award.title}
                  </h4>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default AwardSection;
