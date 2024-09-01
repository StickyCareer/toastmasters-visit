import { connectToMongoDB } from "@/lib/database";
import Location from "@/models/location.model";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function GET(request: NextApiRequest) {
  connectToMongoDB();
  const {searchParams} = new URL(request.url || "");
  const offset = searchParams.get("offset") || 0;
  const limit = searchParams.get("limit") || 10;
  console.log(offset)
  try {
    const locations = await Location.find().skip(+offset).limit(+limit);
    return NextResponse.json({ status: "OK", data: locations });
  } catch (error) {
    return NextResponse.json({ status: "ERROR" }, { status: 500 });
  }
}