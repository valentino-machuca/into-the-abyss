import React from 'react';
import s from './Home.module.scss';

//Componentes
import Navbar from '../../Components/Navbar/Navbar';

//assets
import backgroundAboutGif from '../../Assets/background-about-gif.gif';
import Presentation from '../../Components/Presentation/Presentation';
import TranslateButton from '../../Components/TranslateButton/TranslateButton';
import VideoModal from '../../Components/VideoModal/VideoModal';

export default function Home({setOnTranslate, setVideoOpen, videoOpen}) {

  return (
    <div className={s.container} id="home">
        {videoOpen && <VideoModal setVideoOpen={setVideoOpen}/>}
        <TranslateButton setOnTranslate={setOnTranslate}/>
        <Navbar/>
        <Presentation setVideoOpen={setVideoOpen}/>
        <img src={backgroundAboutGif} alt='background' className={s.background}/>
    </div>
  )
}
