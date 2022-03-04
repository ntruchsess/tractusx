package net.catenax.portal.model;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.Valid;
import javax.validation.constraints.NotNull;

import org.springframework.validation.annotation.Validated;
import org.threeten.bp.OffsetDateTime;

import com.fasterxml.jackson.annotation.JsonProperty;

import io.swagger.v3.oas.annotations.media.Schema;

/**
 * User (managed by IAM)
 */
@Schema(description = "User (managed by IAM)")
@Validated
@javax.annotation.Generated(value = "io.swagger.codegen.v3.generators.java.SpringCodegen", date = "2022-02-23T08:56:48.025Z[GMT]")

@Entity
@Table(name = "company_user")
public class User {

	@Id
	@JsonProperty("uuid")
	@Column(name = "uuid")
	private String uuid = null;

	@ManyToOne(optional = false)
	@JsonProperty("Company")
	private Company company = null;

	@ManyToMany
	@JsonProperty("roles")
	@Valid
	private List<Role> roles = null;

	@JsonProperty("firstName")
	private String firstName = null;

	@JsonProperty("lastName")
	private String lastName = null;

	@JsonProperty("email")
	private String email = null;

	@JsonProperty("created")
	private OffsetDateTime created = null;

	@JsonProperty("lastLogin")
	private OffsetDateTime lastLogin = null;

	@JsonProperty("isCompanyAdmin")
	private boolean companyAdmin = false;
	
	
	@JsonProperty("appFavourites")
	@ManyToMany(targetEntity = App.class)
	private List<App> appFavourites = new ArrayList<>();
	

	public User uuid(String UUID) {
		this.uuid = UUID;
		return this;
	}

	/**
	 * Unique Identifier
	 * 
	 * @return UUID
	 **/
	@Schema(required = true, description = "Unique Identifier")
	@NotNull

	public String getUuid() {
		return uuid;
	}

	public void setUuid(String UUID) {
		this.uuid = UUID;
	}

	public User company(Company company) {
		this.company = company;
		return this;
	}

	/**
	 * Get company
	 * 
	 * @return company
	 **/
	@Schema(description = "")

	@Valid
	public Company getCompany() {
		return company;
	}

	public void setCompany(Company company) {
		this.company = company;
	}

	public User roles(List<Role> roles) {
		this.roles = roles;
		return this;
	}

	public User addRolesItem(Role rolesItem) {
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

	public User firstName(String firstName) {
		this.firstName = firstName;
		return this;
	}

	/**
	 * Get firstName
	 * 
	 * @return firstName
	 **/
	@Schema(description = "")

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public User lastName(String lastName) {
		this.lastName = lastName;
		return this;
	}

	/**
	 * Get lastName
	 * 
	 * @return lastName
	 **/
	@Schema(description = "")

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public User email(String email) {
		this.email = email;
		return this;
	}

	/**
	 * Get email
	 * 
	 * @return email
	 **/
	@Schema(description = "")

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public User created(OffsetDateTime created) {
		this.created = created;
		return this;
	}

	/**
	 * Get created
	 * 
	 * @return created
	 **/
	@Schema(description = "")

	@Valid
	public OffsetDateTime getCreated() {
		return created;
	}

	public void setCreated(OffsetDateTime created) {
		this.created = created;
	}

	public User lastLogin(OffsetDateTime lastLogin) {
		this.lastLogin = lastLogin;
		return this;
	}

	/**
	 * Get lastLogin
	 * 
	 * @return lastLogin
	 **/
	@Schema(description = "")

	@Valid
	public OffsetDateTime getLastLogin() {
		return lastLogin;
	}

	public void setLastLogin(OffsetDateTime lastLogin) {
		this.lastLogin = lastLogin;
	}

	public boolean isCompanyAdmin() {
		return companyAdmin;
	}

	public void setCompanyAdmin(boolean companyAdmin) {
		this.companyAdmin = companyAdmin;
	}
	
	public void addAppFavourite(App app) {
		if(!this.appFavourites.contains(app)) {
			this.appFavourites.add(app);
		}
	}
	
	public void removeAppFavourite(App app) {
		if(this.appFavourites.contains(app)) {
			this.appFavourites.remove(app);
		}
	}

	public List<App> getAppFavourites() {
		return appFavourites;
	}

	public void setAppFavourites(List<App> appFavourites) {
		this.appFavourites = appFavourites;
	}

	@Override
	public boolean equals(java.lang.Object o) {
		if (this == o) {
			return true;
		}
		if (o == null || getClass() != o.getClass()) {
			return false;
		}
		User user = (User) o;
		return Objects.equals(this.uuid, user.uuid) && Objects.equals(this.company, user.company)
				&& Objects.equals(this.roles, user.roles) && Objects.equals(this.firstName, user.firstName)
				&& Objects.equals(this.lastName, user.lastName) && Objects.equals(this.email, user.email)
				&& Objects.equals(this.created, user.created) && Objects.equals(this.lastLogin, user.lastLogin);
	}

	@Override
	public int hashCode() {
		return Objects.hash(uuid, company, roles, firstName, lastName, email, created, lastLogin);
	}

	@Override
	public String toString() {
		StringBuilder sb = new StringBuilder();
		sb.append("class User {\n");

		sb.append("    UUID: ").append(toIndentedString(uuid)).append("\n");
		sb.append("    company: ").append(toIndentedString(company)).append("\n");
		sb.append("    roles: ").append(toIndentedString(roles)).append("\n");
		sb.append("    firstName: ").append(toIndentedString(firstName)).append("\n");
		sb.append("    lastName: ").append(toIndentedString(lastName)).append("\n");
		sb.append("    email: ").append(toIndentedString(email)).append("\n");
		sb.append("    created: ").append(toIndentedString(created)).append("\n");
		sb.append("    lastLogin: ").append(toIndentedString(lastLogin)).append("\n");
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
