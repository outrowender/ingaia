# Teste backend Ingaia

Esse projeto segue o proposto para o [desafio backend](https://github.com/ingaia/backend-challenge) da Ingaia.

Seguindo o proposto para o desenvolvimento:
```
API1 - Retorna o valor fixo do metro quadrado

API2 - Recebe quantidade de metros quadrados e calcula o valor do imóvel
```
O projeto foi desenvolvido usando conceitos da Clean Architecture, Domain-Driven Design, Test-Driven Development e SOLID.

Tentei usar um pouco de cada tecnologia principal listada para a vaga, então usei `C#` na API1 `Node` na API2.
Usando docker e as pipelines do github, fiz o deploy das duas aplicações no heroku e o link para acesso é [esse](TODO.LINK).


Por ser uma prova de conceito, tentei não fazer *Overengineering* então deixei alguns comentários no código em forma de TODOs em pontos que podem ser melhorados para deixar o projeto mais próximo da vida real ou torná-lo mais escalável, mas nada que atrapalhe a proposta inicial.

### Sobre o projeto

Na API1 usei `.NET 5` e `inmemory database` para armazenar os dados junto da estrutura padrão .NET Web API de aplicações dotnet.

Na API2 usei `Node 16` com `Typescript` e uma estrutura baseada em casos de uso, para consumir dados da API1 e fazer o processamento.

No readme de cada projeto eu deixei listado os frameworks usados, um pouco mais da estrutura do projeto e como rodar cada um individualmente.

[README api1](./api1/readme.md)

[README api2](./api2/readme.md)

#### Espero que gostem!