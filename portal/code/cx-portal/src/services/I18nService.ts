import i18n, { changeLanguage } from 'i18next'
import { initReactI18next, useTranslation } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import de from '../assets/locales/de.json'
import en from '../assets/locales/en.json'

const resources = {
  de: {
    translation: de,
  },
  en: {
    translation: en,
  },
}

const supportedLangages = Object.keys(resources).sort()

const init = (/*onLoadedCallback: Function*/) => {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources,
      fallbackLng: 'en',
      interpolation: {
        escapeValue: false,
      },
    })
  //onLoadedCallback()
}

const I18nService = {
  init,
  changeLanguage,
  useTranslation,
  supportedLangages,
}

export default I18nService
