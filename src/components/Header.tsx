"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 64);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-white dark:bg-[#000D22] shadow" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo.png"
            alt="logo"
            width={150}
            height={50}
            className="object-contain h-12"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList className="flex space-x-4">
              {/* Profile */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent border-none shadow-none hover:bg-transparent focus:bg-transparent focus:ring-0">
                  Profile
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-1 p-2 w-48">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/about">About</Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/management">Management</Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Service */}
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className="bg-transparent border-none shadow-none hover:bg-transparent focus:bg-transparent focus:ring-0"
                >
                  <Link href="/service">Service</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* Claim */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent border-none shadow-none hover:bg-transparent focus:bg-transparent focus:ring-0">
                  Claim
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-1 p-2 w-64">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/claim/vehicle">Vehicle Insurance</Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/claim/vehicle">Healthcare Insurance</Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/claim/property">Property Insurance</Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Others */}
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className="bg-transparent border-none shadow-none hover:bg-transparent focus:bg-transparent focus:ring-0"
                >
                  <Link href="/form">Form</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className="bg-transparent border-none shadow-none hover:bg-transparent focus:bg-transparent focus:ring-0"
                >
                  <Link href="/news">News</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
            <ThemeToggle />
          </NavigationMenu>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-4">
          <Link href="/about" className="block text-gray-800">
            About
          </Link>
          <Link href="/management" className="block text-gray-800">
            Management
          </Link>
          <Link href="/service" className="block text-gray-800">
            Service
          </Link>
          <Link href="/claim/vehicle" className="block text-gray-800">
            Vehicle Insurance
          </Link>
          <Link href="/claim/health" className="block text-gray-800">
            Healthcare Insurance
          </Link>
          <Link href="/claim/property" className="block text-gray-800">
            Property Insurance
          </Link>
          <Link href="/form" className="block text-gray-800">
            Form
          </Link>
          <Link href="/news" className="block text-gray-800">
            News
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
