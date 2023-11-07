export default class Product {
  constructor(id, name, unit_price, stock) {
    Object.defineProperty(this, "id", {
      value: id,
      writable: false,
      enumerable: true,
    });
    this.name = name;
    this.price = unit_price;
    this.stock = stock;
  }
}
