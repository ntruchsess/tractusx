#!/bin/bash

export SERVER_HOST=127.0.0.1
export SERVER_PORT=10000
export DB_HOST=127.0.0.1
export DB_PORT=5432
export DB_NAME=portal
export DB_SCHEMA=public
export DB_USER=admin
export DB_PWD=admin

mvn clean package

