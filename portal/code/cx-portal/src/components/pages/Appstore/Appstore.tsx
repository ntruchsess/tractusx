import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet, useSearchParams } from 'react-router-dom'
import { api } from '../../../state/api'
import { App } from '../../../types/AppTypes'
import { AppCard } from '../../shared/content/AppCard/AppCard'
import './Appstore.css'

const Appstore = () => {
  const dispatch = useDispatch()
  const apps = useSelector((state: any) => state.apps.list)
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
          .filter((app: App) => filter.test(app.name))
          .map((app: App) => (
            <AppCard key={app.id} app={app} />
          ))}
      </nav>
      <Outlet />
    </main>
  )
}

export default Appstore
