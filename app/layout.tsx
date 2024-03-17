import { useLayoutEffect } from 'react';
import { GoogleAnalytics } from '@next/third-parties/google';
import Head from 'next/head';
import { Navbar, Footer, ShoppingCartModal } from '@components'; // Adjust import paths as necessary
import '@styles/globals.css'; // Adjust according to your global styles location

// Your application metadata
const metadata = {
  title: "IDEmpire - Your Trusted Vendor for Premium Fake ID's",
  description: "IDEmpire is the best place to get your premium fake ID's",
  openGraph: {
    url: "https://idempire.us",
    type: "website",
    images: [{ url: "https://idempire.us/og-image.png", width: 800, height: 600, alt: "IDEmpire Open Graph Image" }],
  },
};

export default function RootLayout({ children }) {
  // Utilize useLayoutEffect to ensure code runs in the browser, as Google Analytics should only be initialized client-side
  useLayoutEffect(() => {
    // Initialize Google Analytics or any other client-side logic here if necessary
  }, []);

  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.ico" />
        {/* Additional head elements as needed */}
      </Head>
      {/* Your application structure */}
      <Navbar />
      {/* Ensure GoogleAnalytics is placed outside of the main flow to not block rendering */}
      <GoogleAnalytics gaId="G-MD7RVMLVKD" />
      <main>{children}</main>
      <ShoppingCartModal />
      <Footer />
    </>
  );
}
