import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { api } from 'state/api'
import { IBpdmResponse } from 'types/bpdm/BpdmTypes'


// TODO: Temporary component. Will change in upcoming commits
const BpnLookup = () => {
  const token = useSelector((state: any) => state.user.token)
  const [bpnList, setBpnList] = useState<IBpdmResponse | any>();


  useEffect(() => {
    if(token) {
      console.log('store token:',token);
      // Not direct call of instance, call getInstance func to keep Singleton in place
      const bpdmApi = api.BpdmApi.getInstance(token)
      bpdmApi.getAllBusinessPartner().then((bpdmList) => {
        console.log('bpdmList:', bpdmList)
        setBpnList(bpdmList)
      })
    }
  }, [token])

  return (
    <main className="Appstore">
      <ul>
      {
        bpnList?.content?.map((bpn:any,index:number)=>{
          return <li key={index}>{bpn.bpn}</li>
        })
      }
      </ul>

    </main>
  )
}

export default BpnLookup
