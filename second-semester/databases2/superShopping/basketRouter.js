import express from "express";
import pool from "./dbPool.js";

const basketRouter = express.Router();

basketRouter.get("/", async (req, res) => {
  const connection = await pool.getConnection();
  const [products, meta] = await connection.execute(
    /*sql*/ `CALL GetProductPrices()`
  );
  res.json(products[0]);
});

// POST
basketRouter.post("/", async (req, res) => {
  const productId = req.body.productId;
  const customerId = req.body.customerId;
  const quantity = req.body.quantity;
  const basketData = [];
  if (req.body instanceof Array) {
    for (const item of req.body) {
      const data = await addToBasket(
        item.productId,
        item.customerId,
        item.quantity
      );
      basketData.push(data);
    }
  } else {
    const data = await addToBasket(productId, customerId, quantity);
    basketData.push(data);
  }
  res.json(basketData);
});

basketRouter.put("/:id", (req, res) => {
  //   console.log(req.body);
  console.log(req.body instanceof Array);

  res.send("OK");
});

async function addToBasket(productId, customerId, quantity) {
  const connection = await pool.getConnection();
  try {
    await connection.beginTransaction();

    // Get product price
    const [products, meta] = await connection.execute(
      /*sql*/ `
    SELECT * FROM products LEFT JOIN inventory on products.id = inventory.product_id WHERE product_id=?`,
      [productId]
    );
    const product = products[0];

    // Get basket
    const [basketGET, meta1] = await connection.execute(
      /*sql*/ `
    SELECT * FROM basket WHERE product_id=? AND customer_id=?`,
      [productId, customerId]
    );
    console.log(basketGET.length);

    if (basketGET.length > 0) {
      // Add to basket
      await connection.execute(
        /*sql*/
        `UPDATE basket SET quantity=?, product_total_price=? WHERE product_id=? AND customer_id=?`,
        [
          basketGET[0].quantity + quantity,
          (basketGET[0].quantity + quantity) * product.unit_price,
          productId,
          customerId,
        ]
      );
    } else {
      // Add to basket
      await connection.execute(
        /*sql*/
        `INSERT INTO basket (customer_id,product_id,quantity,product_total_price) VALUES (?,?,?,?)`,
        [customerId, productId, quantity, quantity * product.unit_price]
      );
    }

    const newInventory = product.stock - quantity;
    console.log(newInventory);

    // Deduct from inventory
    await connection.execute(
      /*sql*/
      `UPDATE inventory SET stock = ? WHERE product_id=?`,
      [newInventory, productId]
    );
    const [basket, meta2] = await connection.execute(
      /*sql*/
      `SELECT * FROM basket WHERE product_id=? AND customer_id=?`,
      [productId, customerId]
    );
    // Deduct inventory
    await connection.commit();
    connection.release();
    return basket;
  } catch (err) {
    await connection.rollback();
    connection.release();
  }
}

export { basketRouter };
