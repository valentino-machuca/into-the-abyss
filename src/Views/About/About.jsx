import React from 'react';
import s from './About.module.scss';

import backgroundAbout2 from '../../Assets/20240210_125417.jpg';
import background from '../../Assets/main-background.png';
import { useTranslation } from 'react-i18next';

const About = () => {

  const redirect = (url) => {
    window.open(url);
 }


  const { t } = useTranslation();

  return (
    <div className={s.container} id="about">
      <div className={s.divider} style={{top: "50%"}}>.</div>
      <div className={s.content}>
         <div className={s.title}>
            <p>{t('info.title')}</p>
          </div>
         <div className={s.info}>
            <p>{t('info.information')}</p>
            <p>{t('info.information2')}</p>
            <p>{t('info.information3')}</p>

            <p className={s.quote}>{t('info.quote')}</p>
         </div>
      </div>

      <div className={s.more_content}>
        <div className={s.title_more}>
          <p>{t('info.title_more')}</p>
        </div>

        <div className={s.links}>
          <div className={s.main_link}>
            <div className={s.main_box} onClick={() => redirect("https://www.youtube.com/watch?v=9s-5tR0fGfM")}>
              <p className={s.box_date}>January 18, 2024</p>
              <span className={s.box_title}>Concept Teaser - Indie Game (Survival Shooter)</span>
            </div>
          </div>

          <div className={s.other_links}>
            <div className={s.box_1} onClick={() => redirect("https://www.youtube.com/watch?v=97fyBOn6cRg")}>
              <p className={s.box_date}>January 18, 2024</p>
              <span className={s.box_title}>Devlog #1 - A New Beginning</span>
            </div>
            <div className={s.box_2} onClick={() => redirect("https://www.youtube.com/@ThePathIntoTheAbyss")}>
              <p className={s.box_date}>January 18, 2024</p>
              <span className={s.box_title}>The Path Into The Abyss - YouTube Channel</span>
            </div>
            <div className={s.box_3} onClick={() => redirect("https://twitter.com/Abyssthegame")}>
              <p className={s.box_date}>X Account</p>
              <span className={s.box_title}>@Abyssthegame</span>
            </div>
            <div className={s.box_4} onClick={() => redirect("https://discord.com/invite/x5p7287338")}>
              <p className={s.box_date}>Discord</p>
              <span className={s.box_title}>The Path Into The Abyss - Discord</span>
            </div>
          </div>
        </div>
      </div>

      <img src={backgroundAbout2} alt='background-about2' className={s.background}/>
      <img src={background} alt='background-about' className={s.background} style={{top: "50%"}}/>
    </div>
  )
}

export default About