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
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.Valid;

import org.hibernate.annotations.GenericGenerator;
import org.springframework.validation.annotation.Validated;
import org.threeten.bp.OffsetDateTime;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonValue;

import io.swagger.v3.oas.annotations.media.Schema;

/**
 * Technical Stateful Session for Onboarding
 */
@Schema(description = "Technical Stateful Session for Onboarding")
@Validated
@javax.annotation.Generated(value = "io.swagger.codegen.v3.generators.java.SpringCodegen", date = "2022-02-23T08:56:48.025Z[GMT]")

@Entity
@Table(name = "company_application")
public class CompanyApplication extends BaseEntity {
	@Id
	@GeneratedValue(generator = "UUID")
	@GenericGenerator(name = "UUID", strategy = "org.hibernate.id.UUIDGenerator")
	@JsonProperty("applicationID")
	private String applicationID = null;

	@ManyToOne(optional = false)
	@JsonProperty("Company")
	private Company company = null;

	@JsonProperty("deputyAcknowledgement")
	private Boolean deputyAcknowledgement = null;

	/**
	 * Gets or Sets status
	 */
	public enum StatusEnum {
		VERIFY_COMPANY("VERIFY_COMPANY"),

		SELECT_ROLE("SELECT_ROLE"),

		AGREEMENTS("AGREEMENTS"),

		SELECT_INTEGRATION("SELECT_INTEGRATION"),

		PROVIDE_CERTIFICATES("PROVIDE_CERTIFICATES"),

		IN_REVIEW("IN_REVIEW"),

		CANCELED("CANCELED"),

		APPROVED("APPROVED"),

		DECLINED("DECLINED"),

		SUSPENDED("SUSPENDED");

		private String value;

		StatusEnum(String value) {
			this.value = value;
		}

		@Override
		@JsonValue
		public String toString() {
			return String.valueOf(value);
		}

		@JsonCreator
		public static StatusEnum fromValue(String text) {
			for (StatusEnum b : StatusEnum.values()) {
				if (String.valueOf(b.value).equals(text)) {
					return b;
				}
			}
			return null;
		}
	}

	@Enumerated(EnumType.STRING)
	@JsonProperty("status")
	private StatusEnum status = null;

	@ElementCollection
	@Enumerated(EnumType.STRING)
	@JsonProperty("memberRoles")
	@Valid
	private List<CompanyRole> memberRoles = null;

	@OneToMany(targetEntity = Agreement.class)
	@JsonProperty("agreements")
	@Valid
	private List<Agreement> agreements = null;

	public CompanyApplication applicationID(String applicationID) {
		this.applicationID = applicationID;
		return this;
	}

	/**
	 * Get applicationID
	 * 
	 * @return applicationID
	 **/
	@Schema(description = "")

	public String getApplicationID() {
		return applicationID;
	}

	public void setApplicationID(String applicationID) {
		this.applicationID = applicationID;
	}

	public CompanyApplication deputyAcknowledgement(Boolean deputyAcknowledgement) {
		this.deputyAcknowledgement = deputyAcknowledgement;
		return this;
	}

	/**
	 * Get deputyAcknowledgement
	 * 
	 * @return deputyAcknowledgement
	 **/
	@Schema(description = "")

	public Boolean isDeputyAcknowledgement() {
		return deputyAcknowledgement;
	}

	public void setDeputyAcknowledgement(Boolean deputyAcknowledgement) {
		this.deputyAcknowledgement = deputyAcknowledgement;
	}

	public CompanyApplication status(StatusEnum status) {
		this.status = status;
		return this;
	}

	/**
	 * Get status
	 * 
	 * @return status
	 **/
	@Schema(description = "")

	public StatusEnum getStatus() {
		return status;
	}

	public void setStatus(StatusEnum status) {
		this.status = status;
	}

	public CompanyApplication memberRoles(List<CompanyRole> memberRoles) {
		this.memberRoles = memberRoles;
		return this;
	}

	public CompanyApplication addMemberRolesItem(CompanyRole memberRolesItem) {
		if (this.memberRoles == null) {
			this.memberRoles = new ArrayList<CompanyRole>();
		}
		this.memberRoles.add(memberRolesItem);
		return this;
	}

	/**
	 * Get memberRoles
	 * 
	 * @return memberRoles
	 **/
	@Schema(description = "")
	@Valid
	public List<CompanyRole> getMemberRoles() {
		return memberRoles;
	}

	public void setMemberRoles(List<CompanyRole> memberRoles) {
		this.memberRoles = memberRoles;
	}

	public CompanyApplication agreements(List<Agreement> agreements) {
		this.agreements = agreements;
		return this;
	}

	public CompanyApplication addAgreementsItem(Agreement agreementsItem) {
		if (this.agreements == null) {
			this.agreements = new ArrayList<Agreement>();
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
	public List<Agreement> getAgreements() {
		return agreements;
	}

	public void setAgreements(List<Agreement> agreements) {
		this.agreements = agreements;
	}

	@Override
	public boolean equals(java.lang.Object o) {
		if (this == o) {
			return true;
		}
		if (o == null || getClass() != o.getClass()) {
			return false;
		}
		CompanyApplication companyApplication = (CompanyApplication) o;
		return Objects.equals(this.applicationID, companyApplication.applicationID)
				&& Objects.equals(this.deputyAcknowledgement, companyApplication.deputyAcknowledgement)
				&& Objects.equals(this.status, companyApplication.status)
				&& Objects.equals(this.memberRoles, companyApplication.memberRoles)
				&& Objects.equals(this.agreements, companyApplication.agreements);
	}

	@Override
	public int hashCode() {
		return Objects.hash(applicationID, deputyAcknowledgement, status, memberRoles,
				agreements);
	}

	@Override
	public String toString() {
		StringBuilder sb = new StringBuilder();
		sb.append("class CompanyApplication {\n");

		sb.append("    applicationID: ").append(toIndentedString(applicationID)).append("\n");
		sb.append("    deputyAcknowledgement: ").append(toIndentedString(deputyAcknowledgement)).append("\n");
		sb.append("    status: ").append(toIndentedString(status)).append("\n");
		sb.append("    memberRoles: ").append(toIndentedString(memberRoles)).append("\n");
		sb.append("    agreements: ").append(toIndentedString(agreements)).append("\n");
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
	
	public CompanyApplication company(Company company) {
		this.company = company;
		return this;
	}

	public Company getCompany() {
		return company;
	}

	public void setCompany(Company company) {
		this.company = company;
	}
}
