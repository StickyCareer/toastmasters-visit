import Location from "@/models/location.model";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const locations = await Location.find();
    return NextResponse.json({ status: "OK", data: locations });
  } catch (error) {
    return NextResponse.json({ status: "ERROR" }, { status: 500 });
  }
}