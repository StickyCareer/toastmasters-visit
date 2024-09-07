export function GenerateURLParams(params: { [key: string]: string }) {
  return Object.keys(params).map((key) => `${key}=${params[key]}`).join("&");
}