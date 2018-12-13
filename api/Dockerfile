FROM microsoft/dotnet:2.1-sdk AS build
WORKDIR /app

# copy csproj and restore as distinct layers
COPY . ./
RUN dotnet restore

RUN dotnet test ./service.Tests/

# copy everything else and build app
WORKDIR /app/service
RUN dotnet publish -c Release -o out

FROM microsoft/dotnet:2.1-aspnetcore-runtime AS runtime
WORKDIR /app
COPY --from=build /app/service/out ./

ENTRYPOINT ["dotnet", "service.dll"]