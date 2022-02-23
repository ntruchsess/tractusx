import { useState, useEffect } from 'react'
import { useSearchParams, Outlet } from 'react-router-dom'
import { AppCard } from '../../shared/content/AppCard/AppCard'
import { App } from '../../../types/AppTypes'
import './Appstore.css'

type ErrorType = {
  message?: string
}

export default function Appstore() {
  const [searchParams, setSearchParams] = useSearchParams()
  const filter = new RegExp(searchParams.get('filter') || '', 'i')
  const [error, setError] = useState<ErrorType>({})
  const [isLoaded, setIsLoaded] = useState<boolean>(false)
  const [items, setItems] = useState<App[]>([])
  //TODO:
  //switch to redux
  useEffect(() => {
    fetch('/testdata/apps.json')
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true)
          setItems(result)
        },
        (error) => {
          setIsLoaded(true)
          setError(error)
        }
      )
  }, [])

  if (error.message) {
    return <div>Error: {error.message}</div>
  } else if (!isLoaded) {
    return <div>Loading...</div>
  } else {
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
}
