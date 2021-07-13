Simple scheduler is a helper application for the DataSpace Connector 4.3.0, that allows to update already existing
resource by a given schedule (e.g., one time per day).

### Configuration:

All configuration placed in `infrastructure/manifests/simplescheduler.yaml`

- **SCHEDULER_CRON**  
  Schedule for resource update defined as [cron](https://en.wikipedia.org/wiki/Cron).  
  Example:  
  `@daily` or `0 * * * *`

- **CONNECTOR_URL**  
  "Consumer" connector (that contains resources, that are needs to be updated) base url.

- **CONNECTOR_LOGIN** and **CONNECTOR_PASSWORD**  
  Credentials for "consumer" connector.

- **SCHEDULER_RESOURCES**  
  Map of resourceIds (that are exists in a "consumer" connector) and "provider" connector base url (that contains
  resource, with the same resource **artifactId**).  
  Example:
  ```
  09da3ef1-cd9e-409e-a8ac-8e8085e8a2dc: https://localhost:8080
  199be6d6-68ba-4405-a820-762edcea141f: https://localhost:8081
  ```
  