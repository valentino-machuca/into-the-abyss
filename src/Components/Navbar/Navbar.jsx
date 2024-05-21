import React, { useState } from 'react';
import s from './Navbar.module.scss';
import { useTranslation } from 'react-i18next';

// Iconst
import { RxHamburgerMenu } from "react-icons/rx";
import { SlClose } from "react-icons/sl";

export default function Navbar() {
   const [openburger, setOpenBurger] = useState(false);

   const { t } = useTranslation();

   const options = [
      {
         label: t('nav.home'),
         href: '#home'
      },
      {
         label: t('nav.about'),
         href: '#about'
      },
      {
         label: t('nav.requirements'),
         href: '#requirements'
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

      <div className={s.burger}>
         <div className={s.burger_icon}>
            <RxHamburgerMenu style={{color: 'white', fontSize: '2.5em', marginRight: '1em'}} onClick={() => setOpenBurger(prev => !prev)}/>
         </div>

         <div style={{transform: openburger ? 'translateX(0)' : 'translateX(100vw)'}}className={s.menu_burger}>
            <div style={{width: "95%", marginTop: "10%", display: "flex", justifyContent: "flex-end"}}>
               <SlClose style={{color: 'white', fontSize: '2.5em'}} onClick={() => setOpenBurger(prev => !prev)}/>
            </div>
            {options.map((op, index) => <a className={s.option} href={op.href} key={index + op.label} onClick={() => setOpenBurger(prev => !prev)}>{op.label}</a>)}
         </div>
      </div>
    </div>
  )
}
