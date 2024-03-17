export default defineEventHandler(async (event) => {
  try {
    const query = getQuery<{ country: string }>(event);

    // return if no country is present
    if (!query.country) {
      return {
        success: false,
        message: "A country code has not been provided.",
      };
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
      return {
        success: false,
        message: "The country code provided is not valid.",
      };
    }

    const data = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${query.country}&pageSize=5&apiKey=${process.env.NUXT_API_TOKEN}`
    );

    const dataJson = await data.json();

    if (dataJson.status === "error") {
      return { success: false, message: dataJson.message };
    }

    return { success: true, data: dataJson };
  } catch (e) {
    return {
      success: false,
      message: "Something has gone horribly wrong, I'm sorry!",
    };
  }
});
