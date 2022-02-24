#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:3.1 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:3.1 AS build
WORKDIR /src
COPY ["registration/src/CatenaX.NetworkServices.Registration.Service/CatenaX.NetworkServices.Registration.Service.csproj", "registration/src/CatenaX.NetworkServices.Registration.Service/"]
COPY ["consent/src/CatenaX.NetworkServices.Consent.Library.Data/CatenaX.NetworkServices.Consent.Library.Data.csproj", "consent/src/CatenaX.NetworkServices.Consent.Library.Data/"]
COPY ["keycloak/src/CatenaX.NetworkServices.Keycloak.Authentication/CatenaX.NetworkServices.Keycloak.Authentication.csproj", "keycloak/src/CatenaX.NetworkServices.Keycloak.Authentication/"]
COPY ["keycloak/src/CatenaX.NetworkServices.Keycloak.Factory/CatenaX.NetworkServices.Keycloak.Factory.csproj", "keycloak/src/CatenaX.NetworkServices.Keycloak.Factory/"]
COPY ["keycloak/src/Keycloak.Net/Keycloak.Net.csproj", "keycloak/src/Keycloak.Net/"]
COPY ["mailing/src/CatenaX.NetworkServices.Mailing.SendMail/CatenaX.NetworkServices.Mailing.SendMail.csproj", "mailing/src/CatenaX.NetworkServices.Mailing.SendMail/"]
COPY ["mailing/src/CatenaX.NetworkServices.Mailing.Template/CatenaX.NetworkServices.Mailing.Template.csproj", "mailing/src/CatenaX.NetworkServices.Mailing.Template/"]
COPY ["mockup/src/CatenaX.NetworkServices.Mockups/CatenaX.NetworkServices.Mockups.csproj", "mockup/src/CatenaX.NetworkServices.Mockups/"]
COPY ["provisioning/src/CatenaX.NetworkServices.Provisioning.Library/CatenaX.NetworkServices.Provisioning.Library.csproj", "provisioning/src/CatenaX.NetworkServices.Provisioning.Library/"]
COPY . .
WORKDIR "/src/registration/src/CatenaX.NetworkServices.Registration.Service"
RUN dotnet build "CatenaX.NetworkServices.Registration.Service.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "CatenaX.NetworkServices.Registration.Service.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "CatenaX.NetworkServices.Registration.Service.dll"]