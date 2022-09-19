import React from 'react';
import { SEO } from '../components/SEO';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { FormContact } from '../components/FormContact';
import { Footer } from '../components/Footer';

import { useLanguage } from '../helpers/useLanguage';

const about = React.memo(() => {

  const { selectedLanguage } = useLanguage();

  const seoInformation = selectedLanguage.seoInfo.about;

  return (
    <div>
      <SEO {...seoInformation} />
      <Header />
      <main>
        <Hero title={seoInformation.titleBanner} />
        <About />
        <FormContact />
      </main>
      <Footer />
    </div>
  )
}
)

about.displayName = 'about';

export default about;