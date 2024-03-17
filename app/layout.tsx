import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CartProvider from "./components/Providers";
import Navbar from "./components/Navbar";
import ShoppingCartModal from "./components/ShoppingCartModal";
import Footer from "./components/Footer"; // Removed this line to prevent duplication
import Head from 'next/head'; // Fix this line
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
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5JHQ9SJ9');`,
          }}
        />
      </Head>
      <body className={inter.className}>
        {/* Directly include the GTM NoScript iframe here */}
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
      </body>
    </html>
  );
}
