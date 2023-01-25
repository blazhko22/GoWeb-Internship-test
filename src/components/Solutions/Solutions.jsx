import React from "react";
import  Container from "../Container";
// import people from '../../images/home/people.jpg';
import people from '../../images/home/people@2x.jpg';
import s from './Solutions.module.scss';

function Solutions() {
    return <div className={s.solutions}>
      <div className={s.solutions_img}>
        <img alt="People" 
          src={people}
        />
      </div>
      <div className={s.solutions_box}>
        <Container> 
          <div className={s.box}>
            <h6 className={s.question}>What you are looking for</h6>
            <h4 className={s.title}>We provide bespoke solutions</h4>
            <p className={s.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum illum dolore explicabo ab dolores itaque rerum temporibus doloribus iste maiores deleniti?</p>
            <button className={s.btn}>Read More</button>
          </div>
        </Container>
      </div>        
    </div>
}

export default Solutions;