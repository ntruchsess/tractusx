namespace CatenaX.NetworkServices.Keycloak.DBAccess

{
    public interface IKeycloakDBAccessFactory
    {
        IKeycloakDBAccess CreateKeycloakDBAccess();
    }
}
