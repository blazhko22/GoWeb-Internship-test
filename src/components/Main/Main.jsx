import React from "react";
// import s from './Main.module.scss';
import Hero from '../Hero';
import AboutUs from "../AboutUs";
import Gallery from "../Gallery";
import TopProducts from "../TopProducts";
import OurPartners from "../OurPartners";


function Main() {
    return <main>
        <Hero />
        <AboutUs />
        <Gallery />
        <TopProducts />
        <OurPartners />
    </main>
}

export default Main;