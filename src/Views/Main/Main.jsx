import React, { useState } from "react";
import '../../App.css';

import OnTranslate from "../../Components/TranslateButton/OnTranslate/OnTranslate";
import Home from "../Home/Home";
import About from "../About/About";
import Requirements from "../Requirements/Requirements";
import Footer from "../../Components/Footer/Footer";

const Main = () => {
   const [onTranslate, setOnTranslate] = useState(false);
   const [videoOpen, setVideoOpen] = useState(false);


    return (
        <div className="App">
            <OnTranslate onTranslate={onTranslate}/>
            <Home onTranslate={onTranslate} setOnTranslate={setOnTranslate} videoOpen={videoOpen} setVideoOpen={setVideoOpen}/>
            <About onTranslate={onTranslate} setOnTranslate={setOnTranslate}/>
            <Requirements onTranslate={onTranslate} setOnTranslate={setOnTranslate}/>
            <Footer/>
        </div>
    );
}

export default Main;