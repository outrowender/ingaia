FROM mcr.microsoft.com/dotnet/aspnet:5.0 as base
FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build

WORKDIR /app

COPY . /app

# install dependencies
RUN dotnet restore .

# run tests
RUN dotnet test

ENTRYPOINT ["echo", "ok"]