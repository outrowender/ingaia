# Teste backend Ingaia

Esse projeto segue o proposto para o [desafio backend](https://github.com/ingaia/backend-challenge) da Ingaia.

- Link da api 1 
[https://outrowender-ingaia-api1.herokuapp.com](https://outrowender-ingaia-api1.herokuapp.com/swagger)

- Link da api 2 [https://outrowender-ingaia-api2.herokuapp.com](https://outrowender-ingaia-api2.herokuapp.com/swagger)

<p><img src="https://github.com/outrowender/ingaia/workflows/Build,%20test%20and%20deploy%20to%20Heroku/badge.svg"></p>

Seguindo o proposto para o desenvolvimento:
```
API1 - Retorna o valor fixo do metro quadrado

API2 - Recebe quantidade de metros quadrados e calcula o valor do imóvel

```

O projeto foi desenvolvido usando conceitos da Clean Architecture, Domain-Driven Design, Test-Driven Development e SOLID.

Tentei usar um pouco de cada tecnologia principal listada para a vaga, então usei `C#` na API1 `Node` na API2.
Usei as pipelines do github para subir os containers criados no docker, fazer o build de cada projeto, rodar os testes e depois o deploy no heroku.

O pipeline roda sempre que for feito um commit da branch main, e executa os testes antes do deploy e se algum teste falhar, o deploy é interrompido e um email enviado para o responsável pelo projeto.

Por ser uma prova de conceito, tentei não fazer *Overengineering* então deixei alguns comentários no código em forma de `TODOs` em pontos que podem ser melhorados para deixar o projeto mais próximo da vida real ou torná-lo mais escalável, mas nada que atrapalhe a proposta inicial.

### Sobre o projeto

Na API1 usei `.NET 5` e `inmemory database` para armazenar os dados junto da estrutura padrão .NET Web API de aplicações dotnet.

Na API2 usei `Node` com `Typescript` e uma estrutura baseada em casos de uso, para consumir dados da API1 e fazer o processamento.

## Executar usando docker

Para rodar o ambiente do projeto usando do docker, existem configurações disponíveis no `docker-compose.yaml`.

Na pasta raiz do projeto execute o comando para subir o container.
```
docker-compose up
```

No readme de cada projeto eu deixei o link da documentação no swagger, a lista de frameworks usados, como fazer o build e rodar os testes e um pouco mais da estrutura de cada um.

[README api1](./api1/readme.md)

[README api2](./api2/readme.md)

#### Espero que gostem!
