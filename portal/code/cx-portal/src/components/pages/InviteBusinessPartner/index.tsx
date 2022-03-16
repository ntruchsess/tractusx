import {
  InviteForm,
  InviteFormData,
} from 'components/shared/content/InviteForm'
import { useState } from 'react'
import UserService from 'services/UserService'
import './InviteBusinessPartner.scss'

/*
curl 'https://catenaxdev003akssrv.germanywestcentral.cloudapp.azure.com/api/useradministration/invitation' \
  -H 'authority: catenaxdev003akssrv.germanywestcentral.cloudapp.azure.com' \
  -H 'sec-ch-ua: " Not A;Brand";v="99", "Chromium";v="99", "Google Chrome";v="99"' \
  -H 'authorization: Bearer xy' \
  -H 'content-type: application/json' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.74 Safari/537.36' \
  -H 'sec-ch-ua-platform: "macOS"' \
  -H 'origin: https://catenaxdev003aksportal.germanywestcentral.cloudapp.azure.com' \
  -H 'sec-fetch-site: same-site' \
  -H 'sec-fetch-mode: cors' \
  -H 'sec-fetch-dest: empty' \
  -H 'referer: https://catenaxdev003aksportal.germanywestcentral.cloudapp.azure.com/' \
  -H 'accept-language: en' \
  --data-raw '{"userName":"roryphant@gmail.com","firstName":"Martin","lastName":"Rohrmeier","email":"roryphant@gmail.com","organisationName":"sdfsdf"}' \
  --compressed
*/

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
        setTimeout(() => { setProcessing('input')}, 5000)
      })
  }

  return (
    <main>
      <InviteForm onSubmit={doSubmitInvite} state={processing} />
    </main>
  )
}
