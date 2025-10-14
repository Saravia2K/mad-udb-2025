import Categories from "@/components/features/home/categories";
import Hero from "@/components/features/home/hero";
import Profiles from "@/components/features/home/profiles";
import ImagesPreload from "@/lib/utils/images-preload";
import sharedMetatags from "@/lib/utils/shared-metatags";

export const meta = () => sharedMetatags();

export const links = () => ImagesPreload();

export default function HomePage() {
  return (
    <div className="w-screen overflow-x-hidden">
      <Hero />
      <Categories />
      <Profiles />
    </div>
  );
}
