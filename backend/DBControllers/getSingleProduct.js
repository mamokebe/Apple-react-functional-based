const { mysqlConnection } = require("../config/db");

const getSingleProduct = (req, res) => {
  // console.log(req);
  let param = req.params.productID;
  mysqlConnection.query(
    `SELECT * FROM Products INNER JOIN ProductDescription INNER JOIN ProductPrice ON Products.product_id = ProductDescription.product_id AND Products.product_id = ProductPrice.product_id WHERE Products.product_id = ?`,
    [param],
    (err, rows) => {
      if (!err) res.json({ status: "OK", products: rows });
      else console.log(err);
    }
  );
};
module.exports = { getSingleProduct };
