export default defineEventHandler(async (event) => {
  const query = getQuery<{ country: string }>(event);

  // return if no country is present
  if (!query.country) {
    return Error("no country url");
  }

  /**
   * country codes
   * us - US
   * gb - UK
   * fr - France
   * au - Australia
   * in - India
   */
  const validCountries = ["us", "gb", "fr", "au", "in"];

  // return if a valid country code is not selected
  // this should also prevent other sneaky stuff going on
  if (!validCountries.includes(query.country)) {
    return Error("country code is not valid");
  }

  const data = await fetch(
    `https://newsapi.org/v2/top-headlines?country=${query.country}&pageSize=5&apiKey=${process.env.NUXT_API_TOKEN}`
  );

  return data.json();
});
