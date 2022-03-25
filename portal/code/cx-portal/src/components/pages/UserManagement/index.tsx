import { useTranslation } from 'react-i18next'
import { ActiveUserTable } from './ActiveUserTable'

export default function UserManagement() {
  const { t } = useTranslation()

  const onAddUserButtonClick = () => {
    console.log('add new user')
  }

  return (
    <main>
      <ActiveUserTable onAddUserButtonClick={onAddUserButtonClick} />
    </main>
  )
}
