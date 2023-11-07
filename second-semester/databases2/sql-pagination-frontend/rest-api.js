const endpoint = "http://localhost:3000/api";

async function getProducts() {
  const res = await fetch(`${endpoint}/products`);
  const data = await res.json();
  return data;
}

export { getProducts };
