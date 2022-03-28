import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
//import { selectorUser } from 'state/features/user/userSlice'
import { fetchTenantUsers } from 'state/features/userAdministration/userAdministrationActions'
import { selectorUserAdministration } from 'state/features/userAdministration/userAdministrationSlice'
import { AddUserOverlay } from './AddUserOverlay'
import { Button } from 'cx-portal-shared-components'

export default function UserManagement() {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirm = () => {
    console.log('confirmed')
  };
  /*
  const dispatch = useDispatch()
  const { tenantUsers } = useSelector(selectorUserAdministration)
  const { token } = useSelector(selectorUser)

  useEffect(() => {
    if (token) {
      dispatch(fetchTenantUsers())
    }
  }, [token, dispatch])
  NACH h2 <pre>{JSON.stringify(tenantUsers, null, 2)}</pre>
  */
  return (
    <main>
      <h2>{t('pages.usermanagement')}</h2>
      
      <Button
        name="send"
        size="medium"
        onClick={handleClickOpen}
      >{`${t('content.invite.send')}`}</Button>

      <AddUserOverlay openDialog={open} handleClose={handleClose} handleConfirm={handleConfirm} />
    </main>
  )
}