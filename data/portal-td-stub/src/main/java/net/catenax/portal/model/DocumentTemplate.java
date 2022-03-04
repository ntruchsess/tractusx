package net.catenax.portal.model;

import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;
import org.springframework.validation.annotation.Validated;

import com.fasterxml.jackson.annotation.JsonProperty;

import io.swagger.v3.oas.annotations.media.Schema;

/**
 * Document
 */
@Schema(description = "Document")
@Validated
@javax.annotation.Generated(value = "io.swagger.codegen.v3.generators.java.SpringCodegen", date = "2022-02-23T08:56:48.025Z[GMT]")

@Entity
@Table(name = "document_template")
public class DocumentTemplate extends BaseEntity {
	@Id
	@JsonProperty("UUID")
	@GeneratedValue(generator = "UUID")
	@GenericGenerator(name = "UUID", strategy = "org.hibernate.id.UUIDGenerator")
	@Column(name = "id", updatable = false, nullable = false)
	private String UUID = null;

	@JsonProperty("name")
	@Column(name = "documentTemplateName", updatable = true, nullable = false)
	private String name = null;

	@JsonProperty("version")
	@Column(name = "documentTemplateVersion", updatable = true, nullable = false)
	private String version = null;

	public DocumentTemplate UUID(String UUID) {
		this.UUID = UUID;
		return this;
	}

	/**
	 * Get UUID
	 * 
	 * @return UUID
	 **/
	@Schema(description = "")

	public String getUUID() {
		return UUID;
	}

	public void setUUID(String UUID) {
		this.UUID = UUID;
	}

	public DocumentTemplate name(String name) {
		this.name = name;
		return this;
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

	public DocumentTemplate version(String version) {
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

	@Override
	public boolean equals(java.lang.Object o) {
		if (this == o) {
			return true;
		}
		if (o == null || getClass() != o.getClass()) {
			return false;
		}
		DocumentTemplate documentTemplate = (DocumentTemplate) o;
		return Objects.equals(this.UUID, documentTemplate.UUID) && Objects.equals(this.name, documentTemplate.name)
				&& Objects.equals(this.version, documentTemplate.version);
	}

	@Override
	public int hashCode() {
		return Objects.hash(UUID, name, version);
	}

	@Override
	public String toString() {
		StringBuilder sb = new StringBuilder();
		sb.append("class DocumentTemplate {\n");

		sb.append("    UUID: ").append(toIndentedString(UUID)).append("\n");
		sb.append("    name: ").append(toIndentedString(name)).append("\n");
		sb.append("    version: ").append(toIndentedString(version)).append("\n");
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
