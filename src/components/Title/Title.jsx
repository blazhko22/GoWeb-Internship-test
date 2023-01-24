import React from "react";
import s from './Title.module.scss';

function AboutUs({children}) {
    return <h2 className={s.title}>{children}</h2>
}

export default AboutUs;