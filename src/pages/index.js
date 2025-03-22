
import Footer from '@/components/layouts/Footer.js';
import Header from '@/components/layouts/Header.js';
import ManinBanner from '@/components/layouts/MainBanner.js';
import Product from '@/components/Products';
import Service from '@/components/Service';
import Choose from '@/components/Choose';
import Contact from '@/components/Contact';
import ContactForm from '@/components/ContactForm';
import AboutUs from '@/components/AboutUs';
import Hero from '@/components/layouts/Hero';
import Website from '@/components/Website';
import Vision from '@/components/Vision';

export default function Home() {
  return (
    <>
      <div className="index-page">
      <Header/>
      <Hero/>
      <AboutUs/>
      <Website/>
      <Service/>
      <Choose/>
      <Vision/>
 

      <Contact/>
      </div>
        <Footer/>
    </>
  );
}
