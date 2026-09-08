import { ApplyProvider } from "@/components/apply-context";
import { ApplyModal } from "@/components/apply-modal";
import { CloseCta } from "@/components/close-cta";
import { Economics } from "@/components/economics";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Locations } from "@/components/locations";
import { Manifesto } from "@/components/manifesto";
import { Marquee } from "@/components/marquee";
import { Phygital } from "@/components/phygital";
import { loadLocations } from "@/lib/locations";

export const revalidate = 60;

export default async function Home() {
  const { locations, source } = await loadLocations();

  return (
    <ApplyProvider>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Manifesto />
        <Phygital />
        <Economics />
        <Locations locations={locations} source={source} />
        <CloseCta />
      </main>
      <Footer />
      <ApplyModal cities={locations} />
    </ApplyProvider>
  );
}
