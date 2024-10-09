import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import SearchBar from "./SearchBar";
import Hamburger from "./Hamburger";
import MenuBar from "./MenuBar";

const bottomNavigation = [
  { title: "Home", link: "/" },
  { title: "Shop", link: "/products" },
  { title: "Cart", link: "/cart" },
  { title: "Orders", link: "/orders" },
  { title: "Favourite", link: "/favourites" },
  { title: "My Account", link: "/profile" },
];

export default async function Header() {
  const url = process.env.NEXT_PUBLIC_APP_URL;
  const endpoint = `${url}/api/products`;
  const res = await fetch(endpoint);
  const product = await res.json();
  return (
    <div className="w-full bg:whiteText z-50">
      <div className="max-w-screen-xl mx-auto h-20 flex items-center justify-between px-2 py-2 lg:px-0">
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
