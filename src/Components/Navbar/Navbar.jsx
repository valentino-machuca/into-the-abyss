import React from 'react';
import s from './Navbar.module.scss';
import { useTranslation } from 'react-i18next';

const redirectTeaser = () => {
   window.open("https://www.youtube.com/watch?v=9s-5tR0fGfM");
}

export default function Navbar() {
   const { t } = useTranslation();

   const options = [
      {
         label: t('nav.home'),
         href: '#'
      },
      {
         label: t('nav.about'),
         href: '#'
      },
      {
         label: 'Devlogs',
         href: '#'
      }
   ]

  return (
    <div className={s.container}>
      <div className={s.logo}>
         <p className={s.logo__primary}>The Path Into</p>
         <p className={s.logo__secondary}>The Abyss</p>
      </div>

      <div className={s.menu}>
         {options.map((op, index) => <a className={s.option} href={op.href} key={index + op.label}>{op.label}</a>)}
      </div>

      <div className={s.teaser} onClick={redirectTeaser}>
         <p>Concept Teaser</p>
      </div>
    </div>
  )
}
