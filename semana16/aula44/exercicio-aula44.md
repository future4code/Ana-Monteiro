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

b) SHOW DATABASES: Mostra o banco de dados: No caso mostra uma coluna chamada Database, em que a primeira database, na primeira linha e coluna: dumont-ana-monteiro. Na segunda linha information_schema

SHOW TABLES: mostra as tabelas do banco de dados : Na coluna retornada está Tables_in_dumont-ana-monteiro em que abaixo dela está Actor

c) DESCRIBE Actor; -> essa estrutura descrebe a estrutura da tabela, no caso, ele aparece o id, name, salary, birth_date e gender na
primeira coluna. Na segunda aparece o tipo de cada uma delas, em que o id é varchar, o name, varchar, salary tipo float, birth_date tipo date, gender tipo varchar. A terceita coluna tipo null, a quarta é o key, a chave que no caso só o id tem chave. E a outra coluna 
é o default.

