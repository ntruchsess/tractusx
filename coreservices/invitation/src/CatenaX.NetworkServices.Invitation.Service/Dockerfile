#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

ARG VERSION=3.1-alpine3.10
FROM mcr.microsoft.com/dotnet/core/sdk:$VERSION AS build-env


WORKDIR /app

EXPOSE 80
EXPOSE 443

ADD [^.]* "/app/"

RUN dotnet restore
RUN dotnet publish \
  -c Release \
  -o ./output
FROM mcr.microsoft.com/dotnet/core/aspnet:$VERSION


WORKDIR /app
COPY --from=build-env /app/output .

ENV DOTNET_RUNNING_IN_CONTAINER=true 
ENV ASPNETCORE_URLS=http://+:8080 


EXPOSE 8080
ENTRYPOINT ["dotnet", "CatenaX.NetworkServices.Invitation.Service.dll"]