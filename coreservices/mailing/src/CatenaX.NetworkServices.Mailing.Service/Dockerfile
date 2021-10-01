#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:3.1 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:3.1 AS build
WORKDIR /src
COPY ["CatenaX.NetworkServices.Mailing.Service/CatenaX.NetworkServices.Mailing.Service.csproj", "CatenaX.NetworkServices.Mailing.Service/"]
RUN dotnet restore "CatenaX.NetworkServices.Mailing.Service/CatenaX.NetworkServices.Mailing.Service.csproj"
COPY . .
WORKDIR "/src/CatenaX.NetworkServices.Mailing.Service"
RUN dotnet build "CatenaX.NetworkServices.Mailing.Service.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "CatenaX.NetworkServices.Mailing.Service.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "CatenaX.NetworkServices.Mailing.Service.dll"]