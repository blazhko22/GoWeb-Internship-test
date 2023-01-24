import React from "react";
// import s from './Main.module.scss';
import Container from '../Container';
import AboutUs from "../AboutUs";
import Gallery from "../Gallery";
import TopProducts from "../TopProducts";
import OurPartners from "../OurPartners";


function Main() {
    return <Container>
        <AboutUs />
        <Gallery />
        <TopProducts />
        <OurPartners />
    </Container>
}

export default Main;