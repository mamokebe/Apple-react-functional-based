const { mysqlConnection } = require("../config/db");

// Create the tables
const createTables = (req, res) => {
  let message = "Tables Created";
  // products table
  let createProducts = `CREATE TABLE if not exists Products(
        product_id int auto_increment,
        product_url varchar(255) not null,
        product_name varchar(255) not null,
        PRIMARY KEY (product_id)
    ) ENGINE InnoDB`;
  // product description table
  let createProductDescription = `CREATE TABLE if not exists ProductDescription(
      description_id int auto_increment,
      product_id int(11) not null,
      product_brief_description varchar(255) not null,
      product_description varchar(255) not null,
      product_img varchar(255) not null,
      product_link varchar(255) not null,

      PRIMARY KEY (description_id),
      FOREIGN KEY (product_id) REFERENCES Products(product_id)
      
    )ENGINE InnoDB`;
  // product price table
  let createProductPrice = `CREATE TABLE if not exists ProductPrice(
      price_id int auto_increment,
      product_id int(11) not null,
      starting_price varchar(255) not null,
      price_range varchar(255) not null,

      PRIMARY KEY (price_id),
      FOREIGN KEY (product_id) REFERENCES Products(product_id)
    ) ENGINE InnoDB`;
  //user table
  let createUser = `CREATE TABLE Users(
        user_id INT AUTO_INCREMENT,
        user_name VARCHAR(255) NOT NULL,
        user_password VARCHAR(255) NOT NULL,
        PRIMARY KEY (user_id) 
    ) ENGINE InnoDB`;
  //Product order table
  let createOrders = `CREATE TABLE ProductOrder(
        order_id INT AUTO_INCREMENT,
        product_id INT NOT NULL,
        user_id INT NOT NULL,

        PRIMARY KEY (order_id),
        FOREIGN KEY (product_id ) REFERENCES Products(product_id),
        FOREIGN KEY (user_id) REFERENCES  Users(user_id) 
        
    ) ENGINE InnoDB`;

  //Query
  mysqlConnection.query(createProducts, (err) => {
    if (err) console.log(err);
  });
  mysqlConnection.query(createProductDescription, (err) => {
    if (err) console.log(err);
  });
  mysqlConnection.query(createProductPrice, (err, results) => {
    if (err) console.log(err);
  });
  mysqlConnection.query(createUser, (err, results) => {
    if (err) console.log(err);
  });
  mysqlConnection.query(createOrders, (err, results) => {
    if (err) console.log(err);
  });
  console.log(message);
  res.end(message);
};

module.exports = { createTables };
