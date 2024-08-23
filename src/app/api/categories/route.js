import { NextResponse } from "next/server";
import data from "@/app/api/index";

export function GET(request) {
  return NextResponse.json(data.categories);
}
