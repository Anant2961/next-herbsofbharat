import { NextResponse } from "next/server";
import data from "@/app/api/index";

export function GET(request, { params }) {
  const CurrentCategory = params.id;
  const allproductsData = data.products;
  const currentprod = allproductsData.find(
    (item) => item._base === CurrentCategory,
  );
  return NextResponse.json(currentprod);
}
