import React from 'react';
// import  Container  from '../Container';
import Header from '../Header';
import Hero from '../Hero';
import s from "./Box.module.scss";

function Box() {
  return <div className={s.box}>
            {/* <Container> */}
              <Header />
              <Hero />
            {/* </Container> */}
          </div>
}

export default Box;
