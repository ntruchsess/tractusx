
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

import java.util.Collection;

/**
 * Semantic Hub Aspect.
 */
public interface SemanticHubService {

    /**
     * lists all models
     * @return collection of registered models
     */
    Collection<Model> listModels();
    
}
