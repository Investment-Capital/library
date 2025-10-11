import constructUrl from "./constructUrl";

const fetchUrl = async <T = any>(
  path: string,
  requestData?: RequestInit
): Promise<T> => {
  const data = await fetch(constructUrl("http", path), {
    ...requestData,
    headers: {
      ...requestData?.headers,
      "content-type": "application/json",
    },
  });
  const json = await data.json();

  if ("error" in json) throw new Error(`[${data.status}] ${json.error}`);

  return json;
};

export default fetchUrl;
