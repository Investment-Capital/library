import apiData from "./data/apiData";

const constructUrl = (protocol: string, path: string) =>
  `${protocol}${apiData.secure ? "s" : ""}://${apiData.baseUrl}/${path}`;

export default constructUrl;
