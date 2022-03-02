import i18next, { changeLanguage } from 'i18next'
import { useState } from 'react'
import './LangSwitch.scss'

export const LangSwitch = () => {
  const langSupported = ['de', 'en']
  const [lang, setLang] = useState(i18next.language)
  const doSetLang = (newLang: string) => {
    setLang(newLang)
    try {
      changeLanguage(newLang)
    } catch (e) {
      console.warn('unable to change language')
    }
  }
  return (
    <div className="LangSwitch">
      {langSupported.map((l) => (
        <span key={l}>
          <input
            type="radio"
            id={`lang-${l}`}
            name="lang"
            value={l}
            defaultChecked={l === lang}
            onClick={(e) => doSetLang((e.target as HTMLInputElement).value)}
          />
          <label htmlFor={`lang-${l}`}>{l}</label>
        </span>
      ))}
    </div>
  )
}
