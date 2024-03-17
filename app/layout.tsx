import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google'; // Import GoogleAnalytics
import "./globals.css";
import CartProvider from "./components/Providers";
import Navbar from "./components/Navbar";
import ShoppingCartModal from "./components/ShoppingCartModal";
import Footer from "./components/Footer";
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
    <html lang="en">
      <Head>
        <title>{String(metadata.title)}</title>
        <meta name="description" content={String(metadata.description)} />
        <link rel="icon" href="/favicon.ico" />
        {/* Other head elements */}
      </Head>
      <body className={inter.className}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5JHQ9SJ9"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        <CartProvider>
          <Navbar />
          <ShoppingCartModal />
          {children}
          <Footer />
        </CartProvider>
        <GoogleAnalytics gaId="GTM-5JHQ9SJ9" /> {/* Include GoogleAnalytics with your measurement ID */}
      </body>
    </html>
  );
}
