import React from 'react';
import Link from 'next/link';
import Styles from '../styles/NotFound.module.css';
import { SEO } from '../components/SEO';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { FormContact } from '../components/FormContact';
import { Footer } from '../components/Footer';
import { useLanguage } from '../helpers/useLanguage';

const PageNotFound = React.memo(() => {

    const { selectedLanguage } = useLanguage();

    const seoInformation = selectedLanguage.seoInfo.pageNotFound;

    return (
        <>
            <SEO {...seoInformation} />
            <Header />
            <main>
                <Hero title={seoInformation.titleBanner} />
                <section className={Styles.pageNotFound}>
                    <div>
                        <h1>Error 404 - {seoInformation.titleBanner}</h1>
                        <p>{seoInformation.description}</p>
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                    </div>
                </section>
                <FormContact />
            </main>
            <Footer />
        </>
    )
}
)

PageNotFound.displayName = 'PageNotFound';

export default PageNotFound;