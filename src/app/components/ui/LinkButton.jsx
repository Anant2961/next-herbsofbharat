import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { twMerge } from "tailwind-merge";

export default function LinkButton({ showButton, link, className }) {
  const newClassName = twMerge(
    "bg-darkText/80 hover:bg-darkText text-whiteText py-2.5 px-2 rounded-md flex items-center gap-2 duration-200",
    className
  );
  return (
    <Link href={link ? link : "/products"} className={newClassName}>
      {showButton && <ArrowLeft />} Shop Now
    </Link>
  );
}
