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

const init = (): void => {
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
    .catch((e) => console.error('Translation library init got error:', e))
}

const I18nService = {
  init,
  changeLanguage,
  useTranslation,
}

export default I18nService
