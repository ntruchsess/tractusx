package net.catenax.portal.model;

import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import org.springframework.validation.annotation.Validated;

import com.fasterxml.jackson.annotation.JsonProperty;

import io.swagger.v3.oas.annotations.media.Schema;

/**
 * Role (managed by IAM)
 */
@Schema(description = "Role (managed by IAM)")
@Validated
@javax.annotation.Generated(value = "io.swagger.codegen.v3.generators.java.SpringCodegen", date = "2022-02-23T08:56:48.025Z[GMT]")

@Entity
@Table(name = "role")
public class Role extends BaseEntity {

	@Id
	@JsonProperty("uuid")
	private String uuid = null;

	@JsonProperty("nameDE")
	private String nameDE = null;

	@JsonProperty("nameEN")
	private String nameEN = null;

	public Role uuid(String uuid) {
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

	public Role nameDE(String name) {
		this.nameDE = name;
		return this;
	}

	public Role nameEN(String name) {
		this.nameEN = name;
		return this;
	}

	/**
	 * Get nameDE
	 * 
	 * @return nameDE
	 **/
	@Schema(required = true, description = "")
	@NotNull

	public String getNameDE() {
		return nameDE;
	}

	public void setNameDE(String name) {
		this.nameDE = name;
	}

	/**
	 * Get nameEN
	 * 
	 * @return nameEN
	 **/
	@Schema(required = true, description = "")
	@NotNull

	public String getNameEN() {
		return nameEN;
	}

	public void setNameEN(String name) {
		this.nameEN = name;
	}

	@Override
	public boolean equals(java.lang.Object o) {
		if (this == o) {
			return true;
		}
		if (o == null || getClass() != o.getClass()) {
			return false;
		}
		Role role = (Role) o;
		return Objects.equals(this.uuid, role.uuid) && Objects.equals(this.nameDE, role.nameDE);
	}

	@Override
	public int hashCode() {
		return Objects.hash(uuid, nameDE);
	}

	@Override
	public String toString() {
		StringBuilder sb = new StringBuilder();
		sb.append("class Role {\n");

		sb.append("    uuid: ").append(toIndentedString(uuid)).append("\n");
		sb.append("    name: ").append(toIndentedString(nameDE)).append("\n");
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
