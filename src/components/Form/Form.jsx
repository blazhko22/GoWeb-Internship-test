import React, { useState } from "react";
import Container from "../Container";
import contact from '../../images/home/contact.jpg';
import {useForm, Controller} from "react-hook-form";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import sprite from '../../images/icons.svg';
import s from './Form.module.scss';

function Form() {
    const {control, handleSubmit, setValue} = useForm();
    const [modal, setModal] = useState(false);
    const onSubmit = (values) => {
        setModal(true)
    }
    const handleClose = () => {
        setModal(false)
        setValue('name', '')
        setValue('email', '')
    }
    return <div id="form" className={s.box}>
        <div>
            <img className={s.img} src={contact} alt="" />
        </div>
        <Container>
            <div className={s.box_form}>
                <h4 className={s.title}>Request Callback</h4>
                <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
                <Controller rules={{required: "This is a required field"}} name='name' control={control} render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
                
                <label className={s.label}>
                <input
                    className={s.input}
                    type="text"
                    placeholder="Enter your name"
                    name="login"
                    value={value}
                    onChange={onChange}
                />
                {error && <span className={s.error}>
                    <svg alt="Triangle" width="10" height="10">
                        <use href={`${sprite}#icon-triangle`}></use>
                    </svg>{error?.message}</span>}
            </label>
            )} />
            <Controller rules={{required: "This is a required field"}} name='email' control={control} render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
            <label className={s.label}>
                <input
                    className={s.input}
                    type="email"
                    placeholder="Enter email*"
                    name="email"
                    value={value}
                    onChange={onChange}
                />
                {error && <span className={s.error}>
                    <svg alt="Triangle" width="8" height="8">
                        <use href={`${sprite}#icon-triangle`}></use>
                    </svg>{error?.message}</span>}
            </label>

              )} />

                    <button className={s.btn} type="submit">Send</button>
                </form>    
            </div> 
            {modal && <div className={s.modal}>                
                <div className={s.modalBox}>
                    <p className={s.modalTitle}>Thank you!</p>
                    <p className={s.modalText}>Your from submission received.</p>
                    <button className={s.modalClose} onClick={handleClose}>&#8592; Back to our site</button>
                </div>                
            </div>}           
        </Container>
    </div>
    
}

export default Form;