# API1

Seguindo a proposta
```
API1 - Retorna o valor fixo do metro quadrado
```
Essa api salva um valor numérico no banco e pode ser consumida via HTTP.

Esse valor uma vez definido na inicialização da aplicação não pode ser alterado via HTTP. Ela é `somente leitura`.

## A solução
A solução é composta por dois projetos, onde `metric-api` é o código base da aplicação e `metric-api.tests` são os testes automatizados do projeto.

Dentro de cada projeto existem outros arquivos para explicar melhor como cada um funciona.

[readme metric-api](./api/readme.md)

[readme metric-api.tests](./tests/readme.md)

|Bibliotecas utilizadas nos projetos|
| ------ |
|.NET 5 |
|EF InMemory para armazenamento de dados|
|XUNIT para testes|
|Swashbuckle para geração da documentação do swagger|

#

## Compile você mesmo:

É necessário o [.NET 5 SDK configurado](https://docs.microsoft.com/en-us/dotnet/core/install/linux) no ambiente.

- Configure o valor do metro quadrado no arquivo [Startup.cs](./api/Startup.cs) no método `GetSquareMeterValue`.

```cs
private float GetSquareMeterValue() => 10; //<- seu valor vai aqui
```

- Na raiz do projeto:

```console
$ dotnet build . && dotnet run --project api/metric-api.csproj
```
Vá para [http://localhost:5000/api/square-meter](http://localhost:5000/api/square-meter) para buscar o valor.

## Teste você mesmo:

- Na raiz do projeto:
```console
$ dotnet build . && dotnet test
```

Você deve ver o resultado dos testes no seu console.

