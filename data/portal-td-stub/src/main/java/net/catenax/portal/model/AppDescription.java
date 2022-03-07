package net.catenax.portal.model;

import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.Valid;

import org.hibernate.annotations.GenericGenerator;
import org.springframework.validation.annotation.Validated;

import com.fasterxml.jackson.annotation.JsonProperty;

import io.swagger.v3.oas.annotations.media.Schema;

/**
 * Application Description
 */
@Schema(description = "Application Description")
@Validated
@javax.annotation.Generated(value = "io.swagger.codegen.v3.generators.java.SpringCodegen", date = "2022-02-23T08:56:48.025Z[GMT]")

@Entity
@Table(name = "app_description")
public class AppDescription extends BaseEntity {

	@Id
	@GeneratedValue(generator = "UUID")
	@GenericGenerator(name = "UUID", strategy = "org.hibernate.id.UUIDGenerator")
	@JsonProperty("uuid")
	private String uuid = null;

	// @OneToOne(targetEntity = App.class)
	@JsonProperty("app")
	private String app = null;

	@ManyToOne(targetEntity = Language.class)
	@JsonProperty("language")
	private Language language = null;

	@JsonProperty("descriptionShort")
	@Column(name = "description_short")
	private String descriptionShort = null;
	
	@JsonProperty("descriptionLong")
	@Column(name = "description_long", length = 4096)
	private String descriptionLong = null;
	
	public AppDescription() {
		
	}
	
	public AppDescription(App app) {
		this.app = app.getUuid();
	}

	public AppDescription uuid(String uuid) {
		this.uuid = uuid;
		return this;
	}

	public AppDescription descriptionShort(String descriptionShort) {
		this.descriptionShort = descriptionShort;
		return this;
	}
	
	public AppDescription descriptionLong(String descriptionLong) {
		this.descriptionLong = descriptionLong;
		return this;
	}

	public AppDescription language(Language language) {
		this.language = language;
		return this;
	}

	
	
	public String getUuid() {
		return uuid;
	}

	public void setUuid(String uuid) {
		this.uuid = uuid;
	}

	public String getApp() {
		return app;
	}

	public void setApp(String app) {
		this.app = app;
	}

	public String getDescriptionShort() {
		return descriptionShort;
	}

	public void setDescriptionShort(String descriptionShort) {
		this.descriptionShort = descriptionShort;
	}

	public String getDescriptionLong() {
		return descriptionLong;
	}

	public void setDescriptionLong(String descriptionLong) {
		this.descriptionLong = descriptionLong;
	}

	@Schema(description = "")

	@Valid
	public Language getLanguage() {
		return language;
	}

	public void setLanguage(Language language) {
		this.language = language;
	}

	@Override
	public boolean equals(java.lang.Object o) {
		if (this == o) {
			return true;
		}
		if (o == null || getClass() != o.getClass()) {
			return false;
		}
		AppDescription appDescription = (AppDescription) o;
		return Objects.equals(this.descriptionShort, appDescription.descriptionShort) 
				&& Objects.equals(this.descriptionLong, appDescription.descriptionLong)
				&& Objects.equals(this.language, appDescription.language);
	}

	@Override
	public int hashCode() {
		return Objects.hash(language, descriptionShort, descriptionLong);
	}

	@Override
	public String toString() {
		StringBuilder sb = new StringBuilder();
		sb.append("class AppDescription {\n");

		sb.append("    descriptionShort: ").append(toIndentedString(descriptionShort)).append("\n");
		sb.append("    descriptionLong: ").append(toIndentedString(descriptionLong)).append("\n");
		sb.append("    language: ").append(toIndentedString(language)).append("\n");
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
