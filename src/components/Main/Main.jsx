import React from "react";
// import s from './Main.module.scss';
import Hero from '../Hero';
import Solutions from "../Solutions";
import BusinessCases from "../BusinessCases";
import Blog from "../Blog";
import Team from "../Team";
import Form from "../Form";

function Main() {
    return <main>
        <Hero />
        <Solutions />
        <BusinessCases />
        <Blog /> 
        <Team />
        <Form />
    </main>
}

export default Main;