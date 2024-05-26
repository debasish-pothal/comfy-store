import axios from "axios";

const productionUrl = "https://strapi-store-server.onrender.com/api";

export const customFetch = axios.create({
  baseURL: productionUrl,
});

// export const formatPrice = (price) => {
//   const dollarsAmount = new Intl.NumberFormat("en-US", {
//     style: "currency",
//     currency: "USD",
//   }).format((price / 100).toFixed(2));
//   return dollarsAmount;
// };

export const formatPrice = (price) => {
  const exchangeRate = 80; // USD to INR exchange rate
  const rupeesAmount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format((price / 100) * exchangeRate);
  return rupeesAmount;
};
