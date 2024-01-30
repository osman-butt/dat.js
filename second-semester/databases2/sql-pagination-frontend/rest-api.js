const endpoint = "http://localhost:3000/api";

async function getProducts() {
  const res = await fetch(`${endpoint}/products`);
  const data = await res.json();
  return data;
}

async function getSomeProducts(pageNum, pageSize) {
  const res = await fetch(
    `${endpoint}/products?pageNum=${pageNum}&pageSize=${pageSize}`
  );
  const data = await res.json();
  return data;
}

export { getProducts, getSomeProducts };
