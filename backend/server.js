const express = require("express");
var cors = require("cors");
const body_parser = require("body-parser");
require("dotenv").config();

const { connectDB } = require("./config/db");
const { getProducts } = require("./DBControllers/getProduct");
const { createTables } = require("./DBControllers/createTable");
const { addProducts } = require("./DBControllers/addProduct");
const { getSingleProduct } = require("./DBControllers/getSingleProduct");

const app = express();
// Middle ware to have access to the frontend
//cors for global
app.use(cors());
//use this cors option for partners (if not global)
// const corsOption = {
//   origin: [
//     "http://localhost:3300",
//     "https://www.evangadi.com",
//     "https://www.apple.com",
//   ],
// };
// app.use(cors(corsOption));

//middleware to captures all the information entered in an HTML form and parses them in an object form.
app.use(body_parser.urlencoded({ extended: true }));

//database connection
connectDB;

//*Routes (endpoints)
//default
app.get("/", (req, res) => {
  res.send("Connection is up on running");
});
//  Create  tables route
app.get("/tables", createTables);
// Insert a new iPhone route
app.post("/add-product", addProducts);
//Get all products route
app.get("/get-product", getProducts);
app.get(`/get-product/:productID`, getSingleProduct);

const port = process.env.PORT;
app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`server is  running on http://localhost:${port}`);
  }
});
