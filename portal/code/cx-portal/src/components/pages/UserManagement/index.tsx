import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTenantUsers } from 'state/features/userAdministration/userAdministrationActions'
import { selectorUserAdministration } from 'state/features/userAdministration/userAdministrationSlice'

export default function UserManagement() {
  const { t } = useTranslation()

  const dispatch = useDispatch()
  const { tenantUsers } = useSelector(selectorUserAdministration)

  useEffect(() => {
    dispatch(fetchTenantUsers())
  }, [dispatch])

  return (
    <main>
      <h2>{t('pages.usermanagement')}</h2>
      <pre>{JSON.stringify(tenantUsers, null, 2)}</pre>
    </main>
  )
}
