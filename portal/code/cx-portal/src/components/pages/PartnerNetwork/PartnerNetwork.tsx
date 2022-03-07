import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {fetchBusinessPartners, selectorPartnerNetwork} from 'state/features/partnerNetwork/partnerNetworkSlice'


// Temporary component. Will change in upcoming commits
const PartnerNetwork = () => {
  const dispatch = useDispatch();
  const token = useSelector((state: any) => state.user.token)
  const {businessPartners,loading} = useSelector(selectorPartnerNetwork)


  useEffect(() => {
    if(token) {
      dispatch(fetchBusinessPartners())
    }
  }, [token, dispatch])

  return (
    <main className="Appstore">
      <ul>
      {
        businessPartners  && businessPartners?.content?.map((bpn:any,index:number)=>{
          return <li key={index}>{bpn.bpn}</li>
        })
      }
      </ul>

    </main>
  )
}

export default PartnerNetwork
