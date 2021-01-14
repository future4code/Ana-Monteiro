# Banco de dados SQl com Typescript

# Exercício 1

a)Uma chave estrangeira é um elo de ligação entre uma tabela e outra, é ela que referencia a qual dado está conectada.

b) Query para criar tabela "Rating"

```
SELECT * FROM Rating;
CREATE TABLE Rating (
		id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
		rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
);

```

Query para inserir dados na tabela

```

INSERT
INTO Rating
VALUES 
('1', 'filme ótimo, COLINHO DE MÃE', 7, '002'),
('2', 'filme ótimo OKAY', 7, '003'),
('3', 'filme ótimo FACA NA CAVEIRA', 7.5, '004');

```

c) Não foi possível o acesso pois a chave é inválida

Código de erro: 1452. Não é possível adicionar ou atualizar uma linha filha: uma restrição de chave estrangeira falha (`dumont-ana-monteiro``Rating`, CONSTRAINT` Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERÊNCIAS` Movie` (`id` ))

d) Delete coluna rating de avaliação da tabela

```

ALTER TABLE Movie
 DROP COLUMN rating;

```

e)

Código de erro: 1451. Não é possível excluir ou atualizar uma linha pai: uma restrição de chave estrangeira falha (`dumont-ana-monteiro``Rating`, CONSTRAINT` Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERÊNCIAS` Movie` (`id` ))


# Exercicio 2

a) Referência entre atores e filmes, em que um filme referencia a vários atores e um ator pode referenciar a vários filmes, uma referência N:M.



b) 

Fazer 6 relações

```

INSERT
INTO MovieCast
VALUES 
('004', '003'),
('004','007'),
('004','002'),
('002','008'),
('002','003'),
('002','007');


```

c) Erro ao criar uma relação com um filme e um ator com id inexistente.

Código de erro: 1452. Não é possível adicionar ou atualizar uma linha filha: uma restrição de chave estrangeira falha (`dumont-ana-monteiro``MovieCast`, CONSTRAINT` MovieCast_ibfk_1` FOREIGN KEY (`movie_id`) REFERÊNCIAS` Movie` (`id` ))

d) Não é possível deletar um dado que está já referenciado na outra tabela

Código de erro: 1451. Não é possível excluir ou atualizar uma linha pai: uma restrição de chave estrangeira falha (`dumont-ana-monteiro``MovieCast`, CONSTRAINT` MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERÊNCIAS` Ator` (`id` ))


# Exercício 3

a) Com o comando juntamos as informações das duas tabelas. Em que o comparador ON é que faz o comparativo entre as ids criadas.

```
SELECT * FROM Movie 
INNER JOIN Rating ON Movie.id = Rating.movie_id;

```

b)

```

SELECT Movie.id, Movie.name, Rating.rate FROM Movie
INNER JOIN Rating ON Movie.id = Rating.movie_id
WHERE Rating.rate IS NOT NULL;


```
