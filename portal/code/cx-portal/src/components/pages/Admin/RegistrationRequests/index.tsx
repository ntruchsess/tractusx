import React from 'react'
import { useTranslation } from 'react-i18next'


const RegistrationRequests = () =>{
  const { t } = useTranslation()
  return (
    <main>
      <div className="page-header">
        <span>{t('content.admin.headertitle')}</span>
      </div>
      <p>content of the admin area</p>
    </main>
  )
}

export default RegistrationRequests
