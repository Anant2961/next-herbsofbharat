import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import { User, Star, ShoppingBag } from "lucide-react";
import SearchBar from "./SearchBar";
import Hamburger from "./Hamburger";
import MenuBar from "./MenuBar";

const bottomNavigation = [
  { title: "Home", link: "/" },
  { title: "Shop", link: "/product" },
  { title: "Cart", link: "/cart" },
  { title: "Orders", link: "/orders" },
  { title: "My Account", link: "/profile" },
  { title: "Blog", link: "/blog" },
];

export default async function Header() {
  const res = await fetch("http://localhost:3000/api/products");
  const product = await res.json();
  return (
    <div className="w-full bg:whiteText">
      <div className="max-w-screen-xl mx-auto h-20 flex items-center justify-between px-4 py-2 lg:px-0">
        <Hamburger />
        <Link href="/">
          <Image
            src="/pro_logo.jpeg"
            width={96}
            height={96}
            style={{
              width: "auto",
              height: "auto",
            }}
            priority
            alt="Mountains"
            className="w-24"
          />
        </Link>
        <SearchBar products={product} />
        <MenuBar />
      </div>
      <div className="w-full bg-darkText text-whiteText">
        <Container className="py-2 max-w-4xl hidden md:flex flex-row items-center gap-5 justify-between h-15">
          {bottomNavigation.map(({ title, link }) => (
            <Link
              href={link}
              key={title}
              className="uppercase flex-col md:inline-flex sm:flex-col text-sm font-semibold test-whiteText/90 duration-200 relative overflow-hidden group"
            >
              {title}
              <span className="inline-flex w-full h-[1px] bg-whiteText absolute bottom-0 left-0 transform -translate-x-[105%] group-hover:translate-x-0 duration-500"></span>
            </Link>
          ))}
        </Container>
      </div>
    </div>
  );
}
