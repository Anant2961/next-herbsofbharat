import { NextResponse } from "next/server";
import data from "@/app/api/index";

export function GET(request) {
  const productdata = data.products;
  return NextResponse.json(productdata);
}
