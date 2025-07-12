"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { LogIn, Menu, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

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
        scrolled ? "bg-white dark:bg-[#1E2A47] shadow" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between relative">
        {/* Desktop: 3 columns */}
        <div className="hidden md:flex w-full items-center">
          {/* Logo - Left */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="logo"
                width={150}
                height={50}
                className="object-contain h-12"
              />
            </Link>
          </div>
          {/* NavMenu - Center */}
          <div className="flex-1 flex justify-center">
            <NavigationMenu>
              <NavigationMenuList className="flex space-x-4">
                {/* Home */}
                <NavigationMenuItem>
                  <NavigationMenuLink
                    asChild
                    className="bg-transparent border-none shadow-none hover:bg-transparent focus:bg-transparent focus:ring-0 dark:text-blue-500 dark:hover:bg-blue-600"
                  >
                    <Link href="/">Home</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                {/* Profile */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent border-none shadow-none hover:bg-transparent focus:bg-transparent focus:ring-0 dark:text-blue-500 dark:hover:bg-blue-600">
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
                      <li>
                        <NavigationMenuLink asChild>
                          <Link href="/location">Location</Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                {/* Service */}
                <NavigationMenuItem>
                  <NavigationMenuLink
                    asChild
                    className="bg-transparent border-none shadow-none hover:bg-transparent focus:bg-transparent focus:ring-0 dark:text-blue-500 dark:hover:bg-blue-600"
                  >
                    <Link href="/service">Service</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                {/* Claim */}
                <NavigationMenuItem>
                  <NavigationMenuLink
                    asChild
                    className="bg-transparent border-none shadow-none hover:bg-transparent focus:bg-transparent focus:ring-0 dark:text-blue-500 dark:hover:bg-blue-600"
                  >
                    <Link href="/claim">Claim</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                {/* Others */}
                <NavigationMenuItem>
                  <NavigationMenuLink
                    asChild
                    className="bg-transparent border-none shadow-none hover:bg-transparent focus:bg-transparent focus:ring-0 dark:text-blue-500 dark:hover:bg-blue-600"
                  >
                    <Link href="/form">Form</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    asChild
                    className="bg-transparent border-none shadow-none hover:bg-transparent focus:bg-transparent focus:ring-0 dark:text-blue-500 dark:hover:bg-blue-600"
                  >
                    <Link href="/career">Career</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    asChild
                    className="bg-transparent border-none shadow-none hover:bg-transparent focus:bg-transparent focus:ring-0 dark:text-blue-500 dark:hover:bg-blue-600"
                  >
                    <Link href="/blog">Blog</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          {/* Sign In & ThemeToggle - Right */}
          <div className="flex items-center gap-4 flex-shrink-0">
            <Button
              asChild
              variant="outline"
              size="sm"
              className="hover:bg-blue-500 hover:text-white"
            >
              <Link href="/signin">
                Sign In <LogIn />
              </Link>
            </Button>
            <ThemeToggle />
          </div>
        </div>
        {/* Mobile: Logo, ThemeToggle & Hamburger */}
        <div className="flex md:hidden items-center justify-between w-full">
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
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button onClick={() => setMenuOpen(!menuOpen)} className="ml-2">
              {menuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-4">
          <Link href="/" className="block text-gray-800 dark:text-blue-500">
            Home
          </Link>
          <div>
            <div>
              <button
                type="button"
                className="flex items-center w-full text-gray-800 dark:text-blue-500 focus:outline-none"
                onClick={() => setProfileOpen((prev) => !prev)}
              >
                Profile
                <span className="ml-2">
                  {profileOpen ? (
                    <svg width="16" height="16" fill="currentColor">
                      <path d="M4 10l4-4 4 4" />
                    </svg>
                  ) : (
                    <svg width="16" height="16" fill="currentColor">
                      <path d="M4 6l4 4 4-4" />
                    </svg>
                  )}
                </span>
              </button>
              {profileOpen && (
                <div className="ml-4 mt-2 space-y-2">
                  <Link
                    href="/about"
                    className="block text-gray-800 dark:text-blue-500"
                  >
                    About
                  </Link>
                  <Link
                    href="/management"
                    className="block text-gray-800 dark:text-blue-500"
                  >
                    Management
                  </Link>
                  <Link
                    href="/location"
                    className="block text-gray-800 dark:text-blue-500"
                  >
                    Location
                  </Link>
                </div>
              )}
            </div>
          </div>
          <Link
            href="/service"
            className="block text-gray-800 dark:text-blue-500"
          >
            Service
          </Link>
          <Link href="/form" className="block text-gray-800 dark:text-blue-500">
            Form
          </Link>
          <Link href="/blog" className="block text-gray-800 dark:text-blue-500">
            Blog
          </Link>
          {/* Sign In Link */}
          <Link href="/signin" className="block text-blue-600 font-semibold">
            Sign In
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
