import { useParams } from 'react-router-dom'
import { getApp } from '../../../../services/MockAppServiceSync'

import './AppDetail.css'

export default function AppDetail() {
  const params = useParams()
  //TODO:
  //switch to redux
  const app = getApp(params.appId || "0")

  return (
    <div className="appstore_app">
      <p className="id">{app.id}</p>
      <h3>{app.name}</h3>
      <p className="description">{app.description}</p>
      <p className="vendor">{app.vendor}</p>
      <p>
        <button
          onClick={() => {}}
        >
          buy
        </button>
      </p>
    </div>
  )
}
