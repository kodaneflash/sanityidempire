import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CartProvider from "./components/Providers";
import Navbar from "./components/Navbar";
import ShoppingCartModal from "./components/ShoppingCartModal";
// import Footer from "./components/Footer"; // Removed this line to prevent duplication
import Head from 'next/head'; // Fix this line
import Footer from "./components/Footer"; // Added this line to fix the "Footer is not defined" error

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IDEmpire - Your Trusted Vendor for Premium Fake ID's",
  description: "IDEmpire is the best place to get your premium fake ID's",
  openGraph: {
    title: "IDEmpire - Your Trusted Vendor for Premium Fake ID's",
    description: "IDEmpire is the best place to get your premium fake ID's",
    url: "https://idempire.us",
    type: "website",
    images: [
      {
        url: "https://idempire.us/og-image.png",
        width: 800,
        height: 600,
        alt: "IDEmpire Open Graph Image",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <title>{String(metadata.title)}</title>
        <meta name="description" content={String(metadata.description)} />
        <link rel="icon" href="/favicon.ico" /> {/* Add your favicon link here */}
      </Head>
      <body className={inter.className}>
        <CartProvider>
          <Navbar />
          <ShoppingCartModal />
          {children}
          <Footer /> {/* Ensure this line is active to include the Footer on all pages */}
        </CartProvider>
      </body>
    </html>
  );
}
