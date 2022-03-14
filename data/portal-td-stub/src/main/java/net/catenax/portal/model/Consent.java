package net.catenax.portal.model;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.Valid;
import javax.validation.constraints.NotNull;

import org.springframework.validation.annotation.Validated;
import org.threeten.bp.OffsetDateTime;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonValue;

import io.swagger.v3.oas.annotations.media.Schema;

/**
 * Consent of a Agreement
 */
@Schema(description = "Consent of a Agreement")
@Validated
@javax.annotation.Generated(value = "io.swagger.codegen.v3.generators.java.SpringCodegen", date = "2022-02-23T08:56:48.025Z[GMT]")

@Entity
@Table(name = "consent")
public class Consent extends BaseEntity {

	@Id
	@JsonProperty("id")
	private String id = null;

	@ManyToOne(targetEntity = Company.class)
	@JsonProperty("company")
	private Company company = null;

	@ManyToOne(targetEntity = User.class)
	@JsonProperty("user")
	private User user = null;

	@ManyToOne(targetEntity = Agreement.class)
	@JsonProperty("agreement")
	private Agreement agreement = null;

	@JsonProperty("content")
	private String content = null;

	/**
	 * Gets or Sets target
	 */
	public enum TargetEnum {
		COMPANY("COMPANY"),

		USER("USER");

		private String value;

		TargetEnum(String value) {
			this.value = value;
		}

		@Override
		@JsonValue
		public String toString() {
			return String.valueOf(value);
		}

		@JsonCreator
		public static TargetEnum fromValue(String text) {
			for (TargetEnum b : TargetEnum.values()) {
				if (String.valueOf(b.value).equals(text)) {
					return b;
				}
			}
			return null;
		}
	}

	@Enumerated(EnumType.STRING)
	@JsonProperty("target")
	private TargetEnum target = null;

	/**
	 * Gets or Sets status
	 */
	public enum StatusEnum {
		ACCEPTED("ACCEPTED"),

		DECLINED("DECLINED");

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

	@Enumerated(EnumType.STRING)
	@JsonProperty("status")
	private StatusEnum status = null;

	@JsonProperty("timestamp")
	private OffsetDateTime timestamp = null;

	@OneToOne(targetEntity = Document.class)
	@JsonProperty("documents")
	@Valid
	private List<Document> documents = null;

	public Consent id(String id) {
		this.id = id;
		return this;
	}

	/**
	 * Unique Identifier
	 * 
	 * @return id
	 **/
	@Schema(required = true, description = "Unique Identifier")
	@NotNull

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public Consent company(Company company) {
		this.company = company;
		return this;
	}

	/**
	 * Get company
	 * 
	 * @return company
	 **/
	@Schema(required = true, description = "")
	@NotNull

	@Valid
	public Company getCompany() {
		return company;
	}

	public void setCompany(Company company) {
		this.company = company;
	}

	public Consent user(User user) {
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

	public Consent agreement(Agreement agreement) {
		this.agreement = agreement;
		return this;
	}

	/**
	 * Get agreement
	 * 
	 * @return agreement
	 **/
	@Schema(required = true, description = "")
	@NotNull

	@Valid
	public Agreement getAgreement() {
		return agreement;
	}

	public void setAgreement(Agreement agreement) {
		this.agreement = agreement;
	}

	public Consent content(String content) {
		this.content = content;
		return this;
	}

	/**
	 * Get content
	 * 
	 * @return content
	 **/
	@Schema(description = "")

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public Consent target(TargetEnum target) {
		this.target = target;
		return this;
	}

	/**
	 * Get target
	 * 
	 * @return target
	 **/
	@Schema(description = "")

	public TargetEnum getTarget() {
		return target;
	}

	public void setTarget(TargetEnum target) {
		this.target = target;
	}

	public Consent status(StatusEnum status) {
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

	public Consent timestamp(OffsetDateTime timestamp) {
		this.timestamp = timestamp;
		return this;
	}

	/**
	 * Get timestamp
	 * 
	 * @return timestamp
	 **/
	@Schema(required = true, description = "")
	@NotNull

	@Valid
	public OffsetDateTime getTimestamp() {
		return timestamp;
	}

	public void setTimestamp(OffsetDateTime timestamp) {
		this.timestamp = timestamp;
	}

	public Consent documents(List<Document> documents) {
		this.documents = documents;
		return this;
	}

	public Consent addDocumentsItem(Document documentsItem) {
		if (this.documents == null) {
			this.documents = new ArrayList<Document>();
		}
		this.documents.add(documentsItem);
		return this;
	}

	/**
	 * Get documents
	 * 
	 * @return documents
	 **/
	@Schema(description = "")
	@Valid
	public List<Document> getDocuments() {
		return documents;
	}

	public void setDocuments(List<Document> documents) {
		this.documents = documents;
	}

	@Override
	public boolean equals(java.lang.Object o) {
		if (this == o) {
			return true;
		}
		if (o == null || getClass() != o.getClass()) {
			return false;
		}
		Consent consent = (Consent) o;
		return Objects.equals(this.id, consent.id) && Objects.equals(this.company, consent.company)
				&& Objects.equals(this.user, consent.user) && Objects.equals(this.agreement, consent.agreement)
				&& Objects.equals(this.content, consent.content) && Objects.equals(this.target, consent.target)
				&& Objects.equals(this.status, consent.status) && Objects.equals(this.timestamp, consent.timestamp)
				&& Objects.equals(this.documents, consent.documents);
	}

	@Override
	public int hashCode() {
		return Objects.hash(id, company, user, agreement, content, target, status, timestamp, documents);
	}

	@Override
	public String toString() {
		StringBuilder sb = new StringBuilder();
		sb.append("class Consent {\n");

		sb.append("    id: ").append(toIndentedString(id)).append("\n");
		sb.append("    company: ").append(toIndentedString(company)).append("\n");
		sb.append("    user: ").append(toIndentedString(user)).append("\n");
		sb.append("    agreement: ").append(toIndentedString(agreement)).append("\n");
		sb.append("    content: ").append(toIndentedString(content)).append("\n");
		sb.append("    target: ").append(toIndentedString(target)).append("\n");
		sb.append("    status: ").append(toIndentedString(status)).append("\n");
		sb.append("    timestamp: ").append(toIndentedString(timestamp)).append("\n");
		sb.append("    documents: ").append(toIndentedString(documents)).append("\n");
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
