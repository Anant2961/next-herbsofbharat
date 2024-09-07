"use client";
import store from "../../lib/store";
import Link from "next/link";
import Image from "next/image";
import { ShoppingBag, User, Star } from "lucide-react";

export default function MenuBar() {
  const { currentUser, cartProduct, favoriteProduct } = store();
  return (
    <div className="flex items-center gap-x-6 text-2xl">
      <Link href="/profile">
        {currentUser ? (
          <Image
            src={currentUser?.avatar}
            alt="profileImg"
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover"
          />
        ) : (
          <User className="hover:text-skyText duration-200 cursor-pointer" />
        )}
      </Link>
      <Link href="/favourites" className="relative block">
        <Star className="hover:text-skyText duration-200 cursor-pointer" />
        <span className="inline-flex items-center justify-center bg-redText text-whiteText absolute -top-1 -right-2 text-xs rounded-full w-4 h-4">
          {favoriteProduct?.length > 0 ? favoriteProduct?.length : "0"}
        </span>
      </Link>
      <Link href="/cart" className="relative block">
        <ShoppingBag className="hover:text-skyText duration-200 cursor-pointer" />
        <span className="inline-flex items-center justify-center bg-redText text-whiteText absolute -top-1 -right-2 text-xs rounded-full w-4 h-4">
          {cartProduct?.length > 0 ? cartProduct?.length : "0"}
        </span>
      </Link>
    </div>
  );
}
