import normalizeUrl from "./normalize-url.js";

const urlToRequest = (url) => ({
  url: url,
  userData: { originalUrl: url },
  uniqueKey: url,
});

const prepareRequestListFromText = (text) => text.split("\n").map(urlToRequest);

export default prepareRequestListFromText;
