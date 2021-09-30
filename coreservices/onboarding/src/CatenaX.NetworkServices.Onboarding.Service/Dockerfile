#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:3.1 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:3.1 AS build
WORKDIR /src
COPY ["onboarding/src/CatenaX.NetworkServices.Onboarding.Service/CatenaX.NetworkServices.Onboarding.Service.csproj", "onboarding/src/CatenaX.NetworkServices.Onboarding.Service/"]
COPY ["onboarding/src/CatenaX.NetworkServices.Onboarding.Library/CatenaX.NetworkServices.Onboarding.Library.csproj", "onboarding/src/CatenaX.NetworkServices.Onboarding.Library/"]
COPY ["onboarding/src/CatenaX.NetworkServices.Onboarding.Identity/CatenaX.NetworkServices.Onboarding.Identity.csproj", "onboarding/src/CatenaX.NetworkServices.Onboarding.Identity/"]
COPY ["onboarding/src/keycloak.net-branch/src/Keycloak.Net/Keycloak.Net.csproj", "onboarding/src/keycloak.net-branch/src/Keycloak.Net/"]
RUN dotnet restore "onboarding/src/CatenaX.NetworkServices.Onboarding.Service/CatenaX.NetworkServices.Onboarding.Service.csproj"
COPY . .
WORKDIR "/src/onboarding/src/CatenaX.NetworkServices.Onboarding.Service"
RUN dotnet build "CatenaX.NetworkServices.Onboarding.Service.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "CatenaX.NetworkServices.Onboarding.Service.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "CatenaX.NetworkServices.Onboarding.Service.dll"]