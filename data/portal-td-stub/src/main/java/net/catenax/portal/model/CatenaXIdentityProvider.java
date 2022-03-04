package net.catenax.portal.model;

import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.SecondaryTable;

import org.springframework.validation.annotation.Validated;

import com.fasterxml.jackson.annotation.JsonProperty;

import io.swagger.v3.oas.annotations.media.Schema;

/**
 * Identity Provider within Catena-X
 */
@Schema(description = "Identity Provider within Catena-X")
@Validated
@javax.annotation.Generated(value = "io.swagger.codegen.v3.generators.java.SpringCodegen", date = "2022-02-23T08:56:48.025Z[GMT]")

@Entity
@SecondaryTable(name = "identity_provider_catenax", pkJoinColumns = {
		@PrimaryKeyJoinColumn(name = "uuid", referencedColumnName = "uuid") })
@DiscriminatorValue("1")
public class CatenaXIdentityProvider extends IdentityProvider {
	
	@JsonProperty("serverUrl")
	@Column(name = "auth_url", length = 2048)
	private String serverUrl = null;

	@JsonProperty("realm")
	private String realm = null;

	public CatenaXIdentityProvider serverUrl(String serverUrl) {
		this.serverUrl = serverUrl;
		return this;
	}

	/**
	 * Get serverUrl
	 * 
	 * @return serverUrl
	 **/
	@Schema(description = "")

	public String getServerUrl() {
		return serverUrl;
	}

	public void setServerUrl(String serverUrl) {
		this.serverUrl = serverUrl;
	}

	public CatenaXIdentityProvider realm(String realm) {
		this.realm = realm;
		return this;
	}

	/**
	 * Get realm
	 * 
	 * @return realm
	 **/
	@Schema(description = "")

	public String getRealm() {
		return realm;
	}

	public void setRealm(String realm) {
		this.realm = realm;
	}

	@Override
	public boolean equals(java.lang.Object o) {
		if (this == o) {
			return true;
		}
		if (o == null || getClass() != o.getClass()) {
			return false;
		}
		CatenaXIdentityProvider catenaXIdentityProvider = (CatenaXIdentityProvider) o;
		return Objects.equals(this.serverUrl, catenaXIdentityProvider.serverUrl)
				&& Objects.equals(this.realm, catenaXIdentityProvider.realm) && super.equals(o);
	}

	@Override
	public int hashCode() {
		return Objects.hash(serverUrl, realm, super.hashCode());
	}

	@Override
	public String toString() {
		StringBuilder sb = new StringBuilder();
		sb.append("class CatenaXIdentityProvider {\n");
		sb.append("    ").append(toIndentedString(super.toString())).append("\n");
		sb.append("    serverUrl: ").append(toIndentedString(serverUrl)).append("\n");
		sb.append("    realm: ").append(toIndentedString(realm)).append("\n");
		sb.append("}");
		return sb.toString();
	}

	/**
	 * Convert the given object to string with each line indented by 4 spaces
	 * (except the first line).
	 */
	private String toIndentedString(java.lang.Object o) {
		if (o == null) {
			return "null";
		}
		return o.toString().replace("\n", "\n    ");
	}
}
