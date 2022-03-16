import {
  InviteForm,
  InviteFormData,
} from 'components/shared/content/InviteForm'
import { useState } from 'react'
import UserService from 'services/UserService'
import './InviteBusinessPartner.scss'

export default function InviteBusinessPartner() {
  const [processing, setProcessing] = useState<string>('input')

  const doSubmitInvite = (data: InviteFormData) => {
    setProcessing('busy')
    fetch(
      `${process.env.REACT_APP_BASE_API}/api/useradministration/invitation`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${UserService.getToken()}`,
        },
        body: JSON.stringify(data),
      }
    )
      .then((response) => {
        if (response.ok) {
          setProcessing('success')
          console.log(`Onboarding for company ${data.organizationName} started`)
        } else throw Error()
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
