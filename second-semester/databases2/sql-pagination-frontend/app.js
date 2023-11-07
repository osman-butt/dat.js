import Product from "./model/product.js";
import ProductRenderer from "./view/productRenderer.js";
import ListRenderer from "./view/listRenderer.js";
import { getProducts } from "./rest-api.js";

window.addEventListener("load", initApp);

// Globals
let products = [];
let productList;

async function initApp() {
  console.log("App is working");
  await constructData();
  console.log(products.length);
  initViews();
  initEventListeners();
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
