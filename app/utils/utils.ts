import axios from "axios";

const endpoint = "https://smart-arena.cyclic.ap/";

export const fetchProducts = async () => {
  try {
    const productData = await axios.get(`${endpoint}product`);
    return productData;
  } catch (err) {
    console.log("Error occured while trying to fetch", err);
  }
};

export const fetchServices = async () => {
  try {
    const servicesData = await axios.get(`${endpoint}services`);
    return servicesData;
  } catch (err) {
    console.log("Error occured while trying to fetch", err);
  }
};

export const randomProducts = async () => {
  try {
    const {data : randomProductData} = await axios.get(`${endpoint}product/random`);
    return randomProductData;
  } catch (err) {
    console.log("Error occured while trying to fetch", err);
  }
};
