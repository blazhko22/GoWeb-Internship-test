import React from "react";
import  Container from "../Container";
import s from './Team.module.scss';
import person1 from '../../images/team/person1.jpg';
import person2 from '../../images/team/person2.jpg';
import person3 from '../../images/team/person3.jpg';
import sprite from '../../images/icons.svg';

function Team() {
    return <div className={s.team}>
    <Container> 
        <div className={s.box}>
            <h6 className={s.question}>Who we are</h6>
            <h4 className={s.title}>Our Professional Team</h4>
            <p className={s.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, sapiente!</p>
            <ul className={s.list}>
                <li className={s.item}>
                    <div className={s.item_box}>
                        <ul className={s.box_list}>
                            <li className={s.box_list_item}>
                                <svg alt="Facebook" width="35" height="35">
                                    <use href={`${sprite}#icon-Facebook`}></use>
                                </svg>
                            </li>
                            <li className={s.box_list_item}>
                                <svg alt="Twitter" width="35" height="35">
                                    <use href={`${sprite}#icon-Twitter`}></use>
                                </svg>
                            </li>
                            <li className={s.box_list_item}>
                                <svg alt="Youtube" width="40" height="35">
                                    <use href={`${sprite}#icon-Youtube`}></use>
                                </svg>
                            </li>
                            <li className={s.box_list_item}>
                                <svg alt="Linkedin" width="31" height="35">
                                    <use href={`${sprite}#icon-Linkedin`}></use>
                                </svg>
                            </li>
                        </ul>
                        <img className={s.img} src={person1} alt="" />
                    </div>
                    <h5 className={s.name}>John Doe</h5>
                    <h6 className={s.post}>President</h6>                            
                </li>
                <li className={s.item}>                        
                    <img className={s.img} src={person2} alt="" />
                    <h5 className={s.name}>John Doe</h5>
                    <h6 className={s.post}>President</h6>                            
                </li>
                <li className={s.item}>                        
                    <img className={s.img} src={person3} alt="" />
                    <h5 className={s.name}>John Doe</h5>
                    <h6 className={s.post}>President</h6>                            
                </li>
            </ul>
        </div>
    </Container>
</div>
}

export default Team;