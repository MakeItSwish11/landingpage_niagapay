import Head from 'next/head';
import dynamic from 'next/dynamic';
import Aos from 'aos';

import { useEffect, useState } from 'react';

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
    <>
      <Head>
        <title>NiagaPay - Solution For Payments</title>
        <meta
          name="description"
          content="Enhance your online business with our secure and seamless payment gateway service. Accept multiple payment methods, ensure encrypted transactions, and accelerate payment settlements for a smooth customer experience."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://niagapay.click/images/favicon.ico" />
      </Head>

      <div className="max-w-7xl mx-auto overflow-hidden">
        <Header />
        <main className="max-w-7xl mx-auto px-8">
          <Built />
          <Suits />
        </main>
        <Footer />
      </div>
    </>
  );
}
