import { useSearchParams, Outlet } from 'react-router-dom'
import { getApps } from '../../../services/MockAppServiceSync'
import { AppCard } from '../../shared/content/AppCard/AppCard'
import './Appstore.css'

export default function Appstore() {
  const [searchParams, setSearchParams] = useSearchParams()
  const filter = new RegExp(searchParams.get('filter') || '', 'i')
  const items = getApps()
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
        {items
          .filter((item) => filter.test(item.name))
          .map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
      </nav>
      <Outlet />
    </main>
  )
}
