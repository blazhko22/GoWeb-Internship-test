import React from "react";
import Container from "../Container";
import contact from '../../images/home/contact.jpg';
import s from './Form.module.scss';

function Form() {
    return <div className={s.box}>
        <img className={s.img} src={contact} alt="" />
        <Container>
            <div className={s.box_form}>
                <h4 className={s.title}>Request Callback</h4>
                <form className={s.form} onSubmit=''>
                    <label className={s.label}>
                        <input
                            className={s.input}
                            type="text"
                            placeholder="Enter your name"
                            name="login"
                            // value={login}
                            // onChange={this.handleChange}
                        />
                    </label>
                    <label className={s.label}>
                        <input
                            className={s.input}
                            type="email"
                            placeholder="Enter email*"
                            name="email"
                            // value={email}
                            // onChange={this.handleChange}
                        />
                    </label>

                    <button className={s.btn} type="submit">Send</button>
                </form>    
            </div>            
        </Container>
    </div>
    
}

export default Form;