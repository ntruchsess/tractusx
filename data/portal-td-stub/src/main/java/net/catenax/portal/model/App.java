package net.catenax.portal.model;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.Valid;

import org.hibernate.annotations.GenericGenerator;
import org.springframework.validation.annotation.Validated;

import com.fasterxml.jackson.annotation.JsonProperty;

import io.swagger.v3.oas.annotations.media.Schema;

/**
 * Application
 */
@Schema(description = "Application")
@Validated
@javax.annotation.Generated(value = "io.swagger.codegen.v3.generators.java.SpringCodegen", date = "2022-02-23T08:56:48.025Z[GMT]")

@Entity
@Table(name = "app")
public class App extends BaseEntity {

	@Id
	@GeneratedValue(generator = "UUID")
	@GenericGenerator(name = "UUID", strategy = "org.hibernate.id.UUIDGenerator")
	@JsonProperty("uuid")
	private String uuid = null;
	
	@JsonProperty("name")
	private String name = null;

	@OneToOne(targetEntity = AppVersion.class)
	@JsonProperty("currentVersion")
	private AppVersion currentVersion = null;

	@ManyToMany(targetEntity = AppLicense.class)
	@JsonProperty("licenses")
	@Valid
	private List<AppLicense> licenses = null;

	@OneToMany(targetEntity = UsageAgreement.class)
	@JsonProperty("agreements")
	@Valid
	private List<UsageAgreement> agreements = null;

	@ManyToMany(targetEntity = UseCase.class)
	@JsonProperty("useCases")
	@Valid
	private List<UseCase> useCases = null;

	@ManyToOne(targetEntity = Company.class)
	@JsonProperty("vendor")
	private Company vendor = null;

	// TODO: Allow x-app roles?
	@ManyToMany(targetEntity = Role.class)
	@JsonProperty("roles")
	@Valid
	private List<Role> roles = null;

	public App uuid(String uuid) {
		this.uuid = uuid;
		return this;
	}
	
	public App name(String name) {
		this.name = name;
		return this;
	}

	public String getUuid() {
		return uuid;
	}

	public void setUuid(String uuid) {
		this.uuid = uuid;
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

	public App currentVersion(AppVersion currentVersion) {
		this.currentVersion = currentVersion;
		return this;
	}

	/**
	 * Get currentVersion
	 * 
	 * @return currentVersion
	 **/
	@Schema(description = "")

	@Valid
	public AppVersion getCurrentVersion() {
		return currentVersion;
	}

	public void setCurrentVersion(AppVersion currentVersion) {
		this.currentVersion = currentVersion;
	}

	public App licenses(List<AppLicense> licenses) {
		this.licenses = licenses;
		return this;
	}

	public App addLicensesItem(AppLicense licensesItem) {
		if (this.licenses == null) {
			this.licenses = new ArrayList<AppLicense>();
		}
		this.licenses.add(licensesItem);
		return this;
	}

	/**
	 * Get licenses
	 * 
	 * @return licenses
	 **/
	@Schema(description = "")
	@Valid
	public List<AppLicense> getLicenses() {
		return licenses;
	}

	public void setLicenses(List<AppLicense> licenses) {
		this.licenses = licenses;
	}

	public App agreements(List<UsageAgreement> agreements) {
		this.agreements = agreements;
		return this;
	}

	public App addAgreementsItem(UsageAgreement agreementsItem) {
		if (this.agreements == null) {
			this.agreements = new ArrayList<UsageAgreement>();
		}
		this.agreements.add(agreementsItem);
		return this;
	}

	/**
	 * Get agreements
	 * 
	 * @return agreements
	 **/
	@Schema(description = "")
	@Valid
	public List<UsageAgreement> getAgreements() {
		return agreements;
	}

	public void setAgreements(List<UsageAgreement> agreements) {
		this.agreements = agreements;
	}

	public App useCases(List<UseCase> useCases) {
		this.useCases = useCases;
		return this;
	}

	public App addUseCasesItem(UseCase useCasesItem) {
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

	public App vendor(Company vendor) {
		this.vendor = vendor;
		return this;
	}

	/**
	 * Get vendor
	 * 
	 * @return vendor
	 **/
	@Schema(description = "")

	@Valid
	public Company getVendor() {
		return vendor;
	}

	public void setVendor(Company vendor) {
		this.vendor = vendor;
	}

	public App roles(List<Role> roles) {
		this.roles = roles;
		return this;
	}

	public App addRolesItem(Role rolesItem) {
		if (this.roles == null) {
			this.roles = new ArrayList<Role>();
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
	public List<Role> getRoles() {
		return roles;
	}

	public void setRoles(List<Role> roles) {
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
		App app = (App) o;
		return Objects.equals(this.name, app.name) && Objects.equals(this.currentVersion, app.currentVersion)
				&& Objects.equals(this.licenses, app.licenses) && Objects.equals(this.agreements, app.agreements)
				&& Objects.equals(this.useCases, app.useCases) && Objects.equals(this.vendor, app.vendor)
				&& Objects.equals(this.roles, app.roles);
	}

	@Override
	public int hashCode() {
		return Objects.hash(name, currentVersion, licenses, agreements, useCases, vendor, roles);
	}

	@Override
	public String toString() {
		StringBuilder sb = new StringBuilder();
		sb.append("class App {\n");

		sb.append("    name: ").append(toIndentedString(name)).append("\n");
		sb.append("    currentVersion: ").append(toIndentedString(currentVersion)).append("\n");
		sb.append("    licenses: ").append(toIndentedString(licenses)).append("\n");
		sb.append("    agreements: ").append(toIndentedString(agreements)).append("\n");
		sb.append("    useCases: ").append(toIndentedString(useCases)).append("\n");
		sb.append("    vendor: ").append(toIndentedString(vendor)).append("\n");
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
