import { LayoutGridDemo } from "@/components/LayoutGrid";
import { ImagesSliderDemo } from "../components/HeroImg";

import AboutHer from "@/components/AboutHer";
import FinalWish from "@/components/FinalWish";
import MiddleWish from "@/components/MiddleWish";
import { ParallaxScrollSecondDemo } from "@/components/ParallaxGallery";
import { ParallaxScrollDemo } from "@/components/MobileParallaxGallery";

export default function Home() {
  return (
    <main className="bg-black">
      <ImagesSliderDemo />
      <AboutHer />
      <LayoutGridDemo />
      <MiddleWish />
      <ParallaxScrollDemo />
      <ParallaxScrollSecondDemo />
      <FinalWish />
    </main>
  );
}
