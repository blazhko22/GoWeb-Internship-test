import React from "react";
import  Container from "../Container";
import s from './Hero.module.scss';


function Hero() {
    return <div className={s.hero}>
        <Container> 
            <div className={s.box}>
                <h2 className={s.title}>The Sky Is The Limit</h2>
                <p className={s.text}>We provide world class financial assistance</p>
                <button className={s.btn}>
                    <svg className={s.svg} alt="Partners" width="9" height="18">
                        <use href={'../../images/fa-solid_angle-right.svg'}></use>
                    </svg> 
                    Read More
                </button>
            </div>
        </Container>
    </div>
}

export default Hero;