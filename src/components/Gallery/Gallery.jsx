import React from "react";
import Title from '../Title';
import s from './Gallery.module.scss';
import img1 from '../../images/gallery1.jpg';
import img2 from '../../images/gallery2.jpg';
import img3 from '../../images/gallery3.jpg';
import img4 from '../../images/gallery4.jpg';
import img5 from '../../images/gallery5.jpg';
import img6 from '../../images/gallery6.jpg';

function Gallery() {
    return <div className={s.gallery}>
        <Title>Gallery</Title>
        <ul className={s.list}>
            <li className={s.item}>
                <img className={s.img} src={img1} alt="" />
            </li>
            <li className={s.item}>
                <img className={s.img} src={img2} alt="" />
            </li>
            <li className={s.item}>
                <img className={s.img} src={img3} alt="" />
            </li>
            <li className={s.item}>
                <img className={s.img} src={img4} alt="" />
            </li>
            <li className={s.item}>
                <img className={s.img} src={img5} alt="" />
            </li>
            <li className={s.item}>
                <img className={s.img} src={img6} alt="" />
            </li>
        </ul>
    </div>
}

export default Gallery;