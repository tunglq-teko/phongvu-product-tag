import { tekshop_sku } from './apis';

const test_sku = ['1705024', '1705088', '1805026', '1805027'];

const breaklines = /\n|<br>|<br\/>/;

const filterProduct = (product) => {
  const result = {};
  result.name = product.name;
  result.sku = product.sku;
  result.warranty = product.attributes.warranty;
  result.price = Number(product.price);
  result.finalPrice = product.final_price;
  result.key = product.sku;
  result.descriptions = product.description.split(breaklines).map(line => line.trim());
  return result;
}

export const fetchProducts = async (skus) => {
  skus = test_sku;
  const url = tekshop_sku + skus.join(",");
  const response = await fetch(url);
  const data = await response.json();
  const products = data.data.map(product => filterProduct(product));
  return products;
}
