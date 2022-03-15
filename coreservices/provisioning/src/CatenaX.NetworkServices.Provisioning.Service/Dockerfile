#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:3.1 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:3.1 AS build
WORKDIR /src
COPY ["provisioning/src/CatenaX.NetworkServices.Provisioning.Service/CatenaX.NetworkServices.Provisioning.Service.csproj", "provisioning/src/CatenaX.NetworkServices.Provisioning.Service/"]
COPY ["provisioning/src/CatenaX.NetworkServices.Provisioning.DBAccess/CatenaX.NetworkServices.Provisioning.DBAccess.csproj", "provisioning/src/CatenaX.NetworkServices.Provisioning.DBAccess/"]
COPY ["provisioning/src/CatenaX.NetworkServices.Provisioning.Library/CatenaX.NetworkServices.Provisioning.Library.csproj", "provisioning/src/CatenaX.NetworkServices.Provisioning.Library/"]
COPY ["keycloak/src/Keycloak.Net/Keycloak.Net.csproj", "keycloak/src/Keycloak.Net/"]
COPY ["keycloak/src/CatenaX.NetworkServices.Keycloak.Authentication/CatenaX.NetworkServices.Keycloak.Authentication.csproj", "keycloak/src/CatenaX.NetworkServices.Keycloak.Authentication/"]
COPY ["keycloak/src/CatenaX.NetworkServices.Keycloak.DBAccess/CatenaX.NetworkServices.Keycloak.DBAccess.csproj", "keycloak/src/CatenaX.NetworkServices.Keycloak.DBAccess/"]
COPY ["keycloak/src/CatenaX.NetworkServices.Keycloak.Factory/CatenaX.NetworkServices.Keycloak.Factory.csproj", "keycloak/src/CatenaX.NetworkServices.Keycloak.Factory/"]
RUN dotnet restore "provisioning/src/CatenaX.NetworkServices.Provisioning.Service/CatenaX.NetworkServices.Provisioning.Service.csproj"
COPY . .
WORKDIR "/src/provisioning/src/CatenaX.NetworkServices.Provisioning.Service"
RUN dotnet build "CatenaX.NetworkServices.Provisioning.Service.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "CatenaX.NetworkServices.Provisioning.Service.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "CatenaX.NetworkServices.Provisioning.Service.dll"]