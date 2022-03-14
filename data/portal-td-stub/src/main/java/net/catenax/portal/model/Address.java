package net.catenax.portal.model;

import java.math.BigDecimal;
import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.Valid;

import org.springframework.validation.annotation.Validated;

import com.fasterxml.jackson.annotation.JsonProperty;

import io.swagger.v3.oas.annotations.media.Schema;

/**
 * Address
 */
@Schema(description = "Address")
@Validated
@javax.annotation.Generated(value = "io.swagger.codegen.v3.generators.java.SpringCodegen", date = "2022-02-23T08:56:48.025Z[GMT]")

@Entity
@Table(name = "address")
public class Address extends BaseEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	@JsonProperty("streetName")
	private String streetName = null;

	@JsonProperty("streetNumber")
	private String streetNumber = null;

	@JsonProperty("streetAdditional")
	private String streetAdditional = null;

	@JsonProperty("zipCode")
	private BigDecimal zipCode = null;

	@JsonProperty("city")
	private String city = null;

	@JsonProperty("region")
	private String region = null;

	@ManyToOne
	@JsonProperty("country")
	private Country country = null;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Address streetName(String streetName) {
		this.streetName = streetName;
		return this;
	}

	/**
	 * Get streetName
	 * 
	 * @return streetName
	 **/
	@Schema(description = "")

	public String getStreetName() {
		return streetName;
	}

	public void setStreetName(String streetName) {
		this.streetName = streetName;
	}

	public Address streetNumber(String streetNumber) {
		this.streetNumber = streetNumber;
		return this;
	}

	/**
	 * Get streetNumber
	 * 
	 * @return streetNumber
	 **/
	@Schema(description = "")

	public String getStreetNumber() {
		return streetNumber;
	}

	public void setStreetNumber(String streetNumber) {
		this.streetNumber = streetNumber;
	}

	public Address streetAdditional(String streetAdditional) {
		this.streetAdditional = streetAdditional;
		return this;
	}

	/**
	 * Get streetAdditional
	 * 
	 * @return streetAdditional
	 **/
	@Schema(description = "")

	public String getStreetAdditional() {
		return streetAdditional;
	}

	public void setStreetAdditional(String streetAdditional) {
		this.streetAdditional = streetAdditional;
	}

	public Address zipCode(BigDecimal zipCode) {
		this.zipCode = zipCode;
		return this;
	}

	/**
	 * Get zipCode
	 * 
	 * @return zipCode
	 **/
	@Schema(description = "")

	@Valid
	public BigDecimal getZipCode() {
		return zipCode;
	}

	public void setZipCode(BigDecimal zipCode) {
		this.zipCode = zipCode;
	}

	public Address city(String city) {
		this.city = city;
		return this;
	}

	/**
	 * Get city
	 * 
	 * @return city
	 **/
	@Schema(description = "")

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public Address region(String region) {
		this.region = region;
		return this;
	}

	/**
	 * Get region
	 * 
	 * @return region
	 **/
	@Schema(description = "")

	public String getRegion() {
		return region;
	}

	public void setRegion(String region) {
		this.region = region;
	}

	public Address country(Country country) {
		this.country = country;
		return this;
	}

	/**
	 * Get country
	 * 
	 * @return country
	 **/
	@Schema(description = "")

	@Valid
	public Country getCountry() {
		return country;
	}

	public void setCountry(Country country) {
		this.country = country;
	}

	@Override
	public boolean equals(java.lang.Object o) {
		if (this == o) {
			return true;
		}
		if (o == null || getClass() != o.getClass()) {
			return false;
		}
		Address address = (Address) o;
		return Objects.equals(this.streetName, address.streetName)
				&& Objects.equals(this.streetNumber, address.streetNumber)
				&& Objects.equals(this.streetAdditional, address.streetAdditional)
				&& Objects.equals(this.zipCode, address.zipCode) && Objects.equals(this.city, address.city)
				&& Objects.equals(this.region, address.region) && Objects.equals(this.country, address.country);
	}

	@Override
	public int hashCode() {
		return Objects.hash(streetName, streetNumber, streetAdditional, zipCode, city, region, country);
	}

	@Override
	public String toString() {
		StringBuilder sb = new StringBuilder();
		sb.append("class Address {\n");

		sb.append("    streetName: ").append(toIndentedString(streetName)).append("\n");
		sb.append("    streetNumber: ").append(toIndentedString(streetNumber)).append("\n");
		sb.append("    streetAdditional: ").append(toIndentedString(streetAdditional)).append("\n");
		sb.append("    zipCode: ").append(toIndentedString(zipCode)).append("\n");
		sb.append("    city: ").append(toIndentedString(city)).append("\n");
		sb.append("    region: ").append(toIndentedString(region)).append("\n");
		sb.append("    country: ").append(toIndentedString(country)).append("\n");
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
