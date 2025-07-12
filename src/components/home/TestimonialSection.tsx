'use client'
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type User = {
  name: { first: string; last: string };
  picture: { thumbnail: string };
};

type Testimonial = {
  name: string;
  role: string;
  avatar: string;
  title: string;
  quote: string;
  stars: number;
};

const testimonials: Omit<Testimonial, "avatar" | "name">[] = [
  {
    role: "Business Owner",
    title: "Superb Service!",
    quote:
      "The insurance process was seamless, and I feel secure knowing my business is protected.",
    stars: 5,
  },
  {
    role: "Founder",
    title: "Really Happy with Maximus Insurance!",
    quote: "The coverage options are comprehensive, and the customer service is excellent.",
    stars: 5,
  },
  {
    role: "Founder",
    title: "10/10, Amazing Experience!",
    quote:
      "I received prompt and efficient service when I needed it the most. Highly recommend.",
    stars: 5,
  },
  {
    role: "CEO",
    title: "Fantastic Service!",
    quote: "Maximus Insurance made the process smooth and stress-free.",
    stars: 5,
  },
  {
    role: "Manager",
    title: "Highly Recommended",
    quote: "I would recommend Maximus to anyone looking for reliable insurance.",
    stars: 5,
  },
  {
    role: "Developer",
    title: "Great Support",
    quote: "Whenever I needed assistance, the support team was quick and helpful.",
    stars: 5,
  },
  {
    role: "Designer",
    title: "User-Friendly Experience",
    quote: "The platform is intuitive, making it easy to manage our insurance needs.",
    stars: 5,
  },
  {
    role: "Marketer",
    title: "Boosted My Confidence",
    quote: "Knowing my business is covered with comprehensive insurance gives me peace of mind.",
    stars: 5,
  },
  {
    role: "Entrepreneur",
    title: "A Game Changer",
    quote: "Maximus Insurance completely changed the way I approach risk management.",
    stars: 5,
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function TestimonialSection() {
  const [users, setUsers] = useState<User[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Fetch 9 users
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=9")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.results.slice(0, 9));
      })
      .catch(() => {
        // fallback: use placeholder avatars
        setUsers([]);
      });
  }, []);

  // Helper to get testimonials for current slide
  const testimonialsPerSlide = 3;
  const totalSlides = Math.ceil(testimonials.length / testimonialsPerSlide);

  const getSlideTestimonials = () => {
    const start = currentSlide * testimonialsPerSlide;
    const end = start + testimonialsPerSlide;
    return testimonials.slice(start, end).map((t, idx) => {
      const userIdx = start + idx;
      const user = users[userIdx];
      return {
        ...t,
        name: user
          ? `${user.name.first} ${user.name.last}`
          : `User ${userIdx + 1}`,
        avatar: user
          ? user.picture.thumbnail
          : `/avatar${(userIdx % 3) + 1}.jpg`,
      };
    });
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50 dark:from-[#21242a] dark:to-[#0c0029]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center text-3xl font-bold mb-12">
          Check What’s Our Client <br /> Say About Us
        </h2>

        <div className="flex justify-center mb-6 gap-4">
          <button
            onClick={handlePrev}
            aria-label="Previous testimonials"
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-blue-200 dark:hover:bg-blue-900 transition"
          >
            &#8592;
          </button>
          <button
            onClick={handleNext}
            aria-label="Next testimonials"
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-blue-200 dark:hover:bg-blue-900 transition"
          >
            &#8594;
          </button>
        </div>

        <motion.div
          key={currentSlide}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {getSlideTestimonials().map((t, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="bg-white dark:bg-[#002056] p-6 rounded-2xl shadow-md"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
                transition: { duration: 0.2 },
              }}
            >
              <div className="flex items-center mb-3 text-orange-400">
                {"★".repeat(t.stars)}
              </div>
              <h3 className="font-semibold text-lg mb-2">{t.title}</h3>
              <p className="text-gray-600 dark:text-gray-200 mb-4">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={`Avatar of ${t.name}`}
                  width={36}
                  height={36}
                  className="rounded-full object-cover"
                />
                <div>
                  <p className="font-medium text-sm">
                    {t.name}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-200">
                    {t.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Dots indicator */}
        <div className="flex justify-center mt-6 gap-2">
          {Array.from({ length: totalSlides }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-3 h-3 rounded-full ${
                idx === currentSlide
                  ? "bg-blue-500"
                  : "bg-gray-300 dark:bg-gray-600"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}