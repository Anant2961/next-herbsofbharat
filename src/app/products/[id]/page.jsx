"use client";
import Container from "@/app/components/ui/Container";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import PriceTag from "@/app/components/ui/PriceTag";
import FormattedPrice from "@/app/components/ui/FormattedPrice";
import AddtoCartbtn from "@/app/components/ui/AddtoCartbtn";
import { Star, ScanEye } from "lucide-react";

export default function Page() {
  const [productsdata, setProductsdata] = useState([]);
  const [imgUrl, setImgUrl] = useState("");

  const id = usePathname().split("/")[2];
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const endpoint = `http://localhost:3000/api/products/${id}`;
        const response = await fetch(endpoint);
        const data = await response.json();
        setProductsdata(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchdata();
  }, [id]);
  useEffect(() => {
    setImgUrl(productsdata?.images?.[0]);
    console.log("Products data:", productsdata);
  }, [productsdata]);

  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-start">
          <div>
            {productsdata?.images?.map((item, index) => (
              <img
                src={item}
                alt="img"
                key={index}
                className={`w-24 cursor-pointer opacity-80 hover:opacity-100 duration-300 ${
                  imgUrl === item &&
                  "border border-gray-500 rounded-sm opacity-100"
                }`}
                onClick={() => setImgUrl(item)}
              />
            ))}
          </div>
          <div>
            <img src={imgUrl} alt="mainImage" />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-bold">{productsdata.name}</h2>
          <div className="flex items-center justify-between">
            <PriceTag
              regularPrice={productsdata.regularPrice}
              discountedPrice={productsdata.discountedPrice}
              className="text-xl"
            />
            <div className="flex items-center gap-1">
              <div className="text-base text-lightText flex items-center">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </div>
              <p className="text-base font-semibold">{`(${productsdata.reviews} reviews)`}</p>
            </div>
          </div>
          <p className="flex items-center">
            <ScanEye className="mr-1" />{" "}
            <span className="font-semibold mr-1">{productsdata.reviews}</span>{" "}
            peoples are viewing this right now
          </p>
          <p>
            You are saving{" "}
            <span className="text-base font-semibold text-green-500">
              <FormattedPrice
                amount={
                  (productsdata?.regularPrice || 0) -
                  (productsdata?.discountedPrice || 0)
                }
              />
            </span>{" "}
            upon purchase
          </p>
          <p>
            Brand: <span className="font-medium">{productsdata.brand}</span>
          </p>
          <p>
            Category:{" "}
            <span className="font-medium">{productsdata.category}</span>
          </p>
          <AddtoCartbtn
            product={productsdata}
            title="Buy now"
            className="bg-gray-200 py-3 text-base text-black-100 hover:scale-100 hover:text-white duration-200"
          />
          <div className="bg-[#f7f7f7] p-5 rounded-md flex flex-col items-center justify-center gap-2">
            <p className="font-semibold">100% Satisfaction Guaranteed</p>
            <p className="font-semibold">Guaranteed safe & secure checkout</p>
          </div>
        </div>
      </div>
    </Container>
  );
}
