# https://hub.docker.com/_/microsoft-dotnet
FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build
WORKDIR /app

COPY . .

RUN dotnet restore api1

WORKDIR /app/api1

RUN dotnet publish -c release -o build --no-restore

# final stage/image
FROM mcr.microsoft.com/dotnet/aspnet:5.0
WORKDIR /app
COPY --from=build /app/api1 ./
ENTRYPOINT ["dotnet", "metric-api.dll"]