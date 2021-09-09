export HTTP_PROXY_HOST=sia-lb.telekom.de
export HTTP_PROXY_PORT=8080

export HTTPPASSWORD=xanetacist
export STORAGEACCOUNT_CONNECTIONSTRING=DefaultEndpointsProtocol=https\;AccountName=tsicatenaxstorage\;AccountKey=Ff5PNwRDgD4IXlHELIwpGau34UjrJoqYEf0IJpjs4287QV6XvhADxlqDBIxxmi//y5c2Hb79X7+g+MCwn3i87g==\;EndpointSuffix=core.windows.net

export HTTPUSER=TractusX
export POSTGREPARTSMASTERPASSWORD=Xanetacist42
export POSTGREPARTSMASTERURL="jdbc:postgresql://${DATABASE_RESOURCE_NAME}.postgres.database.azure.com:5432/partsmasterdata?user=${HTTPUSER}@${DATABASE_RESOURCE_NAME}&password=${POSTGREPARTSMASTERPASSWORD}&sslmode=require"

export APIID=db41c442-ff3c-49af-8f74-fabc5c39a54e

export PROXY=http://sia-lb.telekom.de:8080
export KEYSTORE_PASSWORD=password
