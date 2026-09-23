import { ApplyProvider } from "@/components/apply-context";
import { ApplyModal } from "@/components/apply-modal";
import { CloseCta } from "@/components/close-cta";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Locations } from "@/components/locations";
import { Marquee } from "@/components/marquee";
import { Model } from "@/components/model";
import { Numbers } from "@/components/numbers";
import { Problem } from "@/components/problem";
import { Product } from "@/components/product";
import { loadLocations } from "@/lib/locations";

export default async function Home() {
  const { locations, source } = await loadLocations();

  return (
    <ApplyProvider>
      <Header />
      <main>
        <p className="sr-only">
          KŌK (KOK) franchise / франшиза: үшбармақ · ushbarmak street food, точка продажи для
          инвесторов без ресторанной кухни на смене, fast growth business · быстрый рост · жылдам
          өсу. Алматы, Қазақстан.
        </p>
        <Hero />
        <Marquee />
        <Problem />
        <Model />
        <Numbers />
        <Product />
        <CloseCta />
        <Locations locations={locations} source={source} />
      </main>
      <Footer />
      <ApplyModal cities={locations} />
    </ApplyProvider>
  );
}
