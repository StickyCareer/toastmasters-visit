import { GenerateURLParams } from "@/utils/url-helper";

const route = "/api/locations";

export async function findLocations(params: { [key: string]: string }) {
  const headers: HeadersInit = new Headers();
  const response = await fetch(`${route}?${GenerateURLParams(params)}`, {
    method: "GET",
    headers,
  });

  return response.json();
}