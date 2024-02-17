import React from 'react';
import s from './Presentation.module.scss';
import { useTranslation  } from 'react-i18next';

export default function Presentation() {
  const { t } = useTranslation();

  return (
    <div className={s.container}>
        <div className={s.title}>
          <p style={{fontWeight: 500}}>{t('intro.first_title')}</p>
          <p style={{fontWeight: 200, marginBottom: '20px'}}>{t('intro.second_title')}</p>
          <span>{t('intro.desc')}</span>
        </div>
    </div>
  )
}
