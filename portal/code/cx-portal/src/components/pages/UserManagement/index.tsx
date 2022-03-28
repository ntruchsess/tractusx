import { ActiveUserTable } from './ActiveUserTable'

export default function UserManagement() {
  const onAddUserButtonClick = () => {
    console.log('add new user')
  }

  return (
    <main>
      <ActiveUserTable onAddUserButtonClick={onAddUserButtonClick} />
    </main>
  )
}
