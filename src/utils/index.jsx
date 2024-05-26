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

export const generateAmountOptions = (number) => {
  return Array.from({ length: number }, (_, index) => {
    const amount = index + 1;
    return (
      <option key={amount} value={amount}>
        {amount}
      </option>
    );
  });
};
