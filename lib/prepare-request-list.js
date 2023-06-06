import normalizeUrl from "./normalize-url.js";

const urlToRequest = (url) => ({
  url: url,
  userData: { origionalUrl: url },
  uniqueKey: url,
});

const prepareRequestListFromText = (text) => text.split("\n").map(urlToRequest);

export default prepareRequestListFromText;
