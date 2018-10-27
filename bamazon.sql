DROP DATABASE IF EXISTS bamazon_db;

-- Create a MySQL Database called `bamazon`.
CREATE DATABASE bamazon_db;
USE bamazon_db;

-- Then create a Table inside of that database called `products`.
CREATE TABLE products (
    item_id INT auto_increment NOT NULL,
    product_name VARCHAR(200) NOT NULL,
    department_name VARCHAR(200) NOT NULL,
    price DECIMAL(100, 2) NOT NULL,
    stock_quantity INT NOT NULL,
    PRIMARY KEY ('item_id')
);

INSERT INTO products 
(item_id, product_name, department_name, price, stock_quantity)
VALUES
(1, "blue pen", "pen department", 67.00, 500),

(2, "red pen", "pen department", 43.00, 500),

(3, "green pen", "pen department", 31.00, 500),

(4, "purple pen", "pen department", 51.00, 500),

(5, "orange pen", "pen department", 12.00, 500),

(6, "yellow pen", "pen department", 3.00, 500),

(7, "teal pen", "pen department", 86.00, 500),

(8, "clear pen", "pen department", 374.00, 500),

(9, "broken pen", "pen department", 76.00, 500),

(10, "magic marker", "true pen enthusiast department", 900.00, 2);
