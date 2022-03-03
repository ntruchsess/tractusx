import { useState } from 'react'
import i18next, { changeLanguage } from 'i18next'
import I18nService from '../../../../services/I18nService'
import './LangSwitch.scss'

export const LangSwitch = () => {
  const [currentLang, setCurrentLang] = useState(i18next.language)
  const doSetLang = (newLang: string) => {
    setCurrentLang(newLang)
    try {
      changeLanguage(newLang)
    } catch (e) {
      console.warn(`unable to set language ${newLang}`)
    }
  }
  return (
    <div className="LangSwitch">
      {I18nService.supportedLangages.map((lang) => (
        <span key={lang}>
          <input
            type="radio"
            id={`lang-${lang}`}
            name="lang"
            value={lang}
            defaultChecked={lang === currentLang}
            onClick={(e) => doSetLang((e.target as HTMLInputElement).value)}
          />
          <label htmlFor={`lang-${lang}`}>{lang}</label>
        </span>
      ))}
    </div>
  )
}
