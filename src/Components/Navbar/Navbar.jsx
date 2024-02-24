import React from 'react';
import s from './Navbar.module.scss';
import { useTranslation } from 'react-i18next';

export default function Navbar() {
   const { t } = useTranslation();

   const options = [
      {
         label: t('nav.home'),
         href: '#home'
      },
      {
         label: t('nav.requirements'),
         href: '#requirements'
      },
      {
         label: t('nav.about'),
         href: '#about'
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
    </div>
  )
}
