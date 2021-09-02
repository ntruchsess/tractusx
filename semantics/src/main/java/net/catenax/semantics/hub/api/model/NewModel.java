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
 * NewModel
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.SpringCodegen", date = "2021-09-01T11:23:27.724046800+02:00[Europe/Berlin]")

public class NewModel   {
  @JsonProperty("publisher")
  private String publisher;

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

  @JsonProperty("model")
  private String model;

  public NewModel publisher(String publisher) {
    this.publisher = publisher;
    return this;
  }

  /**
   * Get publisher
   * @return publisher
  */
  @ApiModelProperty(value = "")


  public String getPublisher() {
    return publisher;
  }

  public void setPublisher(String publisher) {
    this.publisher = publisher;
  }

  public NewModel _private(Boolean _private) {
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

  public NewModel type(TypeEnum type) {
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

  public NewModel model(String model) {
    this.model = model;
    return this;
  }

  /**
   * The actual model definition in the format defined by the type property.
   * @return model
  */
  @ApiModelProperty(value = "The actual model definition in the format defined by the type property.")


  public String getModel() {
    return model;
  }

  public void setModel(String model) {
    this.model = model;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    NewModel newModel = (NewModel) o;
    return Objects.equals(this.publisher, newModel.publisher) &&
        Objects.equals(this._private, newModel._private) &&
        Objects.equals(this.type, newModel.type) &&
        Objects.equals(this.model, newModel.model);
  }

  @Override
  public int hashCode() {
    return Objects.hash(publisher, _private, type, model);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class NewModel {\n");
    
    sb.append("    publisher: ").append(toIndentedString(publisher)).append("\n");
    sb.append("    _private: ").append(toIndentedString(_private)).append("\n");
    sb.append("    type: ").append(toIndentedString(type)).append("\n");
    sb.append("    model: ").append(toIndentedString(model)).append("\n");
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

