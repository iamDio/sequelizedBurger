CREATE DATABASE burgers_db;
USE burgers_db;
CREATE TABLE burgers
	 (id INT AUTO INCREMENT NOT_NULL,
	  burger_name VARCHAR(20),
	  devoured BOOLEAN, 
	  date TIMESTAMP
	  PRIMARY KEY (id)
);
	 