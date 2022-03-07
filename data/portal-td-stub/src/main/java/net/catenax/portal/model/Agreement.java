package net.catenax.portal.model;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import javax.persistence.DiscriminatorColumn;
import javax.persistence.DiscriminatorType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.Valid;
import javax.validation.constraints.NotNull;

import org.springframework.validation.annotation.Validated;

import com.fasterxml.jackson.annotation.JsonProperty;

import io.swagger.v3.oas.annotations.media.Schema;

/**
 * Agreement
 */
@Schema(description = "Agreement")
@Validated
@javax.annotation.Generated(value = "io.swagger.codegen.v3.generators.java.SpringCodegen", date = "2022-02-23T08:56:48.025Z[GMT]")

@Entity
@Table(name = "agreement")
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name = "ITEM_CATEGORY", discriminatorType = DiscriminatorType.INTEGER)
public class Agreement extends BaseEntity {

	@Id
	@JsonProperty("id")
	private String id = null;

	@JsonProperty("name")
	private String name = null;

	@ManyToOne(targetEntity = Company.class)
	@JsonProperty("issuer")
	private Company issuer = null;

	@OneToMany
	@JsonProperty("documents")
	@Valid
	private List<DocumentTemplate> documents = null;

	public Agreement id(String id) {
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

	public Agreement name(String name) {
		this.name = name;
		return this;
	}

	/**
	 * Get name
	 * 
	 * @return name
	 **/
	@Schema(required = true, description = "")
	@NotNull

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Agreement issuer(Company issuer) {
		this.issuer = issuer;
		return this;
	}

	/**
	 * Get issuer
	 * 
	 * @return issuer
	 **/
	@Schema(required = true, description = "")
	@NotNull

	@Valid
	public Company getIssuer() {
		return issuer;
	}

	public void setIssuer(Company issuer) {
		this.issuer = issuer;
	}

	public Agreement documents(List<DocumentTemplate> documents) {
		this.documents = documents;
		return this;
	}

	public Agreement addDocumentsItem(DocumentTemplate documentsItem) {
		if (this.documents == null) {
			this.documents = new ArrayList<DocumentTemplate>();
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
	public List<DocumentTemplate> getDocuments() {
		return documents;
	}

	public void setDocuments(List<DocumentTemplate> documents) {
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
		Agreement agreement = (Agreement) o;
		return Objects.equals(this.id, agreement.id) && Objects.equals(this.name, agreement.name)
				&& Objects.equals(this.issuer, agreement.issuer) && Objects.equals(this.documents, agreement.documents);
	}

	@Override
	public int hashCode() {
		return Objects.hash(id, name, issuer, documents);
	}

	@Override
	public String toString() {
		StringBuilder sb = new StringBuilder();
		sb.append("class Agreement {\n");

		sb.append("    id: ").append(toIndentedString(id)).append("\n");
		sb.append("    name: ").append(toIndentedString(name)).append("\n");
		sb.append("    issuer: ").append(toIndentedString(issuer)).append("\n");
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
