import React from "react";
import Container from "../Container";
import Logo from "../Logo";
import Navigation from "../Navigation";
import s from './Footer.module.scss';
import sprite from '../../images/icons.svg';

function Footer() {
    return <footer className={s.footer}>
        <Container>
            <div className={s.footer_box}>
                <div className={s.box}>
                    <Logo />
                    <Navigation />
                </div>
                <ul className={s.list_svg}>
                    <li className={s.item_svg}>
                        <svg alt="logo title" width="16" height="16">
                            <use href={`${sprite}#icon-Facebook`}></use>
                        </svg>
                    </li>
                    <li className={s.item_svg}>
                        <svg alt="logo title" width="16" height="16">
                            <use href={`${sprite}#icon-Instagram`}></use>
                        </svg>
                    </li>
                    <li className={s.item_svg}>
                        <svg alt="logo title" width="16" height="16">
                            <use href={`${sprite}#icon-Telegram`}></use>
                        </svg>
                    </li>
                </ul>
            </div>
        </Container>
    </footer>
}

export default Footer;