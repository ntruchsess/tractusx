import { useState, useEffect } from 'react'
import { useSearchParams, Outlet } from 'react-router-dom'
import { AppstoreApp } from './AppstoreApp'
import { getApps } from '../../../services/AppService'
import './Appstore.css'

type ErrorType = {
  message?: string
}

type ItemType = {
  id: number
  name: string
  price: string
}

export default function Appstore() {
  const [searchParams, setSearchParams] = useSearchParams()
  const filter = new RegExp(searchParams.get('filter') || '', 'i')
  const items = getApps()
  /*
  const [error, setError] = useState<ErrorType>({});
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [items, setItems] = useState<ItemType[]>([]);
  //TODO:
  //switch to redux
  useEffect(() => {
    fetch("/testdata/apps.json")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error.message) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else
  */
  {
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
              <AppstoreApp key={app.id} app={app} />
            ))}
        </nav>
        <Outlet />
      </main>
    )
  }
}
