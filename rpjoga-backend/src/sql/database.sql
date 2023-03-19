DROP DATABASE rpgjoga_pool;

CREATE DATABASE rpgjoga_pool;

USE rpgjoga_pool;

CREATE TABLE user
(
    id BINARY(16) NOT NULL,
    fullname VARCHAR(256) NOT NULL,
    email VARCHAR(256) NOT NULL UNIQUE,
    username VARCHAR(256) NOT NULL UNIQUE,
    password VARCHAR(64) NOT NULL,
    birth_date DATE NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE rpg
(
    id BINARY(16) NOT NULL,
    title VARCHAR(256) NOT NULL,
    description VARCHAR(6000) NOT NULL,
    theme_list VARCHAR(1000) NOT NULL,
    image_url VARCHAR(6000),
    user_id BINARY(16) NOT NULL,
    creation_date DATE NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(user_id)
        REFERENCES user(id)
);