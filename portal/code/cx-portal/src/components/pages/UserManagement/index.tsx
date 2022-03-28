import { useState } from 'react'
import { useTranslation } from 'react-i18next'
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