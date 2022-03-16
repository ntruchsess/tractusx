import { useEffect, useState } from "react"
import ErrorMessage from "../ErrorMessage";
import DescriptionList from "../lists/DescriptionList"
import Loading from "../loading";
import BackLink from "../navigation/BackLink"
import { getTwinById } from "./data"
import { ShellDescriptor } from "./interfaces";
import Submodels from "./Submodels";

export function DigitalTwinDetail(props){
  const id = props.match.params.id;
  const [twin, setTwin] = useState<ShellDescriptor>();
  const [error, setError] = useState('');

  useEffect(() => {
    getTwinById(id).then(
      res => setTwin(res),
      error => setError(error.message)
    )
  }, [id])


  return(
    <div className="p44">
      <BackLink history={props.history} />
      {twin ?
        <>
          <div className='m5 p20 bgpanel flex40 br4 bsdatacatalog'>
            <h2 className='fs28 bold' style={{textTransform: 'uppercase'}}>{twin.idShort || twin.identification}</h2>
            <div className='mt20 mb15'>
              {twin.description[0] &&
                <DescriptionList title="Description:" description={twin.description[0].text} />
              }
              {twin.submodelDescriptors && 
                <DescriptionList title="Submodel Endpoints:" description={twin.submodelDescriptors.length}/>
              }
              {twin.specificAssetIds.length > 0 &&
                <div className='mt20'>
                  <h3 className="fs20 bold">Specific Asset IDs</h3>
                  {twin.specificAssetIds.map(saId =>
                    <div key={saId.key} className="mt15 mb15">
                      <DescriptionList title="Key:" description={saId.key} />
                      {saId.semanticId &&
                        <DescriptionList title="Semantic ID:" description={saId.semanticId} />
                      }
                      <DescriptionList title="Value:" description={saId.value} />
                    </div>
                  )}
                </div>
              }
            </div>
          </div>
          {twin.submodelDescriptors.length > 0 &&
            <div className='mt20'>
              <h3 className="fs20 bold">Submodel Descriptors</h3>
              <Submodels models={twin.submodelDescriptors}></Submodels>
            </div>
          }
        </> :
        <Loading />
      }
      {error && <ErrorMessage error={error} />}
    </div>
  )
}
