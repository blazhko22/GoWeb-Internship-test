import React from "react";
import Title from '../Title';
import s from './TopProducts.module.scss';
// import img1 from '../../images/gallery1.jpg';
// import img2 from '../../images/gallery2.jpg';
// import img3 from '../../images/gallery3.jpg';

function TopProducts() {
    return <div className={s.gallery}>
        <Title>Top Products</Title>
        <ul className={s.list}>
            <li className={s.item}>
                <div className={s.item_box}>
                    {/* <img className={s.img} src={img1} alt="" /> */}
                    <div className={s.box_text}>
                        <span className={s.top}>Hot sale</span>
                        <span className={s.action}>Action</span>
                    </div>
                </div>
                <div className={s.item_price}>
                    <p className={s.text}>Bed</p>
                    <p className={s.price}>8 999<p className={s.price_color}>8 999</p></p>
                </div>
            </li>
            <li className={s.item}>
                <div className={s.item_box}>
                    {/* <img className={s.img} src={img2} alt="" /> */}
                    <div className={s.box_text}>
                        <span className={s.top}>Hot sale</span>
                        <span className={s.action}>Action</span>
                    </div>
                </div>
                <div className={s.item_price}>
                    <p className={s.text}>Bed</p>
                    <p className={s.price}>8 999<p className={s.price_color}>8 999</p></p>
                </div>
            </li>
            <li className={s.item}>
                <div className={s.item_box}>
                    {/* <img className={s.img} src={img3} alt="" /> */}
                    <div className={s.box_text}>
                        <span className={s.top}>Hot sale</span>
                        <span className={s.action}>Action</span>
                    </div>
                </div>
                <div className={s.item_price}>
                    <p className={s.text}>Bed</p>
                    <p className={s.price}>8 999<p className={s.price_color}>8 999</p></p>
                </div>
            </li>
        </ul>
    </div>
}

export default TopProducts;