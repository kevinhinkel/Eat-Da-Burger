CREATE DATABASE IF NOT EXISTS burgers_db;
USE burgers_db;

CREATE TABLE burgers (
    id int NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(255) NOT NULL,
    devoured BOOL DEFAULT false,
    PRIMARY KEY (id)
);

USE burgers_db;

INSERT INTO burgers (burger_name, devoured) VALUES ('Bacon Burger', true);
INSERT INTO burgers (burger_name, devoured) VALUES ('Cheese Burger', false);
INSERT INTO burgers (burger_name, devoured) VALUES ('Hamburger', false);
