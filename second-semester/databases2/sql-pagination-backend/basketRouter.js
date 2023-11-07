import express from "express";
import pool from "./dbPool.js";

const productRouter = express.Router();

productRouter.get("/", async (req, res) => {
  const connection = await pool.getConnection();
  const [products, meta] = await connection.execute(
    /*sql*/ `CALL GetProductPrices()`
  );
  res.json(products[0]);
});

export { productRouter };
