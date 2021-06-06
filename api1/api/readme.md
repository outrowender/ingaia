# metric_api

Esse projeto utiliza a estrutura básica do .NET Web API.

Na inicialização do projeto, um seed adiciona o valor definido no banco.
Quando o controller recebe um request para esse dado, ele busca o valor na base usando a camada de DATA e devolve o valor via HTTP.

- [Startup.cs](Startup.cs)
    - Responsável pela inicialização da aplicação, aqui é configurada a conexão com a base de dados e um seed adiciona o valor do metro no banco de dados.

- [Models](./Models)
    - Nessa pasta fica a base do domínio da aplicação, contendo transformações, validações e outras coisas relevantes para a entidade, e também é usada também como modelo de dados para o EF. Aqui é validado o valor padrão armazenado no banco antes de ser validado pelo controller.

- [Controllers](./Controllers)
    - Nessa pasta é onde os requests para a api são orquestradas. Geralmente aqui as classes consomem dados via DI da camada de DATA, fazem as transformações necessárias usando as classes do domínio e devolvem o request em formato JSON.
    
- [Data](./Data)
    - Aqui fica a responsabilidade de fazer conexão com a banco de dados e fazer a conversão para o modelo EF. Essa parte é responsável por buscar o valor o padrão da metragem.