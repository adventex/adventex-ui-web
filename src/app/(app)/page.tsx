import { FeaturedTour } from "@/components/featured-tours";
import { GalleryShowcase } from "@/components/gallery-showcase";
import { HeroCarousel } from "@/components/hero-carousel";
import { SearchDestination } from "@/components/search-destination";
import { Testimonials } from "@/components/testimonials";

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <SearchDestination />
      <div className="space-y-16 py-16">
        <FeaturedTour />
        <Testimonials />
        <GalleryShowcase />
      </div>
    </>
  );
}
