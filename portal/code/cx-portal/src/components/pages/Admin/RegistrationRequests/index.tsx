import React from 'react'
import { useTranslation } from 'react-i18next'
import 'components/pages/Admin/RegistrationRequests/RegistrationRequests.scss'
import HeaderBackgroundImage from 'assets/images/registration-requests-header-background.png'

const RegistrationRequests = () =>{
  const { t } = useTranslation()


  return (
    <main className="page-main-container">
      <div className="page-header">
        <img src={HeaderBackgroundImage} alt="Registration Request Background Image" />
        <div className="page-header-title-container">
          <span>{t('content.admin.registration-requests.headertitle')}</span>
        </div>
      </div>
      <p>content of the admin area</p>

    </main>
  )
}

export default RegistrationRequests
