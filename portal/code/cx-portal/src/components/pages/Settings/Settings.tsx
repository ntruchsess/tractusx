import i18next, { changeLanguage } from 'i18next'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import './Settings.css'

export default function Settings() {
  const langSupported = ['en', 'de']
  const langSequence = langSupported
    .filter((l) => l === i18next.language)
    .concat(langSupported.filter((l) => l !== i18next.language))
  const [lang, setLang] = useState(langSequence)
  const themeSupported = ['bright', 'dark']
  const [theme, setTheme] = useState(themeSupported)
  const { t } = useTranslation()

  const doNextLang = function () {
    const nl = lang
    const c = nl.shift() || 'en'
    nl.push(c)
    const l = nl[0]
    setLang(nl.slice())
    changeLanguage(l)
  }

  const doNextTheme = function () {
    alert(t('content.settings.message.onlybright'))
  }

  return (
    <main className="Settings">
      <h2>{t('pages.settings')}</h2>
      <table>
        <tbody>
          <tr onClick={() => doNextLang()}>
            <td>{t('content.settings.language')}</td>
            <td>
              <input
                type="button"
                value={t<string>(`content.settings.${lang[0]}`)}
              ></input>
            </td>
          </tr>
          <tr onClick={() => doNextTheme()}>
            <td>{t('content.settings.theme')}</td>
            <td>
              <input
                type="button"
                value={t<string>(`content.settings.${theme[0]}`)}
              ></input>
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  )
}
