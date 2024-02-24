import React from 'react';
import s from './Presentation.module.scss';
import { useTranslation  } from 'react-i18next';

export default function Presentation() {
  const { t } = useTranslation();

  const redirectTeaser = () => {
    window.open("https://www.youtube.com/watch?v=9s-5tR0fGfM");
 }

  return (
    <div className={s.container}>
        <div className={s.title}>
          <p style={{fontWeight: 600}}>{t('intro.first_title')}</p>
          <p style={{fontWeight: 300, marginBottom: '20px'}}>{t('intro.second_title')}</p>
          <span>{t('intro.desc')}</span>
          <div className={s.teaser} onClick={redirectTeaser}>
            <p>Concept Teaser</p>
          </div>
        </div>
    </div>
  )
}
