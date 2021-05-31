Decision Log Tractus-X PoC Scope
=================================

Identity Provider (IdP):
- Azure AD is used as IdP. 
- Integration is based on open protocols (i.e. openID connect (OIDC)). 
- Replacement by FOSS component in the future required.

Connector:
- Dataspace Connector Version 4.3.0 will be used in the PoC
- No IdP integration
- Connector as a Service (Caas) ist indicated only as a mocked concept
- All connector backend data mocked

Onboarding:
- Governing Body is only indicated on the mock level (blackboxed)
- Business Partner Management will be integrated with mocked data and services
- Onboarding is demonstrated with an existing Business Partner OneID

Upload-App:
- static mapping of custom fields towards tractus-x information model

IDS Components:
- Use DAPS instance from Fraunhofer
- Fraunhofer will provider certificates for connectors
- Broker will be setup as backend component to evaluate the technical integration of different Dataspace Connectors. Connection to fronend to be discussed. Frontend mock will be available.

Infrastructure:
- Portal, Connectors and services will all be containerized
- Kubernetes will be used as managed service 

DevOps:
- Use of Azure DevOps Pipeline (GitHub Actions out of scope)
