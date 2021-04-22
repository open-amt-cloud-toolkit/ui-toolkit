/*********************************************************************
* Copyright (c) Intel Corporation 2019
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/

import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

import translationEN from './public/locales/en/translation.json'
import translationTE from './public/locales/te/translation.json'
import translationFR from './public/locales/fr/translation.json'
import translationES from './public/locales/es/translation.json'

const resources = {
  en: {
    translations: translationEN
  },
  te: {
    translations: translationTE
  },
  fr: {
    translations: translationFR
  },
  es: {
    translations: translationES
  }
}

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    ns: ['translations'],
    defaultNS: 'translations',
    debug: false,
    fallbackLng: 'en',

    interpolation: {
      escapeValue: false,
      formatSeparator: ','
    },
    react:
    {
      wait: false
    }
  }).catch(() => console.info('error occured'))

export default i18n
