import { LayoutGridDemo } from "@/components/LayoutGrid";
import { ImagesSliderDemo } from "../components/HeroImg";

import AboutHer from "@/components/AboutHer";
import FinalWish from "@/components/FinalWish";
import MiddleWish from "@/components/MiddleWish";
import { ParallaxScrollSecondDemo } from "@/components/ParallaxGallery";

export default function Home() {
  return (
    <main className="">
      <ImagesSliderDemo />
      <AboutHer />
      <LayoutGridDemo />
      <MiddleWish />
      <ParallaxScrollSecondDemo />
      <FinalWish />
    </main>
  );
}
