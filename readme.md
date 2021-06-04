# Teste backend Ingaia

Esse projeto segue o proposto para o [desafio backend](https://github.com/ingaia/backend-challenge) da Ingaia.

Seguindo o proposto para o desenvolvimento:
```
API1 - Retorna o valor fixo do metro quadrado

API2 - Recebe quantidade de metros quadrados e calcula o valor do imóvel
```
Tentei usar um pouco de cada tecnologia principal listada para a vaga, então usei `C#` na API1 `Node` na API2.
Usando as pipelines do github, fiz o deploy das duas aplicações no heroku e o link para acesso é [esse](https://localhost).

Como é um projeto 'simples', tentei não fazer *Overengineering*, então deixei alguns comentários no código em alguns pontos que podem ser melhorados para deixar o projeto mais próximo da vida real ou torná-lo mais escalável, mas nada que atrapalhe a proposta inicial.

Na API1 usei .NET 5, `in memory database` para armazenar os dados e a estrutura padrão .NET Web API de aplicações dotnet.

Na API2 usei Node 16 com `Typescript` e uma estrutura baseada em casos de uso, para consumir dados da API1 e fazer o processamento.

No readme de cada projeto eu deixei listado os frameworks usados, um pouco mais da estrutura do projeto e como rodar cada um individualmente.