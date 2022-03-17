import { InviteForm } from 'components/shared/content/InviteForm'
import { useState } from 'react'
import UserService from 'services/UserService'
import { UserManagementApi } from 'state/api/userManagement/userManagementAPI'
import { InviteData } from 'types/userManagement/UserManagementTypes'
import './InviteBusinessPartner.scss'

export default function InviteBusinessPartner() {
  const [processing, setProcessing] = useState<string>('input')

  const doSubmitInvite = (data: InviteData) => {
    setProcessing('busy')

    new UserManagementApi(UserService.getToken())
      .inviteBusinessPartner(data)
      .then((response) => {
        setProcessing('success')
        console.log(`Onboarding for company ${data.organizationName} started`)
        console.log(response)
      })
      .catch((error: unknown) => {
        setProcessing('failure')
        console.log(`Onboarding for company ${data.organizationName} failed`)
        console.log(error)
      })
      .finally(() => {
        setTimeout(() => {
          setProcessing('input')
        }, 5000)
      })
  }

  return (
    <main>
      <InviteForm onSubmit={doSubmitInvite} state={processing} />
    </main>
  )
}
