export function formatMapboxAddress(feature: any) {
  const location = {
    name: feature.properties.address,
    address: feature.place_name,
    coordinates: feature.center,
    postcode: "-",
    place: "-",
    country: "-",
  };
  feature.context.forEach((context: any) => {
    if (context.id.includes("postcode")) {
      location.postcode = context.text;
    }
    if (context.id.includes("place")) {
      location.place = context.text;
    }
    if (context.id.includes("country")) {
      location.country = context.text;
    }
  });
  return location;
}