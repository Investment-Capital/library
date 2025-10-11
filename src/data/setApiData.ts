import apiData from "./apiData";

const setApiData = (data: typeof apiData) => {
  apiData.baseUrl = data.baseUrl;
  apiData.secure = data.secure;
};

export default setApiData;
