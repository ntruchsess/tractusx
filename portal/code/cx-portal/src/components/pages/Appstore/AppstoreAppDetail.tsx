import { useParams, useNavigate } from 'react-router-dom'
import { getApp, deleteApp } from '../../../services/AppService'

import './AppstoreAppDetail.css'

export default function AppstoreAppDetail() {
  const navigate = useNavigate()
  const params = useParams()
  //TODO:
  //switch to redux
  const app = getApp(parseInt(params.appId || '0', 10))

  return (
    <div className="appstore_app">
      #{app?.id}
      <h3>{app?.name}</h3>
      <p>
        fsdkjhljf kl sjdk kd jskflj klsdjklj lkdsjfklasdjflk jsdlfj
        kldsjfklsdjlkf lkdsajf klsjkl dksljf kldsjfklsdjl iusl isadnmlieenjs
      </p>
      <p>price: {app?.price}</p>
      <p>release: {app?.rel}</p>
      <p>
        <button
          onClick={() => {
            deleteApp(app?.id || 0)
            navigate('/appstore')
          }}
        >
          buy
        </button>
      </p>
    </div>
  )
}
