import React from 'react';
import s from "./TranslateButton.module.scss";

//traduccion
import { useTranslation } from 'react-i18next';

//iconos
import { PiTranslate } from "react-icons/pi";

export default function TranslateButton({setOnTranslate}) {

   const { i18n } = useTranslation();
   
   const changeLanguage = () => {
      setOnTranslate(true);
      setTimeout(() => {
         i18n.language === 'es' ? i18n.changeLanguage('en') : i18n.changeLanguage('es');
      }, 500);
      setTimeout(() => {
        setOnTranslate(false);
      }, 1000);
   }

  return (
    <div className={s.container} onClick={changeLanguage}>
      <PiTranslate/>
    </div>
  )
}
