import React, { createContext, useState } from 'react';
import axios from 'axios';

export const TranslationContext = createContext();

const TranslationContextProvider = props => {
  const apiKey =
    'trnsl.1.1.20190423T150040Z.fcd1a66099ec5c93.2adacf33f6f28d3729bdf2f7af88aaf169424b6a';
  const [translation, setTranslation] = useState('');
  const [lang, setLang] = useState('');

  const detectLang = text => {
    axios
      .get(
        `https://translate.yandex.net/api/v1.5/tr.json/detect?key=${apiKey}&text=${text}`
      )
      .then(res => {
        const lang = res.data.lang;
        setLang(lang);
      });
  };
  const translateText = (text, lan) => {
    axios
      .get(
        `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${apiKey}&text=${text}&lang=${lan}`
      )
      .then(res => {
        const translation = res.data.text;
        setTranslation(translation);
      });
  };
  return (
    <TranslationContext.Provider
      value={{ translation, detectLang, lang, translateText }}
    >
      {props.children}
    </TranslationContext.Provider>
  );
};

export default TranslationContextProvider;
