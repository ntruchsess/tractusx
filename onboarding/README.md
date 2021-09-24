# Speedboat Onboarding

## Infrastructure

    cd infrastructure/terraform
    terraform apply --var-file env.dev.tfvars

## Test database

    export PG_HOST=cax-sb-dev-psql.postgres.database.azure.com
    psql "host=$PG_HOST port=5432 user=psqladmin@$PG_HOST password=Secret+Passw0rd sslmode=require dbname=onboarding"
    CREATE TABLE caxtest (id int, name varchar);
    \d+ caxtest
    DROP TABLE caxtest;
    \q

## Run Service

    cd networkservices/onboarding
    docker build -t cax.onboarding -f CatenaX.NetworkServices.Onboarding.Service/Dockerfile .
    docker run --name cax.onboarding -p 9080:80 cax.onboarding
    open http://localhost:9080/WeatherForecast
