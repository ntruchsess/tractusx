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

import java.net.URI;

/**
 * Model interface.
 */
public interface Model {

    /**
     * Get the model id
     *
     * @return The id
     */
    URI getId();

    /**
     * Set the model id
     *
     * @param id The new id
     */
    void setId(URI id);

}
