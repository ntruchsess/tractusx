//
// Copyright (c) 2021 T-Systems International GmbH (Catena-X Consortium)
//
// See the AUTHORS file(s) distributed with this work for additional
// information regarding authorship.
//
// See the LICENSE file(s) distributed with this work for
// additional information regarding license terms.
//

package net.catenax.semantics.hub.service;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import javax.persistence.*;
import java.net.URI;

/**
 * This class implements a model.
 */
@Data
@Entity
@Table
public class ModelBean implements Model {

    @Id
    @JsonProperty("id")
    private URI id;

    /**
     * Constructor for OfferedResource.
     */
    public ModelBean() {

    }

    /**
     * Constructor with parameters for ModelBean.
     *
     * @param id the model id
     */
    public ModelBean(URI id) {
        this.id = id;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public URI getId() {
        return id;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public void setId(URI id) {
        this.id = id;
    }

}
