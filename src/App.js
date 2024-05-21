import { useState } from 'react';
import './App.css';

import OnTranslate from './Components/TranslateButton/OnTranslate/OnTranslate';
import Home from './Views/Home/Home';
import Requirements from './Views/Requirements/Requirements';
import About from './Views/About/About';
import Footer from './Components/Footer/Footer';


function App() {
  const [onTranslate, setOnTranslate] = useState(false);

  return (
    <div className="App">
        <OnTranslate onTranslate={onTranslate}/>
        <Home onTranslate={onTranslate} setOnTranslate={setOnTranslate}/>
        <About onTranslate={onTranslate} setOnTranslate={setOnTranslate}/>
        <Requirements onTranslate={onTranslate} setOnTranslate={setOnTranslate}/>
        <Footer/>
    </div>
  );
}

export default App;
