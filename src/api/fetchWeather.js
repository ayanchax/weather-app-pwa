import axios from "axios";

const APP_ID = "c6c8fdaa082f1747f3444bd1c13a8e7f";
const API_URL = "http://api.openweathermap.org/data/2.5/weather";

export const fetchWeather = async (query) => {
  const { data } = await axios.get(API_URL, {
    params: {
      q: query,
      units: "metric",
      APPID: APP_ID,
    },
  });
  return data;
};
