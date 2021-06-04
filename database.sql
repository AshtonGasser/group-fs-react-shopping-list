-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data

-- DB name is: fs-react-shopping

CREATE TABLE shopping_cart (
    "id" serial PRIMARY KEY,
    "name" varchar(80) NOT NULL,
    "quantity" integer,
    "unit" varchar(20) ,
    "purchased" BOOLEAN DEFAULT FALSE
);

-- Sample Data

INSERT INTO shopping_cart ("name", "quantity", "unit")
VALUES ('Milk', 2, 'gallons'),
('Potato Salad', 16, 'ounces'),
('Hotdogs', 2, 'packs'),
('Hotdog Buns', 2, 'bags');

-- DISPLAY Alphabetically 

Select * FROM shopping_cart
ORDER BY "name" ASC;