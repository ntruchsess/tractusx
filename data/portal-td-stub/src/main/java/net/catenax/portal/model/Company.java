package net.catenax.portal.model;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.hibernate.annotations.GenericGenerator;
import org.springframework.validation.annotation.Validated;

import com.fasterxml.jackson.annotation.JsonProperty;

import io.swagger.v3.oas.annotations.media.Schema;

/**
 * Company
 */
@Schema(description = "Company")
@Validated
@javax.annotation.Generated(value = "io.swagger.codegen.v3.generators.java.SpringCodegen", date = "2022-02-23T08:56:48.025Z[GMT]")

@Entity
@Table(name = "company")
public class Company extends BaseEntity {

	@Id
	@JsonProperty("companyID")
	@GeneratedValue(generator = "UUID")
	@GenericGenerator(name = "UUID", strategy = "org.hibernate.id.UUIDGenerator")
	private String companyID = null;

	@JsonProperty("bpn")
	private String bpn = null;

	@JsonProperty("name")
	private String name = null;

	@JsonProperty("shortName")
	private String shortName = null;

	@ManyToMany(targetEntity = CompanyRole.class)
	@JsonProperty("roles")
	@Valid
	private List<CompanyRole> roles = null;

	@ManyToMany(targetEntity = UseCase.class)
	@JsonProperty("useCases")
	@Valid
	private List<UseCase> useCases = null;

	@OneToOne
	@JsonProperty("idp")
	private IdentityProvider idp = null;

	@JsonProperty("parent")
	private String parent = null;

	@OneToOne
	@JsonProperty("address")
	private Address address = null;
	
	@JsonProperty("apps")
	@ManyToMany(targetEntity = App.class)
	private List<App> apps = new ArrayList<>();

	public Company companyID(String companyID) {
		this.companyID = companyID;
		return this;
	}

	/**
	 * Unique Identifier
	 * 
	 * @return companyID
	 **/
	@Schema(required = true, description = "Unique Identifier")
	@NotNull

	public String getCompanyID() {
		return companyID;
	}

	public void setCompanyID(String companyID) {
		this.companyID = companyID;
	}

	public Company bpn(String bpn) {
		this.bpn = bpn;
		return this;
	}

	/**
	 * Business Partner Number
	 * 
	 * @return bpn
	 **/
	@Schema(example = "0000001_BMW", required = true, description = "Business Partner Number")
	@NotNull

	@Size(min = 8, max = 20)
	public String getBpn() {
		return bpn;
	}

	public void setBpn(String bpn) {
		this.bpn = bpn;
	}

	public Company name(String name) {
		this.name = name;
		return this;
	}

	/**
	 * Get name
	 * 
	 * @return name
	 **/
	@Schema(description = "")

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Company shortName(String shortName) {
		this.shortName = shortName;
		return this;
	}

	/**
	 * Get shortName
	 * 
	 * @return shortName
	 **/
	@Schema(description = "")

	public String getShortName() {
		return shortName;
	}

	public void setShortName(String shortName) {
		this.shortName = shortName;
	}

	public Company roles(List<CompanyRole> roles) {
		this.roles = roles;
		return this;
	}

	public Company addRolesItem(CompanyRole rolesItem) {
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

	public Company useCases(List<UseCase> useCases) {
		this.useCases = useCases;
		return this;
	}

	public Company addUseCasesItem(UseCase useCasesItem) {
		if (this.useCases == null) {
			this.useCases = new ArrayList<UseCase>();
		}
		this.useCases.add(useCasesItem);
		return this;
	}

	/**
	 * Get useCases
	 * 
	 * @return useCases
	 **/
	@Schema(description = "")
	@Valid
	public List<UseCase> getUseCases() {
		return useCases;
	}

	public void setUseCases(List<UseCase> useCases) {
		this.useCases = useCases;
	}

	public Company idp(IdentityProvider idp) {
		this.idp = idp;
		return this;
	}

	/**
	 * Get idp
	 * 
	 * @return idp
	 **/
	@Schema(description = "")

	@Valid
	public IdentityProvider getIdp() {
		return idp;
	}

	public void setIdp(IdentityProvider idp) {
		this.idp = idp;
	}

	public Company parent(String parent) {
		this.parent = parent;
		return this;
	}

	/**
	 * Get parent
	 * 
	 * @return parent
	 **/
	@Schema(description = "")

	@Valid
	public String getParent() {
		return parent;
	}

	public void setParent(String parent) {
		this.parent = parent;
	}

	public Company address(Address address) {
		this.address = address;
		return this;
	}

	/**
	 * Get address
	 * 
	 * @return address
	 **/
	@Schema(description = "")

	@Valid
	public Address getAddress() {
		return address;
	}

	public void setAddress(Address address) {
		this.address = address;
	}
	
	
	public void addApp(App app) {
		if(!this.apps.contains(app)) {
			this.apps.add(app);
		}
	}
	
	public void removeApp(App app) {
		if(this.apps.contains(app)) {
			this.apps.remove(app);
		}
	}

	public List<App> getApps() {
		return apps;
	}

	public void setApps(List<App> apps) {
		this.apps = apps;
	}
	

	/*
	 * public Company admin(List<User> admin) { this.admin = admin; return this; }
	 * 
	 * public Company addAdminItem(User adminItem) { if (this.admin == null) {
	 * this.admin = new ArrayList<User>(); } this.admin.add(adminItem); return this;
	 * }
	 * 
	 * @Schema(description = "")
	 * 
	 * @Valid public List<User> getAdmin() { return admin; }
	 * 
	 * public void setAdmin(List<User> admin) { this.admin = admin; }
	 */

	@Override
	public boolean equals(java.lang.Object o) {
		if (this == o) {
			return true;
		}
		if (o == null || getClass() != o.getClass()) {
			return false;
		}
		Company company = (Company) o;
		return Objects.equals(this.companyID, company.companyID) && Objects.equals(this.bpn, company.bpn)
				&& Objects.equals(this.name, company.name) && Objects.equals(this.shortName, company.shortName)
				&& Objects.equals(this.roles, company.roles) && Objects.equals(this.useCases, company.useCases)
				&& Objects.equals(this.idp, company.idp) && Objects.equals(this.parent, company.parent)
				&& Objects.equals(this.address, company.address) // &&
		// Objects.equals(this.admin, company.admin)
		;
	}

	@Override
	public int hashCode() {
		return Objects.hash(companyID, bpn, name, shortName, roles, useCases, idp, parent, address); // , admin);
	}

	@Override
	public String toString() {
		StringBuilder sb = new StringBuilder();
		sb.append("class Company {\n");

		sb.append("    companyID: ").append(toIndentedString(companyID)).append("\n");
		sb.append("    bpn: ").append(toIndentedString(bpn)).append("\n");
		sb.append("    name: ").append(toIndentedString(name)).append("\n");
		sb.append("    shortName: ").append(toIndentedString(shortName)).append("\n");
		sb.append("    roles: ").append(toIndentedString(roles)).append("\n");
		sb.append("    useCases: ").append(toIndentedString(useCases)).append("\n");
		sb.append("    idp: ").append(toIndentedString(idp)).append("\n");
		sb.append("    parent: ").append(toIndentedString(parent)).append("\n");
		sb.append("    address: ").append(toIndentedString(address)).append("\n");
		// sb.append(" admin: ").append(toIndentedString(admin)).append("\n");
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
