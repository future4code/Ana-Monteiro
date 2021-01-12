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


Exercício 2

a) INSERT INTO (id, salary, birth_date, gender)
   VALUES (
      "002",
      "Glória Pires",
      "1963-08-23",
      "female"
   );


b) Aparece a resposta "Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'" : Erro de código 1062, entrada duplicada de 002 para a chave "Primary"
 
c) Código de erro: 1136. Quantidade de valores das colunas não corresponde a quantidade de parâmetros na linha 1.

   INSERT INTO Actor ( id, name, salary, birth_date, gender)
   VALUES (
   "003",
   "Fernanda Montenegro",
   300000,
   "1929-10-19",
   "female"
   );

d) Código de erro: 1364. O 'nome' de campo não tem um valor padrão. O name é not null, ou seja ele não pode ser nulo, logo tem que ser especificado.

   INSERT INTO Actor (id, name, salary, birth_date, gender)
   VALUES (
      "004",
      "George Clooney",
      400000,
      "1949-04-18",
      "male"
   );

e) Código de Erro: 1292. Valor da data incorreta: '1950' para coluna 'birth_date' na linha 1. Faltou colocar o birth_date como string, porque antes não estava definida como string

   INSERT INTO Actor ( id, name, salary, birth_date, gender)
   VALUES(
   "005",
   "Juliana Paes",
   719333.33,
   "1979-03-26",
   "female"
   );

f)

   INSERT INTO Actor (id, name, salary, birth_date, gender)
   VALUES(
   "007",
   "Will Smith",
   500000000000,
   "1520-04-25",
   "male"
   );

   INSERT INTO Actor (id, name, salary, birth_date, gender)
   VALUES(
   "008",
   "Angelina Jolie",
   20000000,
   "2000-05-10",
   "female"
   );


3)

a) SELECT id, name, salary, birth_date from Actor WHERE gender = "female";

b) SELECT salary from Actor WHERE name = "Angelina Jolie";

c) SELECT id, name, salary, birth_date from Actor WHERE gender = "invalid"; Ele não retorna nenhuma informação pois não tem gender inválido cadastrado

d) SELECT id, name, salary from Actor WHERE salary <= 500000

e) Código de erro: 1054. Coluna desconhecida 'nome' em 'lista de campo'. Não é nome, e sim name no código, por isso estava errado.

   SELECT id, name from Actor WHERE id = "002";


