import React from 'react';
import s from './Home.module.scss';

//Componentes
import Navbar from '../../Components/Navbar/Navbar';

//assets
import backgroundAboutGif from '../../Assets/background-about-gif.gif';
import Presentation from '../../Components/Presentation/Presentation';
import TranslateButton from '../../Components/TranslateButton/TranslateButton';

export default function Home({setOnTranslate}) {

  return (
    <div className={s.container} id="home">
        <TranslateButton setOnTranslate={setOnTranslate}/>
        <Navbar/>
        <Presentation/>
        <img src={backgroundAboutGif} alt='background' className={s.background}/>
    </div>
  )
}
