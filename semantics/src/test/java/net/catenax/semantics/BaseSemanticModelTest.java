//
// Copyright (c) 2021 T-Systems International GmbH (Catena-X Consortium)
//
// See the AUTHORS file(s) distributed with this work for additional
// information regarding authorship.
//
// See the LICENSE file(s) distributed with this work for
// additional information regarding license terms.
//

package net.catenax.semantics;

import java.io.*;
import java.util.*;
import java.util.stream.*;

import static org.assertj.core.api.Assertions.assertThat;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.MethodSource;

import org.apache.jena.rdf.model.Model;

import io.openmanufacturing.sds.validation.*;
import io.openmanufacturing.sds.aspectmetamodel.KnownVersion;

/**
 * Tests related to the semantic hub aspect model
 */
public class BaseSemanticModelTest {

    Validator validator = new Validator();
    String TEST_NAMESPACE = "net.catena_x.semantics.test";
    String TEST_NAMESPACE_VERSION = "0.0.42";

    Map<KnownVersion, Model> metaModel = new HashMap<>();

    /**
     * loads BAMM into memory
     */
    Model loadBAMM( final KnownVersion version ) {
        return ModelLoader.createModel( List.of(
              "bamm/meta-model/" + version.toVersionString() + "/aspect-meta-model-definitions.ttl",
              "bamm/meta-model/" + version.toVersionString() + "/type-conversions.ttl",
              "bamm/characteristic/" + version.toVersionString() + "/characteristic-definitions.ttl",
              "bamm/characteristic/" + version.toVersionString() + "/characteristic-instances.ttl",
              "bamm/entity/" + version.toVersionString() + "/TimeSeriesEntity.ttl",
              "bamm/unit/" + version.toVersionString() + "/units.ttl",
              "bamm/entity/" + version.toVersionString() + "/ThreeDimensionalPosition.ttl"
        ) );
     }
  
    /** 
     * get or load BAMM into memory
     */
    protected Model getBAMM( final KnownVersion version ) {
       if ( metaModel.get( version ) != null ) {
          return metaModel.get( version );
       }
       final Model result = loadBAMM( version );
       metaModel.put( version, result );
       return result;
    }
     
   /**
    * load a BAMM-supported model
    */
   protected Model loadModel( final String path, final String ttlDefinition, final KnownVersion knownVersion ) {
    final Model model = ModelLoader.createModel( String
          .format( "%s/%s/%s/%s/%s.ttl", knownVersion.toString().toLowerCase(), path, TEST_NAMESPACE,
                TEST_NAMESPACE_VERSION, ttlDefinition ) );
    model.add( getBAMM( knownVersion ) );
    return model;
   }

   /** prodce a stream of BAMM versions to test with */
   protected static Stream<KnownVersion> allVersions() {
    return KnownVersion.getVersions().stream().dropWhile( KnownVersion.BAMM_1_0_0::isNewerThan );
   }

    /** 
     * check the validity of a given model definition 
     */
    protected void checkValidity( final Model model, final KnownVersion testedVersion ) {
      final ValidationReport validationReport = validator
            .apply( model, testedVersion );
      if ( !validationReport.conforms() ) {
         System.out.println( validationReport );
      }
      assertThat( validationReport.conforms() ).isTrue();
      assertThat( validationReport.getValidationErrors() ).isEmpty();
   }

}
