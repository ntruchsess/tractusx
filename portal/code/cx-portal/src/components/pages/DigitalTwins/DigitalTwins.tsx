import { useTranslation } from 'react-i18next'
import { PAGES } from '../../../types/MainTypes'

export default function DigitalTwins() {
  const { t } = useTranslation()
  return (
    <main>
      <h2>{t(`pages.${PAGES.DIGITALTWIN}`)}</h2>
      <p>content of the digital Twins</p>
    </main>
  )
}
