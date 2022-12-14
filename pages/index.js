import { SEO } from '../components/SEO';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Services } from '../components/Services';
import { useLanguage } from '../helpers/useLanguage';
import { PortsAndTerminals } from '../components/PortsAndTerminals';
import { FormContact } from '../components/FormContact';
import { Footer } from '../components/Footer';

export default function Home() {

  const { selectedLanguage } = useLanguage();

  const seoInformation = selectedLanguage.seoInfo.home;

  return (
    <>
      <SEO {...seoInformation} />
      <Header />
      <main>
        <Hero title={seoInformation.titleBanner} />
        <About />
        <Services />
        <PortsAndTerminals />
        <FormContact />
      </main>
      <Footer />
    </>
  )
}