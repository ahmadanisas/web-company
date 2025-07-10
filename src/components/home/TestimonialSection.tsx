"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Leslie Alexander",
    role: "Founder",
    avatar: "/avatar1.jpg",
    title: "Superb!",
    quote:
      "You made it so simple. My new site is so much faster and easier to work with than my old site.",
    stars: 5,
  },
  {
    name: "Darlene Robertson",
    role: "Founder",
    avatar: "/avatar2.jpg",
    title: "Really happy with sosoon!",
    quote: "Distinctively formulate seamless leadership via 24/365 web.",
    stars: 5,
  },
  {
    name: "Wade Warren",
    role: "Founder",
    avatar: "/avatar3.jpg",
    title: "10/10, Amazing!!!",
    quote:
      "You made it so simple. My new site is so much faster and easier to work with than my old site.",
    stars: 5,
  },
  // Tambahkan testimoni lainnya sesuai kebutuhan
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
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=3") // ambil 3 user
      .then((res) => res.json())
      .then((data) => {
        const firstThree = data.results.slice(0, 3); // bisa juga pakai slice 0-2
        setUsers(firstThree);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <section className="py-16 bg-gradient-to-b from-lime-100 to-amber-50 dark:from-[#000308] dark:to-[#050011]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center text-3xl font-semibold mb-12">
          Check What’s Our Client <br /> Say About Us
        </h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {users.length > 0 &&
            testimonials.map((t, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="bg-white dark:bg-[#002056] p-6 rounded-2xl shadow-md"
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
                    src={users[i].picture.thumbnail}
                    alt={t.name}
                    width={36}
                    height={36}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium text-sm">
                      {users[i].name.first} {users[i].name.last}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-200">
                      {t.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
        </motion.div>
      </div>
    </section>
  );
}
