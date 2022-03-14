package net.catenax.portal.model;

import java.util.Objects;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.SecondaryTable;
import javax.validation.Valid;

import org.springframework.validation.annotation.Validated;

import com.fasterxml.jackson.annotation.JsonProperty;

import io.swagger.v3.oas.annotations.media.Schema;

/**
 * Usage Agreement (e. g. for Application)
 */
@Schema(description = "Usage Agreement (e. g. for Application)")
@Validated
@javax.annotation.Generated(value = "io.swagger.codegen.v3.generators.java.SpringCodegen", date = "2022-02-23T08:56:48.025Z[GMT]")

@Entity
@SecondaryTable(name = "usage_agreement", pkJoinColumns = {
		@PrimaryKeyJoinColumn(name = "id", referencedColumnName = "id") })
@DiscriminatorValue("3")
public class UsageAgreement extends Agreement {

	@ManyToOne(targetEntity = App.class)
	@JsonProperty("app")
	private App app = null;

	public UsageAgreement app(App app) {
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
	public App getApp() {
		return app;
	}

	public void setApp(App app) {
		this.app = app;
	}

	@Override
	public boolean equals(java.lang.Object o) {
		if (this == o) {
			return true;
		}
		if (o == null || getClass() != o.getClass()) {
			return false;
		}
		UsageAgreement usageAgreement = (UsageAgreement) o;
		return Objects.equals(this.app, usageAgreement.app) && super.equals(o);
	}

	@Override
	public int hashCode() {
		return Objects.hash(app, super.hashCode());
	}

	@Override
	public String toString() {
		StringBuilder sb = new StringBuilder();
		sb.append("class UsageAgreement {\n");
		sb.append("    ").append(toIndentedString(super.toString())).append("\n");
		sb.append("    app: ").append(toIndentedString(app)).append("\n");
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
