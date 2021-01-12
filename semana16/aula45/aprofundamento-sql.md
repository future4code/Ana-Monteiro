Exercício 1

a) ALTER TABLE Actor DROP COLUMN salary;

Alterar a tabela do ator, tirando a coluna de salário

b) ALTER TABLE Actor CHANGE gender sex VARCHAR(6);

Alterar tabela do ator, mudando a coluna de gender para sex

c) ALTER TABLE Actor CHANGE gender gender VARCHAR(255);

Mudar a configuração, de gender para gender VARCHAR(255);

d) ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

2)

a)  UPDATE Actor
    SET 
    name = "Dinho Mamonas",
    birth_date = "2000/10/01"
    WHERE id = "003";


b)  UPDATE Actor
    SET
    name = "JULIANA PÃES"
    WHERE name = "Juliana Paes";

    Retornando ao que era:

    UPDATE Actor
    SET
    name = "Juliana Paes"
    WHERE name = "JULIANA PÃES"


c)  UPDATE Actor 
    SET
    name = "Bananinha", 
    salary = 2000000,
    birth_date = "1996/10/03",
    gender = "male"
    WHERE
    id = "005";

d)  UPDATE Actor
    SET 
    hometown = "LALA"
    WHERE
    id = "002";

  Resposta: Código de erro: 1054. Coluna desconhecida 'cidade natal' em 'lista de campo'


3)

a) DELETE FROM Actor WHERE name = "Fernanda Montenegro";

b)  DELETE 
    FROM Actor
    WHERE
    gender = "male"
    AND
    salary < 1000000;

4)

a) SELECT MAX(salary) FROM Actor;

b) SELECT MIN(salary) FROM Actor WHERE gender = "female";

c) SELECT COUNT(*) FROM Actor WHERE gender = "female";

d) SELECT SUM(salary) FROM Actor;

