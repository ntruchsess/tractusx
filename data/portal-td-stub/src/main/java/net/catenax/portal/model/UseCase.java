package net.catenax.portal.model;

import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.validation.annotation.Validated;

import com.fasterxml.jackson.annotation.JsonProperty;

import io.swagger.v3.oas.annotations.media.Schema;

/**
 * Use-Case
 */
@Schema(description = "Use-Case")
@Validated
@javax.annotation.Generated(value = "io.swagger.codegen.v3.generators.java.SpringCodegen", date = "2022-02-23T08:56:48.025Z[GMT]")

@Entity
@Table(name = "use_case")
public class UseCase extends BaseEntity {

	@Id
	@JsonProperty("name")
	private String name = null;

	@JsonProperty("shortName")
	private String shortName = null;

	public UseCase name(String name) {
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

	public UseCase shortName(String shortName) {
		this.shortName = shortName;
		return this;
	}

	/**
	 * Get shortName
	 * 
	 * @return shortName
	 **/
	@Schema(description = "")

	public String getShortName() {
		return shortName;
	}

	public void setShortName(String shortName) {
		this.shortName = shortName;
	}

	@Override
	public boolean equals(java.lang.Object o) {
		if (this == o) {
			return true;
		}
		if (o == null || getClass() != o.getClass()) {
			return false;
		}
		UseCase useCase = (UseCase) o;
		return Objects.equals(this.name, useCase.name) && Objects.equals(this.shortName, useCase.shortName);
	}

	@Override
	public int hashCode() {
		return Objects.hash(name, shortName);
	}

	@Override
	public String toString() {
		StringBuilder sb = new StringBuilder();
		sb.append("class UseCase {\n");

		sb.append("    name: ").append(toIndentedString(name)).append("\n");
		sb.append("    shortName: ").append(toIndentedString(shortName)).append("\n");
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
