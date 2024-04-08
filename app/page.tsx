// Assuming ThemeProvider is exported from app/components/theme-provider.tsx
import { ThemeProvider } from './components/theme-provider';
import Hero from "./components/Hero";
import Features from "./components/Features";
import Newest from "./components/Newest";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <ThemeProvider> 
      <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
        <Hero />
        <Features />
        <Newest />
      </div>
    </ThemeProvider>
  );
}
