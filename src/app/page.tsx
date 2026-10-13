import { CloseCta } from "@/components/close-cta";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Locations } from "@/components/locations";
import { Marquee } from "@/components/marquee";
import { Menu } from "@/components/menu";
import { Model } from "@/components/model";
import { PartnersTeaser } from "@/components/partners-teaser";
import { Problem } from "@/components/problem";
import { loadLocations } from "@/lib/locations";

export default async function Home() {
  const { locations, source } = await loadLocations();

  return (
    <>
      <main>
        <p className="sr-only">
          KŌK (KOK) franchise / франшиза: үшбармақ · ushbarmak street food, точка продажи для
          инвесторов без ресторанной кухни на смене, fast growth business · быстрый рост · жылдам
          өсу. Алматы, Қазақстан.
        </p>
        <Hero />
        <Marquee />
        <Menu />
        <Problem />
        <Model />
        <PartnersTeaser />
        <Locations locations={locations} source={source} />
        <CloseCta />
      </main>
      <Footer />
    </>
  );
}
