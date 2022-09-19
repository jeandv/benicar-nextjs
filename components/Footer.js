import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Styles from '../styles/Footer.module.css';
import { useLanguage } from '../helpers/useLanguage';

export const Footer = React.memo(() => {

    const { selectedLanguage } = useLanguage();

    const headerItems = selectedLanguage.header;
    const {
        manager,
        rif,
        description,
        titleSection,
        location,
        address,
        copyRight,
        informationContact
    } = selectedLanguage.footer;

    return (
        <footer className={Styles.footer}>
            <div className={Styles.containerFooter}>
                <div className={Styles.boxFooter}>
                    <div className={Styles.logo}>
                        <Image src="/benicar-05.png"
                            alt="benicar-logo"
                            width={200}
                            height={180}
                            objectFit='contain'
                        />
                    </div>
                    <div className={Styles.terms}>
                        <p>{description}</p>
                        <h4>{manager} - {rif}</h4>
                    </div>
                </div>
                <div className={Styles.boxFooter}>
                    <h3>{titleSection}</h3>
                    {
                        headerItems.map((item) => {
                            return (
                                <Link key={item.title} href={item.link}>
                                    <a>{item.title}</a>
                                </Link>
                            )
                        })
                    }
                </div>
                <div className={Styles.boxFooter}>
                    <h3>{informationContact.title}</h3>
                    {
                        informationContact.allInfoContact.map((contact) => {
                            return (
                                <h4 key={contact}>{contact}</h4>
                            )
                        })
                    }
                </div>
                <div className={Styles.boxCopy}>
                    <p>{location}</p>
                    <p>{address}</p>
                    <hr />
                    <p>{copyRight} © 2022 | <Link href='/'><a>Benicar Marine Services, C.A.</a></Link></p>
                </div>
            </div>
        </footer >
    )
}
)

Footer.displayName = 'Footer';