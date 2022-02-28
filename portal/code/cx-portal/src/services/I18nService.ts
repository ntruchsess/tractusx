import i18n, { changeLanguage } from 'i18next'
import { initReactI18next, useTranslation } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import en from '../assets/locales/en.json'
import de from '../assets/locales/de.json'

const resources = {
  en: {
    translation: en,
  },
  de: {
    translation: de,
  },
}

const init = (onLoadedCallback: Function) => {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources,
      interpolation: {
        escapeValue: false,
      },
    })
  onLoadedCallback()
}

const I18nService = {
  init,
  changeLanguage,
  useTranslation,
}

export default I18nService
