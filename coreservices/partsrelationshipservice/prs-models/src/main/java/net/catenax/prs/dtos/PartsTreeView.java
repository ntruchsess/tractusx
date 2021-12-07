//
// Copyright (c) 2021 Copyright Holder (Catena-X Consortium)
//
// See the AUTHORS file(s) distributed with this work for additional
// information regarding authorship.
//
// See the LICENSE file(s) distributed with this work for
// additional information regarding license terms.
//
package net.catenax.prs.dtos;

import io.swagger.v3.oas.annotations.media.Schema;
import net.catenax.prs.annotations.ExcludeFromCodeCoverageGeneratedReport;

/***
 * API type for the view of the parts tree to be returned by a query.
 *
 * @see PartLifecycleStage
 */
@ExcludeFromCodeCoverageGeneratedReport
@Schema(description = "View defining which data of the PartsTree is retrieved.")
public enum PartsTreeView {
    @Schema(description = "The view of the PartsTree as the vehicle was assembled.")
    AS_BUILT,

    @Schema(description = "The view of the PartsTree that accounts for all updates during the vehicle lifecycle.")
    AS_MAINTAINED
}
