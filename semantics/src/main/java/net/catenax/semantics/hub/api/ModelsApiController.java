package net.catenax.semantics.hub.api;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.context.request.NativeWebRequest;
import java.util.Optional;
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.SpringCodegen", date = "2021-09-01T11:23:27.724046800+02:00[Europe/Berlin]")

@RestController
@RequestMapping("${openapi.semanticHub.base-path:/api/v1}")
public class ModelsApiController implements ModelsApi {

    private final NativeWebRequest request;

    @org.springframework.beans.factory.annotation.Autowired
    public ModelsApiController(NativeWebRequest request) {
        this.request = request;
    }

    @Override
    public Optional<NativeWebRequest> getRequest() {
        return Optional.ofNullable(request);
    }

}
