
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

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

/**
 * This class implements all methods of {@link SemanticHubService}.
 * It provides methods for performing the CRUD operations for offered resources.
 */
@Service
public class SemanticHubServiceImpl implements SemanticHubService {

    private static final Logger LOGGER = LoggerFactory.getLogger(SemanticHubServiceImpl.class);

    //private final ModelRepository modelRepository;
    
    /**
     * Constructor for SemanticHubImpl
     *
     * @throws IllegalArgumentException if any of the parameters is null.
     */
    @Autowired
    public SemanticHubServiceImpl(//ModelRepository modelRepository,
        ) throws IllegalArgumentException {
        //if (modelRepository == null)
        //    throw new IllegalArgumentException("The OfferedResourceRepository cannot be null.");

        //this.modelRepository = modelRepository;
    }

    /**
     * Returns a list containing all offered resources as IDS information model resources.
     *
     * @return the list
     */
    @Override
    public Collection<Model> listModels() {
        return Collections.<Model>emptyList();
    }

}

