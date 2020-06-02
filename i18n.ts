/*********************************************************************
* Copyright (c) Intel Corporation 2019
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/

import i18n from 'i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import translationEN from './public/locales/en/translation.json';

const resources = {
  en: {
    translations: translationEN
  }
};

i18n
  .use(initReactI18next)
  .use(Backend)
  .use(LanguageDetector)
  .init({
    resources,
    ns: ["translations"],
    defaultNS: "translations",
    debug:false,
    fallbackLng: 'en',
    
    interpolation: {
      escapeValue: false,
      formatSeparator: ","
    },
    react: 
    {       wait: false
    }
  });

export default i18n;