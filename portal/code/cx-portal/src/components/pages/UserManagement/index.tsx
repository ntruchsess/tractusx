import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { AddUserOverlay } from './AddUserOverlay'
import { ActiveUserTable } from './ActiveUserTable'

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
      <ActiveUserTable onAddUserButtonClick={handleClickOpen} />
      <AddUserOverlay openDialog={open} handleClose={handleClose} handleConfirm={handleConfirm} />
    </main>
  )
}