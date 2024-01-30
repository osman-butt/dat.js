import express from "express";
import connection from "./dbPool.js";

const productRouter = express.Router();

// productRouter.get("/", async (req, res) => {
//   const connection = await pool.getConnection();
//   const page = req.query.page || 1;
//   const limit = req.query.limit || 10;
//   console.log(limit * (page - 1));
//   const [products, meta] = await connection.execute(
//     /*sql*/ `
//     SELECT id,name,unit_price,stock FROM products
//     LEFT JOIN inventory on products.id = inventory.product_id ORDER BY name,id LIMIT ? OFFSET ?`,
//     [limit + "", limit * (page - 1) + ""]
//   );
//   const [pages, meta1] = await connection.execute(/*sql*/ `
//     SELECT COUNT(*) as pages FROM products`);
//   connection.release();
//   res.json(
//     products
//   );
// });

productRouter.get("/", async (req, res) => {
  const pageNum = Number(req.query.pageNum);
  const pageSize = Number(req.query.pageSize) || 5;
  const offset = (pageNum - 1) * pageSize;

  if (isNaN(pageNum)) {
    const [products, meta] = await connection.query(/*sql*/ `
    SELECT id,name,unit_price,stock FROM products
    LEFT JOIN inventory on products.id = inventory.product_id`);
    res.json(products);
  } else {
    const [products, meta] = await connection.query(
      /*sql*/ `
    SELECT id,name,unit_price,stock FROM products
    LEFT JOIN inventory on products.id = inventory.product_id LIMIT ? OFFSET ?`,
      [pageSize, offset]
    );
    res.json(products);
  }
});

export { productRouter };
