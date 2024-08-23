import CarouselBanner from "./components/ui/CarouselBanner";
import HomeBanner from "./components/ui/HomeBanner";
import "react-multi-carousel/lib/styles.css";
import { Toaster } from "react-hot-toast";
import Productlist from "./components/ui/ProductList";
import FooterTop from "./components/ui/FooterTop";

export default async function Home() {
  return (
    <>
      <CarouselBanner />
      <HomeBanner />
      <Productlist />
      <FooterTop />
      <Toaster
        position="bottom-right"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        toastOptions={{
          style: {
            backgroundColor: "black",
            color: "white",
          },
        }}
      />
    </>
  );
}
