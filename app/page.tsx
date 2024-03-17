import Image from "next/image";
import Hero from "./components/Hero";
import Features from "./components/Features"; // Correctly imported Features component
import Newest from "./components/Newest";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
      <Hero />
      <Features /> {/* Included the Features component here */}
      <Newest />
    </div>
  );
}
