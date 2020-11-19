CREATE DATABASE firstapi;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    email TEXT
);

INSERT INTO users(name, email) VALUES
    ('Dani', 'dani@gmail.com'),
    ('Ruth', 'ruth@gmail.com');