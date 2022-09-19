import React, { useState } from 'react';
import Styles from '../styles/FormContact.module.css';
import { useLanguage } from '../helpers/useLanguage';

export const FormContact = React.memo(() => {

    const { selectedLanguage } = useLanguage();

    const {
        title,
        description,
        name,
        phone,
        email,
        message,
        submit
    } = selectedLanguage.contact;

    return (
        <section className={Styles.formContactSection} id='contact'>
            <div>
                <h2>{title}</h2>
                <p>{description}</p>
                <div className={Styles.mapCont}>
                    <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.495401474489!2d-64.63735098481872!3d10.221569992699465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2d743a93e30189%3A0xfc69b53d6be204f0!2sCentro%20Comercial%20Puerto%20Plaza!5e0!3m2!1ses-419!2sve!4v1663481557558!5m2!1ses-419!2sve'
                        width={600}
                        height={450}
                        style={{ border: 0 }}
                        allowFullScreen
                        loading='lazy'
                        referrerPolicy='no-referrer-when-downgrade' />
                </div>
                <div className={Styles.formCont}>
                    <form action="https://formsubmit.co/operations@benicarmarine.com"
                        method='POST'
                        name='form'
                        id='form'>
                        <div>
                            <input type='text'
                                name='name'
                                id='name'
                                placeholder={name}
                                required />
                            <input type='number'
                                name='phone'
                                id='phone'
                                placeholder={phone}
                                required />
                        </div>
                        <div>
                            <input type='email'
                                name='email'
                                id='email'
                                placeholder={email}
                                required />
                        </div>
                        <div>
                            <textarea name='message'
                                id='message'
                                placeholder={message}
                                required />
                        </div>
                        <button type='submit'>{submit}</button>
                    </form>
                </div>
            </div>
        </section>
    )
}
)

FormContact.displayName = 'FormContact';