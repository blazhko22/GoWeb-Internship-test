import React from "react";
import  Container from "../Container";
import sprite from '../../images/icons.svg';
import s from './Hero.module.scss';


function Hero() {
    return <div id="home" className={s.hero}>
        <Container> 
            <div className={s.box}>
                <h1 className={s.title}>The Sky Is The Limit</h1>
                <p className={s.text}>We provide world class financial assistance</p>
                <button className={s.btn}>
                    <svg className={s.svg} alt="Partners" width="9" height="18">
                        <use href={`${sprite}#icon-right`}></use>
                    </svg> 
                    Read More
                </button>
            </div>
        </Container>
    </div>
}

export default Hero;