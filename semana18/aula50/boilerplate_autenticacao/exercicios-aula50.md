# Exercício 1

Na autenticação de usuários o elemento mais fundamental talvez seja o id. É muito importante encontrar um que seja fácil de guardar e que garanta unicidade. Para isso usaremos a versão v4 do UUID, uma das mais recomendadas para isso. 

O uso dele é simples, veja abaixo:


a. Qual a sua opinião em relação a usar strings para representar os ids? Você concorda que seja melhor do que usar números?

Acredito que a string permita uma maior variedade de opções de id.


b. A partir de hoje vamos tentar isolar, ao máximo, as nossas lógicas dentro de funções. Isso vai deixar nosso código mais organizado e aumentar a facilidade da manutenção e refatoração. Dado isso, crie uma função para gerar um id. 

// Na pasta services, eu coloquei o arquivo o generateId.ts, depois eu importei no index.js colocar: import { generate } from "./services/generateId";

# Exercicio 2

Agora que já possuímos um id, podemos começar a modelagem do banco. O nosso usuário precisa ter um email e uma senha salva para que a gente consiga fazer a autenticação dele. 
Na hora de salvar essas informações na tabela, é interessante que façamos uma função específica para isso. Abaixo, há um exemplo:

``` typescript

const userTableName = "User";

const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
});

const createUser = async (id: string, email: string, password: string) => {
  await connection
    .insert({
      id,
      email,
      password,
    })
    .into(userTableName);
};

```

a. Explique o código acima com as suas palavras.

Primeiramente ele cria uma constante, para inserir o nome da tabela que é "User". Depois ele cria uma conexão do typescript com o mysql ( em que o knex permite que isso aconteça ). Depois criamos uma função para criar usuário e inserir na tabela "User".


b. Comece criando a tabela de usuários. Coloque a query que você utilizou no arquivo de respostas.

``` sql

create table newUser (
id VARCHAR(255) PRIMARY KEY,
email VARCHAR(100) UNIQUE,
password VARCHAR(100)
);

SELECT * FROM newUser;

```

c. Pela mesma justificativa do exercício anterior, crie uma função para ser responsável pela criação de usuários no banco.

// Feito na pasta data/createUser.ts

# Exercicio 3

Antes de poder fazer o endpoint de cadastro, precisamos de uma forma para gerar o token de autenticação do usuário. Para isso, vamos usar o JWT. Ele possui uma função que permite gerar o token do usuário, que recebe três informações:

- os dados que serão salvos no token (no nosso caso, o id);
- a chave secreta usada pra criptografar o token;
- algumas configurações, como o tempo de expiração

Abaixo, há uma função que faz isso, com o tempo de expiração de 1 minuto:

```

import * as jwt from "jsonwebtoken";

const expiresIn = "1min"

const generateToken = (id: string): string => {
  const token = jwt.sign(
    {
      id
    },
    process.env.JWT_KEY as string,
    {
      expiresIn
    }
  );
  return token;
}

```

a. O que a linha as string faz? Por que precisamos usar ela ali?

Define como string, não deixa voltar outro valor, somente string.


b. Agora, crie a função que gere o token. Além disso, crie um type  para representar o input dessa função.

// Feito na pasta authentication, como arquivo authenticathor.ts



