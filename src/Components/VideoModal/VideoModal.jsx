import React from 'react';
import s from './VideoModal.module.scss';
import { SlClose } from 'react-icons/sl';

const VideoModal = ({setVideoOpen}) => {

   return (
      <div className={s.container}>
         <div className={s.icon}>
            <SlClose className={s.close} onClick={() => setVideoOpen(prev => !prev)}/>
         </div>
         <iframe className={s.iframe} src="https://www.youtube.com/embed/9s-5tR0fGfM" title="THE PATH INTO THE ABYSS - Concept Teaser - Indie Game (Survival Shooter)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
   )
}

export default VideoModal