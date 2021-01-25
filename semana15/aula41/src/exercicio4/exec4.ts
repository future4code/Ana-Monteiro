/*

Durante a aula de hoje, vimos que o processo para que os arquivos escritos em Typescript, com sua extensão `.ts` passam por um processo para que possam ser lidos e executados. Este processo é chamado de **transpilação**. Fazendo isso, o código será transformado em Javascript e assim poderá ser lido e interpretado.

Sabendo disso, vamos entender um pouco melhor o processo de **transpilação**.

Durante a aula, a biblioteca `typescript` foi instalada

```bash
npm install typescript -g ## -g ou --global para indicar indicação global
```

Com isso temos acesso ao comando `tsc` no terminal. O tsc é o comando responsável por fazer a transpilação dos arquivos.

Abaixo, há um exemplo de código escrito em Typescript. Crie um arquivo com este código chamado `exercicio-4.ts` e use comentários para responder as questões.

a) Como você faria, já com a extensão instalada, para gerar um arquivo javascript a partir do  arquivo typescript com o código abaixo?

// Executar comando tsc exec4.ts

*/

// b) E se este arquivo estivesse dentro de uma pasta chamada src. O processo seria diferente? Se sim, descreva as diferenças.

// Executar comando tsc src/exec4.ts, ou entrar na pasta src e executar o comando tsc exec4.ts

// c) Existe alguma maneira de transpilar múltilplos arquivos de uma vez só? Caso conheça, explique como fazer.

// Sim, dá para fazer : tsc arquivo1.ts arquivo2.ts arquivo3.ts

// d) Compare esse arquivo com o que criamos durante a aula (ele está disponível na área de configuração do projeto ali em cima). Leia as descrições sobre cada uma das propriedades. Alguma configuração que chamou sua atenção? O que mudou em comparação com o arquivo criado pelos slides?

// Tudo certo