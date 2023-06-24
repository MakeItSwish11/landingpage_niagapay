import Head from 'next/head';
import dynamic from 'next/dynamic';
import Aos from 'aos';

import { useEffect } from 'react';
import Banner from '../../components/Banner';
import Devs from '../../components/Devs';
import Pricing from '../../components/Pricing';

const Header = dynamic(() => import('../../components/Header'));
const Built = dynamic(() => import('../../components/Built'));
const Suits = dynamic(() => import('../../components/Suits'));
const Footer = dynamic(() => import('../../components/Footer'));

export default function Home() {
  useEffect(() => {
    Aos.init({
      easing: 'ease-out-cubic',
      once: true,
      duration: 1800,
      offset: 0,
    });
  }, []);

  return (
    <div className="w-full min-h-screen font-sans text-gray-900 bg-gradient-to-br from-transparent to-green-100">
      <Head>
        <title>NiagaPay - Solution For Payments</title>
        <meta
          name="description"
          content="Enhance your online business with our secure and seamless payment gateway service. Accept multiple payment methods, ensure encrypted transactions, and accelerate payment settlements for a smooth customer experience."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://niagapay.click/images/favicon.ico" />
      </Head>

      <Header />
      <Banner />
      <Devs />
      <Built />
      <Pricing />
      <Suits />
      <Footer />
    </div>
  );
}
