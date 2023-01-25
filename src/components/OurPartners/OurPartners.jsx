import React from "react";
import Title from '../Title';
import s from './OurPartners.module.scss';
// import sprite from '../../images/icons.svg';

function OurPartners() {
    return <div className={s.gallery}>
        <Title>Our Partners</Title>
        <ul className={s.list}>
            <li className={s.item}>
                {/* <svg className={s.svg} alt="Partners" width="108" height="20">
                    <use href={`${sprite}#icon-1`}></use>
                </svg> */}
            </li>
            <li className={s.item}>
                {/* <svg className={s.svg} alt="Partners" width="108" height="20">
                    <use href={`${sprite}#icon-2`}></use>
                </svg> */}
            </li>
            <li className={s.item}>
                {/* <svg className={s.svg} alt="Partners" width="108" height="20">
                    <use href={`${sprite}#icon-3`}></use>
                </svg> */}
            </li>
            <li className={s.item}>
                {/* <svg className={s.svg} alt="Partners" width="108" height="20">
                    <use href={`${sprite}#icon-4`}></use>
                </svg> */}
            </li>
        </ul>
    </div>
}

export default OurPartners;