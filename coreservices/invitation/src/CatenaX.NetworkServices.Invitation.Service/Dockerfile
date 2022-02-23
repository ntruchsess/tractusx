#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:3.1 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:3.1 AS build
WORKDIR /src
COPY ["invitation/src/CatenaX.NetworkServices.Invitation.Service/CatenaX.NetworkServices.Invitation.Service.csproj", "invitation/src/CatenaX.NetworkServices.Invitation.Service/"]
COPY ["provisioning/src/CatenaX.NetworkServices.Provisioning.Library/CatenaX.NetworkServices.Provisioning.Library.csproj", "provisioning/src/CatenaX.NetworkServices.Provisioning.Library/"]
COPY ["mailing/src/CatenaX.NetworkServices.Mailing.Template/CatenaX.NetworkServices.Mailing.Template.csproj", "mailing/src/CatenaX.NetworkServices.Mailing.Template/"]
COPY ["mailing/src/CatenaX.NetworkServices.Mailing.SendMail/CatenaX.NetworkServices.Mailing.SendMail.csproj", "mailing/src/CatenaX.NetworkServices.Mailing.SendMail/"]
COPY ["keycloak/src/Keycloak.Net/Keycloak.Net.csproj", "keycloak/src/Keycloak.Net/"]
COPY ["keycloak/src/CatenaX.NetworkServices.Keycloak.Authentication/CatenaX.NetworkServices.Keycloak.Authentication.csproj", "keycloak/src/CatenaX.NetworkServices.Keycloak.Authentication/"]
COPY ["keycloak/src/CatenaX.NetworkServices.Keycloak.Factory/CatenaX.NetworkServices.Keycloak.Factory.csproj", "keycloak/src/CatenaX.NetworkServices.Keycloak.Factory/"]
RUN dotnet restore "invitation/src/CatenaX.NetworkServices.Invitation.Service/CatenaX.NetworkServices.Invitation.Service.csproj"
COPY . .
WORKDIR "/src/invitation/src/CatenaX.NetworkServices.Invitation.Service"
RUN dotnet build "CatenaX.NetworkServices.Invitation.Service.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "CatenaX.NetworkServices.Invitation.Service.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "CatenaX.NetworkServices.Invitation.Service.dll"]