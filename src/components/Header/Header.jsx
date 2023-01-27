import React from "react";
import Container from "../Container";
import Logo from "../Logo";
import Navigation from "../Navigation";
import s from './Header.module.scss';

function Header({scrollTop}) {
    return <header className={scrollTop > 0 ? s.coloredHeader : s.header}>
        <Container>
            <div className={s.header_box}>                
                <Logo />
                <Navigation />                                 
            </div>
        </Container>
    </header>
}

export default Header;