import Product from "./model/product.js";
import ProductRenderer from "./view/productRenderer.js";
import ListRenderer from "./view/listRenderer.js";
import { getProducts, getSomeProducts } from "./rest-api.js";

window.addEventListener("load", initApp);

// Globals
let products = [];
let productList;

async function initApp() {
  console.log("App is working");
  // await constructData();
  await getAnimalsPaginated(1, 10);
  initViews();
  initEventListeners();
}

async function getAnimalsPaginated(pageNum, pageSize) {
  const data = await getSomeProducts(pageNum, pageSize);
  for (const product of data) {
    products.push(
      new Product(product.id, product.name, product.unit_price, product.stock)
    );
  }
}

async function constructData() {
  const data = await getProducts();
  for (const product of data) {
    products.push(
      new Product(product.id, product.name, product.unit_price, product.stock)
    );
  }
}

function initViews() {
  productList = new ListRenderer(products, "#products tbody", ProductRenderer);
  productList.render();
}

function initEventListeners() {
  document.querySelectorAll("[data-action='sort']").forEach(button =>
    button.addEventListener("click", () => {
      // before sorting - remove .selected from previous selected header
      document
        .querySelector("[data-action=sort].selected")
        ?.classList.remove("selected");

      productList.sort(button.dataset.sortBy, button.dataset.sortDirection);

      // indicate selected sort header
      button.classList.add("selected");
      // indicate sort-direction on button
      button.dataset.sortDirection = productList.sortDir;
    })
  );
}
