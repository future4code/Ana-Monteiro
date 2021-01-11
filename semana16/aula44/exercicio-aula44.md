Exercício 1

CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
		gender VARCHAR(6) NOT NULL
);

a) CREATE TABLE para criar tabela. VARCHAR recebe uma string com uma quantidade limite (255) de 255 caracteres.
O FLOAT recebe um número decimal, exemplo 3,25. DATE recebe uma data com padrão com yyyy/mm/dd. Primary key é um identificador único

b) SHOW DATABASES: Mostra o banco de dados 
   SHOW TABLES: mostra as tabelas do banco de dados

c)