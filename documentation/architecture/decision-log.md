Decision Log Tractus-X PoC Scope
=================================

Identity Provider (IdP):
- Azure AD is used as IdP
- Integration is based on open protocols (i.e. openID connect (OIDC))
- Replacement by FOSS component in the future required

Connector:
- Dataspace Connector Version 4.3.0 will be used in the PoC
- No IdP integration
- Connector as a Service (Caas) is indicated only as a mocked concept
- All connector backend data mocked

Onboarding:
- Governing Body is only indicated on the mock level (blackboxed)
- Business Partner Management will be integrated with mocked data and services
- Onboarding is demonstrated with an existing Business Partner OneID

Parts Master Data:
- Integration Scenario 1a: central service supplied by parts data via app integration through connectors
- Parts data (mocked) is ingested into apps via connector
- All company parts data comes from a single mock service via connector

App-Integration:
- Pseudo-Push Eventing for QualityAlerts
- Adapters need to implement the sending and receiving elements
- A Connector DNS service will be used to translate between company oneid and connectorid

Upload-App:
- Static mapping of custom fields towards tractus-x information model

IDS Components:
- Use DAPS instance from Fraunhofer
- Fraunhofer will provide certificates for connectors
- Broker will be setup as backend component to evaluate the technical integration of different Dataspace Connectors. No connection to fronend.

Infrastructure:
- Portal, Connectors and services will all be containerized
- Kubernetes will be used as managed service 
- Azure natvie monitoring tools

DevOps:
- Use of Azure DevOps Pipeline (GitHub Actions out of scope)
