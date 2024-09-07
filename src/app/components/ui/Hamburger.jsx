import { AlignJustify } from "lucide-react";
import Container from "./Container";
import Link from "next/link";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";

const bottomNavigation = [
  { title: "Home", link: "/" },
  { title: "Shop", link: "/products" },
  { title: "Cart", link: "/cart" },
  { title: "Orders", link: "/orders" },
  { title: "Favourite", link: "/favourites" },
  { title: "My Account", link: "/profile" },
];

export default function Hamburger() {
  return (
    <div className=" block md:hidden">
      <Container>
        <Menu>
          <MenuButton>
            <AlignJustify className="text-base" />
          </MenuButton>
          <Transition
            enter="transition ease-out duration-75"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <MenuItems
              anchor="bottom end"
              className="w-52 origin-top-right rounded-xl border border-white/5 bg-black p-1 text-sm/6 text-gray-300 [--anchor-gap:var(--spacing-1)] focus:outline-none hover:text-white z-50"
            >
              {bottomNavigation.map(({ title, link }) => (
                <MenuItem key={title}>
                  <Link
                    href={link}
                    key={title}
                    className="flex w-full items-center gap-2 rounded-lg py-2 px-3 data-[focus]:bg-white/20 tracking-wide"
                  >
                    {title}
                  </Link>
                </MenuItem>
              ))}
            </MenuItems>
          </Transition>
        </Menu>
      </Container>
    </div>
  );
}
