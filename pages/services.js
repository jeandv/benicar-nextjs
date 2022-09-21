import React from 'react';
import { SEO } from '../components/SEO';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services'; // CAMBIAR COMPONENTE A UNO NUEVO
import { FormContact } from '../components/FormContact';
import { Footer } from '../components/Footer';
import { useLanguage } from '../helpers/useLanguage';

const services = React.memo(() => {

    const { selectedLanguage } = useLanguage();

    const seoInformation = selectedLanguage.seoInfo.services;

    return (
        <div>
            <SEO {...seoInformation} />
            <Header />
            <main>
                <Hero title={seoInformation.titleBanner} />
                <Services backgroundColor='#fff' margin='-120px' />
                <FormContact />
            </main>
            <Footer />
        </div>
    )
}
)

services.displayName = 'services';

export default services;