package net.catenax.portal.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.validation.annotation.Validated;

import com.fasterxml.jackson.annotation.JsonProperty;

import io.swagger.v3.oas.annotations.media.Schema;

/**
 * Language
 */
@Schema(description = "Language")
@Validated
@javax.annotation.Generated(value = "io.swagger.codegen.v3.generators.java.SpringCodegen", date = "2022-02-23T08:56:48.025Z[GMT]")

@Entity
@Table(name = "language")
public class Language {

	@Id
	@JsonProperty("shortName")
	@Column(name = "short_name")
	private String shortName = null;

	@JsonProperty("longNameDe")
	@Column(name = "long_name_de")
	private String longNameDe = null;
	
	@JsonProperty("longNameEn")
	@Column(name = "long_name_en")
	private String longNameEn = null;

	public Language() {
		
	}
	
	public Language shortName(String shortName) {
		this.shortName = shortName;
		return this;
	}
	
	public Language  longNameDe(String name) {
		this.longNameDe = name;
		return this;
	}
	
	public Language  longNameEn(String name) {
		this.longNameEn = name;
		return this;
	}

	public String getShortName() {
		return shortName;
	}

	public void setShortName(String shortName) {
		this.shortName = shortName;
	}

	public String getLongNameDe() {
		return longNameDe;
	}

	public void setLongNameDe(String longNameDe) {
		this.longNameDe = longNameDe;
	}

	public String getLongNameEn() {
		return longNameEn;
	}

	public void setLongNameEn(String longNameEn) {
		this.longNameEn = longNameEn;
	}
}
