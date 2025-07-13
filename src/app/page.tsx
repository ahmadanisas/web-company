import FloatingSocialButton from "@/components/FloatingSocialButton";
import AboutSection from "@/components/home/AboutSection";
import Hero from "@/components/home/HeroSection";
import ServiceSection from "@/components/home/ServiceSection";
import TestimonialSection from "@/components/home/TestimonialSection";
import WorkingSection from "@/components/home/WorkingSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <ServiceSection />
      <TestimonialSection />
      <WorkingSection />
      <FloatingSocialButton />
    </main>
  );
}
