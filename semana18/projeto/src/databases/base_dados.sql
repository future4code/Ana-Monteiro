create database projeto_final;


use projeto_final;

create table user(
    id bigint not null primary key auto_increment,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL 
) engine = innoDB auto_increment = 1;

