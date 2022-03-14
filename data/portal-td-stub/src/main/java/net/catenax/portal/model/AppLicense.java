package net.catenax.portal.model;

import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;
import org.springframework.validation.annotation.Validated;

import com.fasterxml.jackson.annotation.JsonProperty;

import io.swagger.v3.oas.annotations.media.Schema;

/**
 * Application License
 */
@Schema(description = "Application License")
@Validated
@javax.annotation.Generated(value = "io.swagger.codegen.v3.generators.java.SpringCodegen", date = "2022-02-23T08:56:48.025Z[GMT]")

@Entity
@Table(name = "app_license")
public class AppLicense extends BaseEntity {

	@Id
	@GeneratedValue(generator = "UUID")
	@GenericGenerator(name = "UUID", strategy = "org.hibernate.id.UUIDGenerator")
	@JsonProperty("uuid")
	private String uuid = null;

	@JsonProperty("licenseText")
	private String licenseText = null;

	public AppLicense uuid(String uuid) {
		this.uuid = uuid;
		return this;
	}
	
	public AppLicense licenseText(String licenseText) {
		this.licenseText = licenseText;
		return this;
	}

	/**
	 * Get licenseText
	 * 
	 * @return licenseText
	 **/
	@Schema(description = "")

	public String getLicenseText() {
		return licenseText;
	}

	public void setLicenseText(String licenseText) {
		this.licenseText = licenseText;
	}

	@Override
	public boolean equals(java.lang.Object o) {
		if (this == o) {
			return true;
		}
		if (o == null || getClass() != o.getClass()) {
			return false;
		}
		AppLicense appLicense = (AppLicense) o;
		return Objects.equals(this.licenseText, appLicense.licenseText);
	}

	@Override
	public int hashCode() {
		return Objects.hash(licenseText);
	}

	@Override
	public String toString() {
		StringBuilder sb = new StringBuilder();
		sb.append("class AppLicense {\n");

		sb.append("    licenseText: ").append(toIndentedString(licenseText)).append("\n");
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
