import NodeCache from "node-cache";
import { formatMapboxAddress } from "@/utils/location-helper";
import { NextRequest, NextResponse } from "next/server";
import fetch from "node-fetch";

// Initialize node-cache with a standard TTL (e.g., 1 hour)
const cache = new NodeCache({ stdTTL: 3600 });

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url || "");
  const q = searchParams.get("q") || "";

  if (!q) {
    return NextResponse.json({ status: "ERROR", message: "Query parameter 'q' is required" }, { status: 400 });
  }

  // Check if the data is already cached
  const cachedData = cache.get(q);
  if (cachedData) {
    return NextResponse.json({ status: "OK", data: cachedData });
  }

  const mapboxEndpoint = process.env.NEXT_PUBLIC_MAPBOX_ENDPOINT;
  const mapboxToken = process.env.MAPBOX_TOKEN;
  const encodedQuery = encodeURIComponent(q);
  const mapboxUrl = `${mapboxEndpoint}/${encodedQuery}.json?access_token=${mapboxToken}&country=my`;

  try {
    const mapboxResponse = await fetch(mapboxUrl);
    
    if (!mapboxResponse.ok) {
      return NextResponse.json({ status: "ERROR", message: "Failed to fetch data from Mapbox" }, { status: mapboxResponse.status });
    }

    const data: any = await mapboxResponse.json();
    const locations = data.features.map((feature: any) => formatMapboxAddress(feature));

    // Cache the formatted locations using the query as the key
    cache.set(q, locations);

    return NextResponse.json({ status: "OK", data: locations });
  } catch (error: any) {
    return NextResponse.json({ status: "ERROR", message: "An error occurred", error: error.message }, { status: 500 });
  }
}
