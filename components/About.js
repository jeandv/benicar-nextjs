import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Styles from '../styles/About.module.css';
import { useLanguage } from '../helpers/useLanguage';
import { motion } from 'framer-motion';

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
                    <motion.div
                        whileInView={{ opacity: [0, 1] }}
                        transition={{
                            duration: 0.2,
                            delayChildren: 0.2,
                            type: "tween",
                            repeat: false,
                            ease: "easeOut"
                        }}>
                        <Link href='/contact'>
                            <a>{selectedLanguage.about.buttonTitle}</a>
                        </Link>
                    </motion.div>
                </div>
                <div className={Styles.imagesAbout}>
                    <motion.div
                        whileInView={{ opacity: [0, 1] }}
                        transition={{
                            duration: 0.2,
                            delayChildren: 0.5,
                            type: "tween",
                            repeat: false,
                            ease: "easeOut"
                        }}>
                        <Image className={Styles.imageAbout}
                            src="/about-1.jpg"
                            alt="benicar-about"
                            width={200}
                            height={250}
                            objectFit='cover' />
                    </motion.div>
                    <motion.div
                        whileInView={{ opacity: [0, 1] }}
                        transition={{
                            duration: 0.5,
                            delayChildren: 0.5,
                            type: "tween",
                            repeat: false,
                            ease: "easeOut"
                        }}>
                        <Image className={Styles.imageAbout}
                            src="/about-2.jpg"
                            alt="benicar-about"
                            width={200}
                            height={350}
                            objectFit='cover' />
                    </motion.div>
                </div>
            </article>
        </section>
    )
}
)

About.displayName = 'About';