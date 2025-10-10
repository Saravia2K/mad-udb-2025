import Hero from "@/components/features/home/hero";
import sharedMetatags from "@/lib/utils/shared-metatags";

export const meta = () => sharedMetatags();

export default function HomePage() {
  return (
    <div className="w-screen overflow-x-hidden">
      <Hero />
    </div>
  );
}
