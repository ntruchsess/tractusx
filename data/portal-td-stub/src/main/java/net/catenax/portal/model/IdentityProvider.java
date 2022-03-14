package net.catenax.portal.model;

import java.util.Objects;

import javax.persistence.DiscriminatorColumn;
import javax.persistence.DiscriminatorType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;
import org.springframework.validation.annotation.Validated;

import com.fasterxml.jackson.annotation.JsonProperty;

import io.swagger.v3.oas.annotations.media.Schema;

/**
 * Identity Provider
 */
@Schema(description = "Identity Provider")
@Validated
@javax.annotation.Generated(value = "io.swagger.codegen.v3.generators.java.SpringCodegen", date = "2022-02-23T08:56:48.025Z[GMT]")

@Entity
@Table(name = "identity_provider")
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name = "ITEM_CATEGORY", discriminatorType = DiscriminatorType.INTEGER)
public class IdentityProvider extends BaseEntity {

	@Id
	@JsonProperty("uuid")
	@GeneratedValue(generator = "UUID")
	@GenericGenerator(name = "UUID", strategy = "org.hibernate.id.UUIDGenerator")
	private String uuid = null;

	public IdentityProvider uuid(String uuid) {
		this.uuid = uuid;
		return this;
	}

	/**
	 * Unique Identifier
	 * 
	 * @return uuid
	 **/
	@Schema(description = "Unique Identifier")

	public String getUuid() {
		return uuid;
	}

	public void setUuid(String uuid) {
		this.uuid = uuid;
	}

	@Override
	public boolean equals(java.lang.Object o) {
		if (this == o) {
			return true;
		}
		if (o == null || getClass() != o.getClass()) {
			return false;
		}
		IdentityProvider identityProvider = (IdentityProvider) o;
		return Objects.equals(this.uuid, identityProvider.uuid);
	}

	@Override
	public int hashCode() {
		return Objects.hash(uuid);
	}

	@Override
	public String toString() {
		StringBuilder sb = new StringBuilder();
		sb.append("class IdentityProvider {\n");

		sb.append("    uuid: ").append(toIndentedString(uuid)).append("\n");
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
