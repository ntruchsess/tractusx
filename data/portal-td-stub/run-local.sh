#!/bin/bash

export SERVER_HOST=192.168.1.229
export SERVER_PORT=10000
export DB_HOST=192.168.1.229
export DB_PORT=5432
export DB_NAME=portal
export DB_SCHEMA=public
export DB_USER=admin
export DB_PWD=admin

mvn clean spring-boot:run -Dspring-boot.run.jvmArguments="-Xms2048m -Xmx4096m"

