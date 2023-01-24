import React from "react";
import  Container from "../Container";
import s from './Hero.module.scss';


function Hero() {
    return <Container> 
        <div className={s.hero}>
            <h1 className={s.title}>Be with us feel like <span className={s.title_text}>home</span>.</h1>
            <p className={s.text}>Pet-friendly hotels are becoming increasingly popular; appealing to travellers who can’t bear to be parted.</p>
        </div>
    </Container>
}

export default Hero;