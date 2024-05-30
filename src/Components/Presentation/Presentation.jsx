import React from 'react';
import s from './Presentation.module.scss';

import { FaSteamSymbol } from "react-icons/fa";
import { useTranslation  } from 'react-i18next';

export default function Presentation({setVideoOpen}) {
  const { t } = useTranslation();

  return (
    <div className={s.container}>
        <div className={s.title}>
          <p style={{fontWeight: 600}}>{t('intro.first_title')}</p>
          <p style={{fontWeight: 300, marginBottom: '30px'}}>{t('intro.second_title')}</p>
          <span>{t('intro.desc')}</span>
          <div className={s.teaser}>
            <p onClick={() => setVideoOpen(true)}>Concept Teaser</p>
            <a href="https://store.steampowered.com/app/3000460/The_Path_Into_The_Abyss/" target='_blank' rel='noreferrer' className={s.get_steam}>
              <FaSteamSymbol style={{fontSize: '2em', marginRight: '10px'}}/>
              {t('intro.get_on_steam')}
            </a>
          </div>
        </div>
    </div>
  )
}
