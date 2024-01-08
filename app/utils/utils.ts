import axios from "axios";

const endpoint = "https://smart-arena-server.cyclic.app/";

export const fetchProducts = async () => {
  try {
    const productData = await axios.get(`${endpoint}product`);
    return productData;

  } catch (err) {
    console.log("Error occured while trying to fetch", err);
  }
};
