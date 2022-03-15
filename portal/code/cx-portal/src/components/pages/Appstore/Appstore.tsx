import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet, useSearchParams } from 'react-router-dom'
import { RootState } from 'state/store'
import { api } from '../../../state/api'
import { AppstoreApp } from '../../../types/appstore/AppstoreTypes'
import './Appstore.css'

const Appstore = () => {
  const dispatch = useDispatch()
  const apps = useSelector((state: RootState) => state.apps.list)
  const [searchParams, setSearchParams] = useSearchParams()
  const filter = new RegExp(searchParams.get('filter') || '', 'i')

  useEffect(() => {
    dispatch(api.loadApps())
  }, [dispatch])

  return (
    <main className="Appstore">
      <input
        autoFocus={true}
        value={searchParams.get('filter') || ''}
        onChange={(event) =>
          setSearchParams({ filter: event.target.value }, { replace: true })
        }
      />
      <nav>
        {apps
          .filter((app: AppstoreApp) => filter.test(app.title))
          .map((app: AppstoreApp) => (
            <pre key={app.id}>{JSON.stringify(app, null, 2)}</pre>
          ))}
      </nav>
      <Outlet />
    </main>
  )
}

export default Appstore
