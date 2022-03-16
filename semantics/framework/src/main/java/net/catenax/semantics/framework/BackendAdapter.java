/*
Copyright (c) 2021-2022 T-Systems International GmbH (Catena-X Consortium)
See the AUTHORS file(s) distributed with this work for additional
information regarding authorship.

See the LICENSE file(s) distributed with this work for
additional information regarding license terms.
*/
package net.catenax.semantics.framework;

/**
 * Interface to any backend plane associated to an
 * IdsService and which maybe invoked on behalf of an ids request
 */
public interface BackendAdapter extends IdsAdapter {

    /**
     * returns the protocol that this adapter speaks
     * @return the protocol
     */
    public String getProtocol();

    /**
     * performs a (synchronous) request
     * @return a message response
     */
    public IdsMessage perform(IdsRequest request) throws StatusException;
}
