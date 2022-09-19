import React from 'react';
import { SEO } from '../components/SEO';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { PortsAndTerminals } from '../components/PortsAndTerminals'; // CAMBIAR COMPONENTE A UNO NUEVO
import { FormContact } from '../components/FormContact';
import { Footer } from '../components/Footer';
import { useLanguage } from '../helpers/useLanguage';

const portsTerminals = React.memo(() => {

    const { selectedLanguage } = useLanguage();

    const seoInformation = selectedLanguage.seoInfo.portsAndTerminals;

    return (
        <div>
            <SEO {...seoInformation} />
            <Header />
            <main>
                <Hero title={seoInformation.titleBanner} />
                <PortsAndTerminals />
                <FormContact />
            </main>
            <Footer />
        </div>
    )
}
)

portsTerminals.displayName = 'portsTerminals';

export default portsTerminals;