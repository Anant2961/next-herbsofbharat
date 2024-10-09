"use client";
import { twMerge } from "tailwind-merge";
import toast from "react-hot-toast";
import { useState, useEffect } from "react";
import PriceTag from "./PriceTag";
import { Plus, Minus } from "lucide-react";
import store from "../../lib/store";
export default function AddtoCartbtn({
  className,
  title,
  product,
  showPrice = true,
}) {
  const [existingProduct, setExistingProduct] = useState(null);
  const { addToCart, cartProduct, decreaseQuantity } = store();

  useEffect(() => {
    const availableItem = cartProduct.find(
      (item) => item?._id === product?._id
    );

    setExistingProduct(availableItem || null);
  }, [product, cartProduct]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
      toast.success(`${product?.name.substring(0, 10)} added successfully!`);
    } else {
      toast.error("Product is undefined!");
    }
  };

  const handleDeleteProduct = () => {
    if (existingProduct) {
      if (existingProduct?.quantity > 1) {
        decreaseQuantity(existingProduct?._id);
        toast.success(
          `${product?.name.substring(0, 10)} decreased successfully`
        );
      } else {
        toast.error("You can not decrease less than 1");
      }
    } else {
    }
  };

  const newClassName = twMerge(
    "bg-gray-100 uppercase text-xs py-3 text-center rounded-full font-semibold hover:bg-black hover:text-white hover:scale-105 duration-200 cursor-pointer",
    className
  );

  const getRegularPrice = () => {
    if (existingProduct) {
      if (product) {
        return product?.regularPrice * existingProduct?.quantity;
      }
    } else {
      return product?.regularPrice;
    }
  };

  const getDiscountedPrice = () => {
    if (existingProduct) {
      if (product) {
        return product?.discountedPrice * existingProduct?.quantity;
      }
    } else {
      return product?.discountedPrice;
    }
  };

  return (
    <>
      {showPrice && (
        <div>
          <PriceTag
            regularPrice={getRegularPrice()}
            discountedPrice={getDiscountedPrice()}
          />
        </div>
      )}
      {existingProduct ? (
        <div className="flex self-center items-center justify-center gap-2">
          <button
            onClick={handleDeleteProduct}
            className="bg-gray-100 text-black p-2 border-[1px] border-gray-200 hover:border-skyText rounded-full text-sm hover:bg-white duration-200 cursor-pointer"
          >
            <Minus />
          </button>
          <p className="text-base font-semibold w-10 text-center">
            {existingProduct?.quantity}
          </p>
          <button
            onClick={handleAddToCart}
            className="bg-gray-100 text-black p-2 border-[1px] border-gray-200 hover:border-skyText rounded-full text-sm hover:bg-white duration-200 cursor-pointer"
          >
            <Plus />
          </button>
        </div>
      ) : (
        <button onClick={handleAddToCart} className={newClassName}>
          {title ? title : "Add to cart"}
        </button>
      )}
    </>
  );
}
