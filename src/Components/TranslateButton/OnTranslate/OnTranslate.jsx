import React from 'react';
import s from './OnTranslate.module.scss';

export default function OnTranslate({onTranslate}) {
  return (
    <div className={`${onTranslate ? s.open : null} ${s.container}`}>.</div>
  )
}
