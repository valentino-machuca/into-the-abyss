import React, { useState } from 'react';
import s from './Home.module.scss';

//Componentes
import Navbar from '../../Components/Navbar/Navbar';

//assets
import background from '../../Assets/background.jpg';
import Presentation from '../../Components/Presentation/Presentation';
import TranslateButton from '../../Components/TranslateButton/TranslateButton';
import OnTranslate from '../../Components/TranslateButton/OnTranslate/OnTranslate';

export default function Home() {
  const [onTranslate, setOnTranslate] = useState(false);

  return (
    <div className={s.container}>
        <OnTranslate onTranslate={onTranslate}/>
        <TranslateButton setOnTranslate={setOnTranslate}/>
        <Navbar/>
        <Presentation/>
        <img src={background} alt='background' className={s.background}/>
    </div>
  )
}
