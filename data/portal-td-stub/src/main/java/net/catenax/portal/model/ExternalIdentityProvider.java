package net.catenax.portal.model;

import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;

import io.swagger.v3.oas.annotations.media.Schema;
import net.catenax.portal.model.IdentityProvider;

import org.springframework.validation.annotation.Validated;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.SecondaryTable;
import javax.persistence.Table;
import javax.validation.Valid;
import javax.validation.constraints.*;

/**
 * External Identity Provider
 */
@Schema(description = "External Identity Provider")
@Validated
@javax.annotation.Generated(value = "io.swagger.codegen.v3.generators.java.SpringCodegen", date = "2022-02-23T08:56:48.025Z[GMT]")

@Entity
@SecondaryTable(name = "identity_provider_external", pkJoinColumns = {
		@PrimaryKeyJoinColumn(name = "uuid", referencedColumnName = "uuid") })
@DiscriminatorValue("2")
public class ExternalIdentityProvider extends IdentityProvider {
	@JsonProperty("extenalUrl")
	private String extenalUrl = null;

	public ExternalIdentityProvider extenalUrl(String extenalUrl) {
		this.extenalUrl = extenalUrl;
		return this;
	}

	/**
	 * Get extenalUrl
	 * 
	 * @return extenalUrl
	 **/
	@Schema(description = "")

	public String getExtenalUrl() {
		return extenalUrl;
	}

	public void setExtenalUrl(String extenalUrl) {
		this.extenalUrl = extenalUrl;
	}

	@Override
	public boolean equals(java.lang.Object o) {
		if (this == o) {
			return true;
		}
		if (o == null || getClass() != o.getClass()) {
			return false;
		}
		ExternalIdentityProvider externalIdentityProvider = (ExternalIdentityProvider) o;
		return Objects.equals(this.extenalUrl, externalIdentityProvider.extenalUrl) && super.equals(o);
	}

	@Override
	public int hashCode() {
		return Objects.hash(extenalUrl, super.hashCode());
	}

	@Override
	public String toString() {
		StringBuilder sb = new StringBuilder();
		sb.append("class ExternalIdentityProvider {\n");
		sb.append("    ").append(toIndentedString(super.toString())).append("\n");
		sb.append("    extenalUrl: ").append(toIndentedString(extenalUrl)).append("\n");
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
