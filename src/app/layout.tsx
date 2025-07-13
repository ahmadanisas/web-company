import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import ClientProvider from "@/components/ClientProvider";
import { Toaster } from "sonner";

export const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Maximus Insurance",
  description: "Redesigned by Ahmadanisa",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <ClientProvider>
          {children}
        </ClientProvider>
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}