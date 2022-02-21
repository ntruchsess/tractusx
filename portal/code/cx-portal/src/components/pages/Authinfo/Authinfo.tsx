import UserService from '../../../services/UserService'
import '../pages.css'

export default function Admin() {
  return (
    <main>
      <pre>{JSON.stringify(UserService.getParsedToken(), null, 2)}</pre>
    </main>
  )
}
