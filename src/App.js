import { useState } from 'react';
import './App.css';

import OnTranslate from './Components/TranslateButton/OnTranslate/OnTranslate';
import Home from './Views/Home/Home';
import Requirements from './Views/Requirements/Requirements';


function App() {
  const [onTranslate, setOnTranslate] = useState(false);

  return (
    <div className="App">
        <OnTranslate onTranslate={onTranslate}/>
        <Home onTranslate={onTranslate} setOnTranslate={setOnTranslate}/>
        <Requirements onTranslate={onTranslate} setOnTranslate={setOnTranslate} id="requirements"/>
    </div>
  );
}

export default App;
