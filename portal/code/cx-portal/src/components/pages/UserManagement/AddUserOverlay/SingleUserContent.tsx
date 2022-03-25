import { useTranslation } from 'react-i18next'
import { Input } from 'cx-portal-shared-components'

export const SingleUserContent = () => {
  const { t } = useTranslation()
  const userInputs = [
    {
      key: "firstname",
      label: t('global.field.first'),
      placeholder: t('global.field.first'),
      helperText: '',
    },
    {
      key: "lastname",
      label: t('global.field.last'),
      placeholder: t('global.field.last'),
      helperText: '',
    },
    {
      key: "email",
      label: t('global.field.email'),
      placeholder: t('global.field.email'),
      helperText: '',
    }
  ]

  return (
    <div className="single-user-content">
        {userInputs.map(({ label, placeholder, helperText, }) => (
        <Input sx={{marginBottom: "30px"}} label={label} placeholder={placeholder} helperText={helperText} />
      ))}
    </div>
  )
}
