CREATE DATABASE burgers_db;

USE burgers_db; 

CREATE TABLE burgers (
  item_id INT AUTO_INCREMENT NOT NULL,
  burger_name VARCHAR(100) NOT NULL,
  devoured BOOLEAN, 
  PRIMARY KEY (item_id)
);