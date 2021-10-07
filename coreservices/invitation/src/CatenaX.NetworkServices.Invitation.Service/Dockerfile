#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:3.1 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:3.1 AS build
WORKDIR /src
COPY ["Invitation/src/CatenaX.NetworkServices.Invitation.Service/CatenaX.NetworkServices.Invitation.Service.csproj", "Invitation/src/CatenaX.NetworkServices.Invitation.Service/"]
COPY ["Invitation/src/CatenaX.NetworkServices.Invitation.Library/CatenaX.NetworkServices.Invitation.Library.csproj", "Invitation/src/CatenaX.NetworkServices.Invitation.Library/"]
COPY ["Invitation/src/CatenaX.NetworkServices.Invitation.Identity/CatenaX.NetworkServices.Invitation.Identity.csproj", "Invitation/src/CatenaX.NetworkServices.Invitation.Identity/"]
COPY ["Invitation/src/keycloak.net-branch/src/Keycloak.Net/Keycloak.Net.csproj", "Invitation/src/keycloak.net-branch/src/Keycloak.Net/"]
RUN dotnet restore "Invitation/src/CatenaX.NetworkServices.Invitation.Service/CatenaX.NetworkServices.Invitation.Service.csproj"
COPY . .
WORKDIR "/src/Invitation/src/CatenaX.NetworkServices.Invitation.Service"
RUN dotnet build "CatenaX.NetworkServices.Invitation.Service.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "CatenaX.NetworkServices.Invitation.Service.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "CatenaX.NetworkServices.Invitation.Service.dll"]