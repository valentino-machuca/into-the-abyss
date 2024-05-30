import React from 'react';
import s from './Footer.module.scss';
import { BsYoutube } from "react-icons/bs";
import { BsDiscord } from "react-icons/bs";
import { RiTwitterXLine } from "react-icons/ri";
import { useTranslation } from 'react-i18next';

const Footer = () => {

   const { t } = useTranslation();

   const rows = [
      {
         title:"Menu",
         values: [
            {
               text: t('nav.home'),
               link: './#home'
            },
            {
               text: t('nav.about'),
               link: './#about'
            },
            {
               text: t('nav.requirements'),
               link: './#requirements'
            },
            {
               text: t('nav.discussions'),
               link: 'https://steamcommunity.com/app/3000460/discussions/',
               target: '_blank'
            },
            {
               text: t('nav.news'),
               link: 'https://store.steampowered.com/news/app/3000460',
               target: '_blank'
            }
         ]
      },
      {
         title:"Network",
         values: [
            {
               text: "Youtube",
               link: "https://www.youtube.com/@ThePathIntoTheAbyss",
               icon: <BsYoutube style={{marginRight: '5px'}}/>
            },
            {
               text: "Discord",
               link: "https://discord.com/invite/x5p7287338",
               icon: <BsDiscord style={{marginRight: '5px'}}/>
            },
            {
               text: "AbyssTheGame - X",
               link: "https://twitter.com/Abyssthegame",
               icon: <RiTwitterXLine style={{marginRight: '5px'}}/>
            }
         ]
      }
   ]



  return (
    <div className={s.container}>
      <div className={s.divider}>.</div>
      <div className={s.content}>
         <div className={s.logo}>
            <p className={s.logo__primary}>The Path Into</p>
            <p className={s.logo__secondary}>The Abyss</p>
         </div>

         <div className={s.rows}>
            {rows.map((item, idx) => (
               <div className={s.row} key={item.title + idx}>
                  <h3 className={s.title}>{item.title}</h3>
                  {item.values.map((v, indx) => (
                     <a href={v.link} className={s.item} key={v+indx} target={v.target ? v.target : ''} rel='noreferrer'>{v.icon ? v.icon : ''}{v.text}</a>
                  ))}
               </div>
            ))}
         </div>

         <div className={s.copyright}>
            <p>© 2024 The Path Into The Abyss. All rights reserved.</p>
         </div>
      </div>
    </div>
  )
}

export default Footer