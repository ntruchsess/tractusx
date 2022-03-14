package net.catenax.portal.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Gets or Sets CompanyRole
 */
@Entity
@Table(name = "company_role")
public class CompanyRole extends BaseEntity {

	@Id
	@JsonProperty("companyRole")
	private String companyRole;

	@JsonProperty("nameDe")
	@Column(name = "name_de", updatable = true, nullable = false)
	private String nameDe;

	@JsonProperty("nameEn")
	@Column(name = "name_en", updatable = true, nullable = false)
	private String nameEn;

	public CompanyRole() {

	}

	public String getCompanyRole() {
		return companyRole;
	}

	public void setCompanyRole(String companyRole) {
		this.companyRole = companyRole;
	}

	public String getNameDe() {
		return nameDe;
	}

	public void setNameDe(String nameDe) {
		this.nameDe = nameDe;
	}

	public String getNameEn() {
		return nameEn;
	}

	public void setNameEn(String nameEn) {
		this.nameEn = nameEn;
	}
}
