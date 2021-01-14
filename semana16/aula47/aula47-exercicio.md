# Banco de dados SQl com Typescript

Exercício 1

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

