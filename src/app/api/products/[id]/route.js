import { NextResponse } from "next/server";
import data from "@/app/api/index";

export function GET(request, { params }) {
  const productid = Number(params.id);
  console.log(productid);
  const allproductdata = data.products;
  const product = allproductdata.find((item) => item._id === productid);
  return NextResponse.json(product);
}
