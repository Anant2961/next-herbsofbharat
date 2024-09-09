"use client";
import store from "../../lib/store";
import { ArrowLeftRight } from "lucide-react";
import { Heart, ScanEye } from "lucide-react";
import toast from "react-hot-toast";
import { useState, useEffect } from "react";

export default function ProductSideNav({ product }) {
  const { addToFavorite, favoriteProduct } = store();
  const [existingProduct, setExistingProduct] = useState(null);

  useEffect(() => {
    const availableItem = favoriteProduct.find(
      (item) => item._id === product._id
    );
    setExistingProduct(availableItem || null);
  }, [product, favoriteProduct]);

  const handleFavorite = () => {
    if (product) {
      addToFavorite(product).then(() => {
        toast.success(
          existingProduct
            ? `${product?.name.substring(0, 10)} removed successfully!`
            : `${product?.name.substring(0, 10)} added successfully!`
        );
      });
    }
  };
  return (
    <div className="absolute right-1 top-1 flex flex-col gap-1 transition translate-x-12 group-hover:translate-x-0 duration-300">
      <span
        onClick={handleFavorite}
        className="w-11 h-11 inline-flex text-black text-lg items-center justify-center rounded-full hover:text-white hover:bg-black duration-200"
      >
        {existingProduct ? <Heart fill="#FF0000" strokeWidth={1} /> : <Heart />}
      </span>
      <span className="w-11 h-11 inline-flex text-black text-lg items-center justify-center rounded-full hover:text-white hover:bg-black duration-200">
        <ArrowLeftRight />
      </span>
      <span className="w-11 h-11 inline-flex text-black text-lg items-center justify-center rounded-full hover:text-white hover:bg-black duration-200">
        <ScanEye />
      </span>
    </div>
  );
}
