import UserService from '../../../services/UserService'

export default function Admin() {
  return (
    <main>
      <pre>{JSON.stringify(UserService.getParsedToken(), null, 2)}</pre>
    </main>
  )
}
