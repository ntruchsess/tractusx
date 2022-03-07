import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {fetchBusinessPartners, selectBpdms} from 'state/features/bpdm/bpdmSlice'


// Temporary component. Will change in upcoming commits
const BpnLookup = () => {
  const dispatch = useDispatch();
  const token = useSelector((state: any) => state.user.token)
  const {bpdmResponse,loading} = useSelector(selectBpdms)


  useEffect(() => {
    if(token) {
      dispatch(fetchBusinessPartners(token))
    }
  }, [token, dispatch])

  return (
    <main className="Appstore">
      <ul>
      {
        bpdmResponse  && bpdmResponse?.content?.map((bpn:any,index:number)=>{
          return <li key={index}>{bpn.bpn}</li>
        })
      }
      </ul>

    </main>
  )
}

export default BpnLookup
