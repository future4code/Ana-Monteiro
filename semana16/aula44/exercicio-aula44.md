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


4)

a) SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000

Buscamos na nossa tabela, nomes que iniciem com a letra A ou J e salário maior que 300 mil
Se fosse "%A" buscaríamos a última letra com a letra A

b) SELECT * FROM Actor
WHERE (name NOT LIKE "A%") AND salary > 350000;

c) SELECT * FROM Actor
WHERE name LIKE "%G%" OR name LIKE "%g%";

d) SELECT * FROM Actor
WHERE (name like "%a%" or name LIKE "%A%" or name LIKE "%G%" or name LIKE "%g%")
AND salary BETWEEN 350000 AND 900000;

5) 

a)  CREATE TABLE Movie (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    synopsis TEXT NOT NULL,
    date_movie DATE NOT NULL,
		rating INT NOT NULL
);

b) INSERT INTO Movie (id, name, synopsis, date_movie, rating)
   VALUES (
   "001",
   "Se eu fosse você",
   "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles
   são atingidos por um fenômeno inexplicável e trocam de corpos",
   "2006/01/06",
   7
);

c) INSERT INTO Movie ( id, name, synopsis, date_movie, rating)
   VALUES (
   "002",
   "Doce de mãe",
   "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
   "2012/12/27",
   10
   );

d) INSERT INTO Movie ( id, name, synopsis, date_movie, rating)
   VALUES (
   "003",
   "Dona Flor e Seus Dois Maridos",
   "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
   "2017/11/02",
   8
);

e) INSERT INTO Movie (id, name, synopsis, date_movie, rating)
   VALUES (
   "004",
   "Tropa de Elite",
   "O capitão da força especial da Polícia Militar do Rio de Janeiro treina dois recrutas novatos para que possam sucedê-lo.",
   "2007/10/05",
   10
);

6)

a) SELECT name, id, rating from Movie WHERE id ="003";

b) SELECT name from Movie WHERE name = "Doce de Mãe";

c) SELECT name, id, synopsis from Movie WHERE rating >= 7;


