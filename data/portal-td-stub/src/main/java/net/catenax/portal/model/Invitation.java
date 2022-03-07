package net.catenax.portal.model;

import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.Valid;
import javax.validation.constraints.NotNull;

import org.hibernate.annotations.GenericGenerator;
import org.springframework.validation.annotation.Validated;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonValue;

import io.swagger.v3.oas.annotations.media.Schema;

/**
 * Invitation
 */
@Schema(description = "Invitation")
@Validated
@javax.annotation.Generated(value = "io.swagger.codegen.v3.generators.java.SpringCodegen", date = "2022-02-23T08:56:48.025Z[GMT]")

@Entity
@Table(name = "invitation")
public class Invitation extends BaseEntity {

	@Id
	@GeneratedValue(generator = "UUID")
	@GenericGenerator(name = "UUID", strategy = "org.hibernate.id.UUIDGenerator")
	@JsonProperty("uuid")
	private String uuid = null;

	@OneToOne(targetEntity = User.class)
	@JsonProperty("user")
	private User user = null;

	@ManyToOne(targetEntity = CompanyApplication.class)
	@JsonProperty("application")
	private CompanyApplication application = null;

	/**
	 * Gets or Sets status
	 */
	public enum StatusEnum {
		CREATED("CREATED"),

		SEND("SEND"),

		USED("USED");

		private String value;

		StatusEnum(String value) {
			this.value = value;
		}

		@Override
		@JsonValue
		public String toString() {
			return String.valueOf(value);
		}

		@JsonCreator
		public static StatusEnum fromValue(String text) {
			for (StatusEnum b : StatusEnum.values()) {
				if (String.valueOf(b.value).equals(text)) {
					return b;
				}
			}
			return null;
		}
	}

	@JsonProperty("status")
	private StatusEnum status = null;

	public Invitation uuid(String uuid) {
		this.uuid = uuid;
		return this;
	}

	/**
	 * Unique Identifier
	 * 
	 * @return uuid
	 **/
	@Schema(required = true, description = "Unique Identifier")
	@NotNull

	public String getUuid() {
		return uuid;
	}

	public void setUuid(String uuid) {
		this.uuid = uuid;
	}

	public Invitation user(User user) {
		this.user = user;
		return this;
	}

	/**
	 * Get user
	 * 
	 * @return user
	 **/
	@Schema(required = true, description = "")
	@NotNull

	@Valid
	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Invitation application(CompanyApplication application) {
		this.application = application;
		return this;
	}

	/**
	 * Get application
	 * 
	 * @return application
	 **/
	@Schema(description = "")

	@Valid
	public CompanyApplication getApplication() {
		return application;
	}

	public void setApplication(CompanyApplication application) {
		this.application = application;
	}

	public Invitation status(StatusEnum status) {
		this.status = status;
		return this;
	}

	/**
	 * Get status
	 * 
	 * @return status
	 **/
	@Schema(required = true, description = "")
	@NotNull

	public StatusEnum getStatus() {
		return status;
	}

	public void setStatus(StatusEnum status) {
		this.status = status;
	}

	@Override
	public boolean equals(java.lang.Object o) {
		if (this == o) {
			return true;
		}
		if (o == null || getClass() != o.getClass()) {
			return false;
		}
		Invitation invitation = (Invitation) o;
		return Objects.equals(this.uuid, invitation.uuid) && Objects.equals(this.user, invitation.user)
				&& Objects.equals(this.application, invitation.application)
				&& Objects.equals(this.status, invitation.status);
	}

	@Override
	public int hashCode() {
		return Objects.hash(uuid, user, application, status);
	}

	@Override
	public String toString() {
		StringBuilder sb = new StringBuilder();
		sb.append("class Invitation {\n");

		sb.append("    uuid: ").append(toIndentedString(uuid)).append("\n");
		sb.append("    user: ").append(toIndentedString(user)).append("\n");
		sb.append("    application: ").append(toIndentedString(application)).append("\n");
		sb.append("    status: ").append(toIndentedString(status)).append("\n");
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
