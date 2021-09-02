package net.catenax.semantics.hub.model;

import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import org.openapitools.jackson.nullable.JsonNullable;
import javax.validation.Valid;
import javax.validation.constraints.*;

/**
 * Model
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.SpringCodegen", date = "2021-09-01T11:23:27.724046800+02:00[Europe/Berlin]")

public class Model   {
  @JsonProperty("id")
  private String id;

  @JsonProperty("publisher")
  private String publisher;

  @JsonProperty("version")
  private Integer version;

  @JsonProperty("name")
  private String name;

  @JsonProperty("private")
  private Boolean _private;

  /**
   * Gets or Sets type
   */
  public enum TypeEnum {
    BAMM("BAMM"),
    
    OWL("OWL");

    private String value;

    TypeEnum(String value) {
      this.value = value;
    }

    @JsonValue
    public String getValue() {
      return value;
    }

    @Override
    public String toString() {
      return String.valueOf(value);
    }

    @JsonCreator
    public static TypeEnum fromValue(String value) {
      for (TypeEnum b : TypeEnum.values()) {
        if (b.value.equals(value)) {
          return b;
        }
      }
      throw new IllegalArgumentException("Unexpected value '" + value + "'");
    }
  }

  @JsonProperty("type")
  private TypeEnum type;

  public Model id(String id) {
    this.id = id;
    return this;
  }

  /**
   * The ID of a model consists of the model namespace and the Aspect name.
   * @return id
  */
  @ApiModelProperty(value = "The ID of a model consists of the model namespace and the Aspect name.")


  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
  }

  public Model publisher(String publisher) {
    this.publisher = publisher;
    return this;
  }

  /**
   * The publisher name
   * @return publisher
  */
  @ApiModelProperty(value = "The publisher name")


  public String getPublisher() {
    return publisher;
  }

  public void setPublisher(String publisher) {
    this.publisher = publisher;
  }

  public Model version(Integer version) {
    this.version = version;
    return this;
  }

  /**
   * The version of the model. The version can be extracted from the raw model.
   * @return version
  */
  @ApiModelProperty(value = "The version of the model. The version can be extracted from the raw model.")


  public Integer getVersion() {
    return version;
  }

  public void setVersion(Integer version) {
    this.version = version;
  }

  public Model name(String name) {
    this.name = name;
    return this;
  }

  /**
   * Get name
   * @return name
  */
  @ApiModelProperty(value = "")


  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public Model _private(Boolean _private) {
    this._private = _private;
    return this;
  }

  /**
   * Get _private
   * @return _private
  */
  @ApiModelProperty(value = "")


  public Boolean getPrivate() {
    return _private;
  }

  public void setPrivate(Boolean _private) {
    this._private = _private;
  }

  public Model type(TypeEnum type) {
    this.type = type;
    return this;
  }

  /**
   * Get type
   * @return type
  */
  @ApiModelProperty(value = "")


  public TypeEnum getType() {
    return type;
  }

  public void setType(TypeEnum type) {
    this.type = type;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Model model = (Model) o;
    return Objects.equals(this.id, model.id) &&
        Objects.equals(this.publisher, model.publisher) &&
        Objects.equals(this.version, model.version) &&
        Objects.equals(this.name, model.name) &&
        Objects.equals(this._private, model._private) &&
        Objects.equals(this.type, model.type);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, publisher, version, name, _private, type);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Model {\n");
    
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    publisher: ").append(toIndentedString(publisher)).append("\n");
    sb.append("    version: ").append(toIndentedString(version)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    _private: ").append(toIndentedString(_private)).append("\n");
    sb.append("    type: ").append(toIndentedString(type)).append("\n");
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

