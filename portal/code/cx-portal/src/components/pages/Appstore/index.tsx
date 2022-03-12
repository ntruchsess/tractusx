import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet, useSearchParams } from 'react-router-dom'
import { api } from 'state/api'
import { App } from 'types/AppTypes'
import { AppCards, SearchInput } from 'cx-portal-shared-components'

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
      <SearchInput
        margin="normal"
        autoFocus={true}
        value={searchParams.get('filter') || ''}
        onChange={(event) =>
          setSearchParams({ filter: event.target.value }, { replace: true })
        }
      />
      <nav>
        <AppCards
          items={apps
            .filter(
              (app: App) => filter.test(app.title) || filter.test(app.title)
            )
            .map((app: App) => {
              const item: any = { ...app }
              item.image = {
                src: 'https://images.unsplash.com/photo-1517153295259-74eb0b416cee?auto=format&fit=crop&w=640&q=420',
                alt: 'Catena-X AppCard',
              }
              return item
            })}
          variant="minimal"
          buttonText="Details"
        />
      </nav>
      <Outlet />
    </main>
  )
}

export default Appstore
