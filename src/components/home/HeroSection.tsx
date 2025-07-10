"use client";

import { useState, useEffect, useRef, KeyboardEvent } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const slides = [
  {
    image: "/assets/slide-health.webp", // Ensure images are in the 'public' folder
    title: "Protect Your Family's Future",
    subtitle: "Comprehensive insurance solutions tailored to your needs",
    cta: "Get Quote",
  },
  {
    image: "/assets/slide-property.webp",
    title: "Secure Your Home & Life",
    subtitle: "Peace of mind with our comprehensive coverage plans",
    cta: "Learn More",
  },
  {
    image: "/assets/slide-family.webp",
    title: "Journey with Confidence",
    subtitle: "Travel insurance that covers you wherever life takes you",
    cta: "Explore Plans",
  },
  {
    image: "/assets/slide-medical.webp",
    title: "Health & Wellness Coverage",
    subtitle: "Comprehensive health insurance for you and your loved ones",
    cta: "View Options",
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const slideCount = slides.length;
  const autoAdvanceRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-advance slides
  useEffect(() => {
    autoAdvanceRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slideCount);
    }, 5000);
    return () => {
      if (autoAdvanceRef.current) clearInterval(autoAdvanceRef.current);
    };
  }, [slideCount]);

  // Keyboard navigation
  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowLeft") {
      prevSlide();
    } else if (e.key === "ArrowRight") {
      nextSlide();
    }
  };

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slideCount);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slideCount) % slideCount);

  return (
    <section
      className="relative h-screen overflow-hidden"
      aria-label="Hero image slider"
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      {/* Slides */}
      <ul className="relative w-full h-full list-none m-0 p-0">
        {slides.map((slide, idx) => (
          <li
            key={idx}
            aria-hidden={idx !== current}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              idx === current
                ? "opacity-100 z-10"
                : "opacity-0 z-0 pointer-events-none"
            }`}
            role="group"
            aria-roledescription="slide"
            aria-label={`${idx + 1} of ${slideCount}`}
          >
            <div className="relative w-full h-full min-h-[400px]">
              <Image
                src={slide.image}
                alt={slide.title}
                layout="responsive"
                width={1200} // Add explicit width and height for better control
                height={600} // Modify to match your image aspect ratio
                priority={idx === 0}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            </div>
            {/* Content Overlay */}
            {idx === current && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white px-4 max-w-4xl">
                  <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl mb-8 animate-fade-in">
                    {slide.subtitle}
                  </p>
                  <Button
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 animate-fade-in"
                  >
                    {slide.cta}
                  </Button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        aria-label="Previous slide"
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-3 transition-all duration-300 z-20"
        style={{ outline: "none" }}
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        aria-label="Next slide"
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-3 transition-all duration-300 z-20"
        style={{ outline: "none" }}
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </Button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            aria-label={`Go to slide ${idx + 1}`}
            aria-current={idx === current}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none ${
              idx === current ? "bg-white" : "bg-white bg-opacity-50"
            }`}
            tabIndex={0}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
