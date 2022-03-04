package net.catenax.portal.model;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import javax.persistence.DiscriminatorValue;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.ManyToMany;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.SecondaryTable;
import javax.validation.Valid;

import org.springframework.validation.annotation.Validated;

import com.fasterxml.jackson.annotation.JsonProperty;

import io.swagger.v3.oas.annotations.media.Schema;

/**
 * Contract
 */
@Schema(description = "Contract")
@Validated
@javax.annotation.Generated(value = "io.swagger.codegen.v3.generators.java.SpringCodegen", date = "2022-02-23T08:56:48.025Z[GMT]")

@Entity
@SecondaryTable(name = "contract", pkJoinColumns = { @PrimaryKeyJoinColumn(name = "id", referencedColumnName = "id") })
@DiscriminatorValue("1")
public class Contract extends Agreement {

	@ElementCollection
	@Enumerated(EnumType.STRING)
	@JsonProperty("roles")
	@Valid
	private List<CompanyRole> roles = null;

	public Contract roles(List<CompanyRole> roles) {
		this.roles = roles;
		return this;
	}

	public Contract addRolesItem(CompanyRole rolesItem) {
		if (this.roles == null) {
			this.roles = new ArrayList<CompanyRole>();
		}
		this.roles.add(rolesItem);
		return this;
	}

	/**
	 * Get roles
	 * 
	 * @return roles
	 **/
	@Schema(description = "")
	@Valid
	public List<CompanyRole> getRoles() {
		return roles;
	}

	public void setRoles(List<CompanyRole> roles) {
		this.roles = roles;
	}

	@Override
	public boolean equals(java.lang.Object o) {
		if (this == o) {
			return true;
		}
		if (o == null || getClass() != o.getClass()) {
			return false;
		}
		Contract contract = (Contract) o;
		return Objects.equals(this.roles, contract.roles) && super.equals(o);
	}

	@Override
	public int hashCode() {
		return Objects.hash(roles, super.hashCode());
	}

	@Override
	public String toString() {
		StringBuilder sb = new StringBuilder();
		sb.append("class Contract {\n");
		sb.append("    ").append(toIndentedString(super.toString())).append("\n");
		sb.append("    roles: ").append(toIndentedString(roles)).append("\n");
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
