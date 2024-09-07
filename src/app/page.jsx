import CarouselBanner from "./components/ui/CarouselBanner";
import HomeBanner from "./components/ui/HomeBanner";
import "react-multi-carousel/lib/styles.css";
import Productlist from "./components/ui/ProductList";

export default async function Home() {
  return (
    <>
      <CarouselBanner />
      <HomeBanner />
      <Productlist />
    </>
  );
}
