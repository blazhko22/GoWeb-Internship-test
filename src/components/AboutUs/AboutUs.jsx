import React from "react";
import Title from "../Title";
import s from './AboutUs.module.scss';
// import aboutUs from '../../images/about-us.jpg'



function AboutUs() {
    return <div className={s.box}>
        <Title>About Us</Title>
        <div className={s.blok}>
          {/* <img className={s.img} src={aboutUs} alt="" /> */}
          <p className={s.text}><span className={s.text_title}>"Rayal House"</span> – "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        </div>
    </div>
}

export default AboutUs;