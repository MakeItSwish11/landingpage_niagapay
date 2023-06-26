import Head from 'next/head';
import dynamic from 'next/dynamic';
import Aos from 'aos';

import { useEffect, useState } from 'react';
import Banner from '../../components/Banner';
import Devs from '../../components/Devs';
import Pricing from '../../components/Pricing';
import Contact from '../../components/Contact';

const Header = dynamic(() => import('../../components/Header'));
const Built = dynamic(() => import('../../components/Built'));
const Suits = dynamic(() => import('../../components/Suits'));

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState('Home');
  const menus = ['Home', 'Pricing', 'Contact'];

  const handleSetActiveMenu = (menu: string) => {
    setActiveMenu(menu);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    Aos.init({
      easing: 'ease-out-cubic',
      once: true,
      duration: 1800,
      offset: 0,
    });
  }, []);

  return (
    <div
      className={`w-full min-h-screen font-sans text-gray-900 bg-gradient-to-br from-transparent to-green-100 ${
        sidebarOpen ? 'overflow-scroll h-screen' : ''
      }`}
    >
      <Head>
        <title>NiagaPay - Solution For Payments</title>
        <meta
          name="description"
          content="Enhance your online business with our secure and seamless payment gateway service. Accept multiple payment methods, ensure encrypted transactions, and accelerate payment settlements for a smooth customer experience."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://niagapay.click/images/favicon.ico" />
      </Head>

      <Header
        sidebarOpen={sidebarOpen}
        toggleSidebar={toggleSidebar}
        menus={menus}
        activeMenu={activeMenu}
        setActiveMenu={handleSetActiveMenu}
      />
      <Banner />
      <Devs />
      <Built />
      <Pricing />
      <Suits />
      <Contact />
      {/* <Footer /> */}
    </div>
  );
}
