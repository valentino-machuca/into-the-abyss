import React, { useState } from 'react';
import s from './Support.module.scss';
import TranslateButton from '../../Components/TranslateButton/TranslateButton';
import Navbar from '../../Components/Navbar/Navbar';
import OnTranslate from '../../Components/TranslateButton/OnTranslate/OnTranslate';

const Support = () => {
   const [onTranslate, setOnTranslate] = useState(false);

  return (
    <div className={s.page}>
      <OnTranslate onTranslate={onTranslate}/>
      <div className={s.container}>
         <TranslateButton setOnTranslate={setOnTranslate}/>
         <Navbar/>
         
         <div className={s.title}>
            <h2>¿Cómo podemos ayudarte?</h2>

            <select>
               <option value="Juego">Juego</option>
               <option value="Juego">Comunidad</option>
               <option value="Juego">Steam</option>
            </select>
         </div>

      </div>
    </div>
  )
}

export default Support