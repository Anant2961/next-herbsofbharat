"use client";
import Image from "next/image";
import { SquareChevronLeft, SquareChevronRight } from "lucide-react";
import Carousel from "react-multi-carousel";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

export default function CarouselTestBanner({ categories }) {
  return (
    <Carousel
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      className="flex flex-row p-4 max-w-screen-xl mx-auto lg:px-0 relative"
      CustomLeftArrow={<SquareChevronLeft />}
      CustomRightArrow={<SquareChevronRight />}
    >
      {categories.map((category) => (
        <div
          key={category._id}
          className="flex items-center gap-x-2 p-1 border border-gray-100 mr-1 flex-1 rounded-md hover:border-skyText hover:shadow-lg"
        >
          <Image
            src={category.image}
            alt="categoryImage"
            className="rounded-full object-cover"
            width={40}
            height={40}
          />
          <p className="text-sm font-semibold"> {category.name}</p>
        </div>
      ))}
    </Carousel>
  );
}
