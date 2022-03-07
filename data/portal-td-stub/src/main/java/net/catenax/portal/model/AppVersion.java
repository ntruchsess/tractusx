package net.catenax.portal.model;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.Valid;

import org.hibernate.annotations.GenericGenerator;
import org.springframework.validation.annotation.Validated;

import com.fasterxml.jackson.annotation.JsonProperty;

import io.swagger.v3.oas.annotations.media.Schema;

/**
 * Application Version
 */
@Schema(description = "Application Version")
@Validated
@javax.annotation.Generated(value = "io.swagger.codegen.v3.generators.java.SpringCodegen", date = "2022-02-23T08:56:48.025Z[GMT]")

@Entity
@Table(name = "app_version")
public class AppVersion extends BaseEntity {

	@Id
	@GeneratedValue(generator = "UUID")
	@GenericGenerator(name = "UUID", strategy = "org.hibernate.id.UUIDGenerator")
	@JsonProperty("uuid")
	private String uuid = null;

	@JsonProperty("version")
	private String version = null;

	// @OneToOne(targetEntity = App.class)
	@JsonProperty("app")
	private String app = null;

	@ManyToMany(targetEntity = AppDescription.class)
	@JsonProperty("description")
	@Valid
	private List<AppDescription> description = null;
	
	public AppVersion() {
		
	}
	
	public AppVersion(App app) {
		this.app = app.getUuid();
	}

	public AppVersion version(String uuid, String version) {
		this.uuid = uuid;
		this.version = version;
		return this;
	}

	/**
	 * Get version
	 * 
	 * @return version
	 **/
	@Schema(description = "")

	public String getVersion() {
		return version;
	}

	public void setVersion(String version) {
		this.version = version;
	}

	public AppVersion app(String app) {
		this.app = app;
		return this;
	}

	/**
	 * Get app
	 * 
	 * @return app
	 **/
	@Schema(description = "")

	@Valid
	public String getApp() {
		return app;
	}

	public void setApp(String app) {
		this.app = app;
	}

	public AppVersion description(List<AppDescription> description) {
		this.description = description;
		return this;
	}

	public AppVersion addDescriptionItem(AppDescription descriptionItem) {
		if (this.description == null) {
			this.description = new ArrayList<AppDescription>();
		}
		this.description.add(descriptionItem);
		return this;
	}

	/**
	 * Get description
	 * 
	 * @return description
	 **/
	@Schema(description = "")
	@Valid
	public List<AppDescription> getDescription() {
		return description;
	}

	public void setDescription(List<AppDescription> description) {
		this.description = description;
	}

	@Override
	public boolean equals(java.lang.Object o) {
		if (this == o) {
			return true;
		}
		if (o == null || getClass() != o.getClass()) {
			return false;
		}
		AppVersion appVersion = (AppVersion) o;
		return Objects.equals(this.version, appVersion.version) && Objects.equals(this.app, appVersion.app)
				&& Objects.equals(this.description, appVersion.description);
	}

	@Override
	public int hashCode() {
		return Objects.hash(version, app, description);
	}

	@Override
	public String toString() {
		StringBuilder sb = new StringBuilder();
		sb.append("class AppVersion {\n");

		sb.append("    version: ").append(toIndentedString(version)).append("\n");
		sb.append("    app: ").append(toIndentedString(app)).append("\n");
		sb.append("    description: ").append(toIndentedString(description)).append("\n");
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
