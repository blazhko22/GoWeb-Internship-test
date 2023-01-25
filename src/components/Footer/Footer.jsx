import React from "react";
import Container from "../Container";
import s from './Footer.module.scss';
import sprite from '../../images/icons.svg';

function Footer() {
    return <footer className={s.footer}>
        <Container>
            <div className={s.box}>
                <ul className={s.list}>
                    <li className={s.item}>
                        <svg alt="Facebook" width="35" height="35">
                            <use href={`${sprite}#icon-Facebook`}></use>
                        </svg>
                    </li>
                    <li className={s.item}>
                        <svg alt="Twitter" width="35" height="35">
                            <use href={`${sprite}#icon-Twitter`}></use>
                        </svg>
                    </li>
                    <li className={s.item}>
                        <svg alt="Youtube" width="40" height="35">
                            <use href={`${sprite}#icon-Youtube`}></use>
                        </svg>
                    </li>
                    <li className={s.item}>
                        <svg alt="Linkedin" width="31" height="35">
                            <use href={`${sprite}#icon-Linkedin`}></use>
                        </svg>
                    </li>
                </ul>
                <p className={s.text}>Copyright © 2021 - FinanceLedger</p>
            </div>
        </Container>
    </footer>
}

export default Footer;