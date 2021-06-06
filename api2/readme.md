# API2

Seguindo a proposta
```
API2 - Recebe quantidade de metros quadrados e calcula o valor do imóvel
```
[Link do Swagger desse projeto](https://outrowender-ingaia-api2.herokuapp.com/swagger/)

Essa api consome o valor da API1 e calcula o valor total do imóvel.

## O projeto

A solução é composta por um projeto `Node` usando `Typescript` e `express` como base. Os testes estão embutidos no projeto em pastas `spec` ou em arquivos com o final `.spec.ts`

|Bibliotecas utilizadas no projeto|
| ------ |
| Typescript |
| ts-node-dev para melhorar a experiência com TS |
| Jest para testes |
| Axios para requests HTTP |

#

## A arquitetura do código

- `entities` concentra a parte principal da regra de negócios. Inclui validações, factories e erros customizados relevantes para o domínio. O cálculo do valor da casa é feito aqui.

- `repositories` fica a parte de provedor de dados da aplicação, dependendo de uma abstração padrão para funcionar. Isso torna os repositórios modulares.

- `useCases` como o nome diz faz uso das entidades para um case relevante para a aplicação. Aqui são reunídos os controllers e todo código relevante para que aquele caso de uso seja executado.

- `shared` é o código que pode ser compartilhado com o restante da aplicação. Pode incluir transformações, adaptadores e classes auxiliares.

- `routes.ts` é onde as rotas dos controllers são registrados.

- `server.ts` é o ponto de entrada da aplicação, que carrega as configurações do express e registra as rotas utilizadas na aplicação.

No [package.json](./package.json) foram configurados alguns scripts para facilitar o build e deploy:

- `npm dev` transpila o Typescript, ativa um ¨hot restart¨ para subir alterações nos arquivos e sobe o projeto.
- `npm test` roda o Jest e executa os testes da aplicação.
- `npm build` transpila o código em Javascript no modo Prod e sobe o conteúdo para a pasta `dist`.
- `npm start` roda o projeto transpilado em modo de produção.
