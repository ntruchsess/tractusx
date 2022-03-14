package net.catenax.portal.model;

import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.validation.annotation.Validated;

import com.fasterxml.jackson.annotation.JsonProperty;

import io.swagger.v3.oas.annotations.media.Schema;

/**
 * Country
 */
@Schema(description = "Country")
@Validated
@javax.annotation.Generated(value = "io.swagger.codegen.v3.generators.java.SpringCodegen", date = "2022-02-23T08:56:48.025Z[GMT]")

@Entity
@Table(name = "country")
public class Country {

	@Id
	@JsonProperty("nameEN")
	@Column(name = "country_name_en")
	private String nameEN = null;
	
	@JsonProperty("nameDE")
	@Column(name = "country_name_de")
	private String nameDE = null;

	@JsonProperty("Alpha2Code")
	@Column(name = "alpha_2_code")
	private String alpha2Code = null;
	
	@JsonProperty("Alpha3Code")
	@Column(name = "alpha_3_code")
	private String alpha3Code = null;

	public Country() {
		
	}
	
	public Country nameDE(String nameDE) {
		this.nameDE = nameDE;
		return this;
	}

	/**
	 * Get nameDE
	 * 
	 * @return nameDE
	 **/
	@Schema(description = "")

	public String getNameDE() {
		return nameDE;
	}

	public void setNameDE(String nameDE) {
		this.nameDE = nameDE;
	}

	public Country nameEN(String nameEN) {
		this.nameEN = nameEN;
		return this;
	}

	/**
	 * Get nameEN
	 * 
	 * @return nameEN
	 **/
	@Schema(description = "")

	public String getNameEN() {
		return nameEN;
	}

	public void setNameEN(String nameEN) {
		this.nameEN = nameEN;
	}
	
	public Country alpha2Code(String code) {
		this.alpha2Code = code;
		return this;
	}

	public String getAlpha2Code() {
		return alpha2Code;
	}

	public void setAlpha2Code(String alpha2Code) {
		this.alpha2Code = alpha2Code;
	}
	
	public Country alpha3Code(String code) {
		this.alpha3Code = code;
		return this;
	}

	public String getAlpha3Code() {
		return alpha3Code;
	}

	public void setAlpha3Code(String alpha3Code) {
		this.alpha3Code = alpha3Code;
	}

	
}
