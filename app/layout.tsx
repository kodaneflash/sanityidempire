import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from './components/theme-provider'; // Corrected import path
import CartProvider from "./components/Providers"; // Ensure this path is correct
import Navbar from "./components/Navbar"; // Corrected path
import ShoppingCartModal from "./components/ShoppingCartModal"; // Ensure this path is correct
import Footer from "./components/Footer"; // Ensure this path is correct
import Head from 'next/head';
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
    <ThemeProvider> {/* Wrap the entire content with ThemeProvider */}
      <html lang="en">
        <Head>
          <title>{String(metadata.title)}</title>
          <meta name="description" content={String(metadata.description)} />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body className={inter.className}>
          <CartProvider>
            <Navbar />
            <ShoppingCartModal />
            {children}
            <Footer />
          </CartProvider>
        </body>
      </html>
    </ThemeProvider> // Closing ThemeProvider tag
  );
}
