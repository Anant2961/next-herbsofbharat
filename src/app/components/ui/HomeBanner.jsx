import Container from "./Container";
import Image from "next/image";
import LinkButton from "./LinkButton";
import Link from "next/link";

export default function HomeBanner() {
  return (
    <Container className="relative py-5 overflow-hidden">
      <div className="relative hover:scale-110 duration-200 cursor-pointer">
        <Link href="/products">
          <Image
            width={0}
            height={0}
            sizes="100vw"
            src="https://i.ibb.co/7GNTGcD/main-Homebanner.jpg"
            alt="homeBanner"
            // className="w-full h-full object-cover rounded-md hover:scale-105 duration-200 cursor-pointer"
            unoptimized
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </Link>
        <div className="w-full h-full absolute top-0 left-0 bg-black/10" />
      </div>
      <div className="absolute inset-0 flex flex-col justify-center px-10">
        <LinkButton className="w-24 md:w-36 flex items-center justify-center bg-whiteText text-darkText hover:bg-darkText hover:text-whiteText duration-200 mt-4" />
      </div>
    </Container>
  );
}
