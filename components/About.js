import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Styles from '../styles/About.module.css';
import { useLanguage } from '../helpers/useLanguage';

export const About = React.memo(() => {

    const { selectedLanguage } = useLanguage();

    const contentAbout = selectedLanguage.about.content;

    const renderAboutContent = () =>
        contentAbout.map(cont => (
            <p key={cont.id}>{cont.text}</p>
        ));

    return (
        <section className={Styles.about}>
            <article>
                <div className={Styles.contentAbout}>
                    <h2>{selectedLanguage.about.title}</h2>
                    <div>{renderAboutContent()}</div>
                    <Link href='/contact'>
                        <a>{selectedLanguage.about.buttonTitle}</a>
                    </Link>
                </div>
                <div className={Styles.imagesAbout}>
                    <Image className={Styles.imageAbout}
                        src="/about-1.jpg"
                        alt="benicar-about"
                        width={200}
                        height={250}
                        objectFit='cover' />
                    <Image className={Styles.imageAbout}
                        src="/about-2.jpg"
                        alt="benicar-about"
                        width={200}
                        height={350}
                        objectFit='cover' />
                </div>
            </article>
        </section>
    )
}
)

About.displayName = 'About';