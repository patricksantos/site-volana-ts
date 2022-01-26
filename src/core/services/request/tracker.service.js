import api from "./api";
import axios from "axios";

const coin_converter = axios.create({
  baseURL: "https://api.coingecko.com/api/v3/coins",
});

export default {
  get: () => {
    return api.get("/tracker/adm");
  },
  slpPrice: () => {
    return coin_converter.get("/smooth-love-potion");
  },
  axsPrice: () => {
    return coin_converter.get("/axie-infinity");
  },
  wethPrice: () => {
    return coin_converter.get("/weth");
  },
};
