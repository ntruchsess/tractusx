/*
Copyright (c) 2021-2022 T-Systems International GmbH (Catena-X Consortium)
See the AUTHORS file(s) distributed with this work for additional
information regarding authorship.

See the LICENSE file(s) distributed with this work for
additional information regarding license terms.
*/
package net.catenax.semantics.framework;

import lombok.Data;

import java.util.concurrent.Future;

/**
 * A basic response
 */
@Data
public class BaseIdsResponse implements IdsResponse {
    private Future<IdsMessage> message;
    private int status;
}
