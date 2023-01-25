import React from "react";
import  Container from "../Container";
import s from './BusinessCases.module.scss';
import cases1 from '../../images/cases/cases1.jpg';
import cases2 from '../../images/cases/cases2.jpg';
import cases3 from '../../images/cases/cases3.jpg';
import cases4 from '../../images/cases/cases4.jpg';
import cases5 from '../../images/cases/cases5.jpg';
import cases6 from '../../images/cases/cases6.jpg';

function BusinessCases() {
    return <div className={s.business_cases}>
        <Container> 
            <div className={s.box}>
                <h6 className={s.question}>This is what we do</h6>
                <h4 className={s.title}>Business Cases</h4>
                <p className={s.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, sapiente!</p>
                <ul className={s.list}>
                    <li className={s.item}>                        
                        <img className={s.img} src={cases1} alt="" />                            
                    </li>
                    <li className={s.item}>                        
                        <img className={s.img} src={cases2} alt="" />                            
                    </li>
                    <li className={s.item}>                        
                        <img className={s.img} src={cases3} alt="" />                            
                    </li>
                    <li className={s.item}>                        
                        <img className={s.img} src={cases4} alt="" />                            
                    </li>
                    <li className={s.item}>                        
                        <img className={s.img} src={cases5} alt="" />                            
                    </li>
                    <li className={s.item}>                        
                        <img className={s.img} src={cases6} alt="" />                            
                    </li>
                </ul>
            </div>
        </Container>
    </div>
}

export default BusinessCases;