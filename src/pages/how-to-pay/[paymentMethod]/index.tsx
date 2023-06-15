import Layout from '@/layout/Layout';
import { ArrowLeft } from 'lucide-react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';
import CC from '../../../../public/assets/visa.webp';

interface MethodProps {}

const methodVA = [
  {
    img: 'https://niagapay.click/images/method/014-6419973dbedd18275e822258.webp',
    width: 100,
    height: 100,
    link: 'BCA',
  },
  {
    img: 'https://niagapay.click/images/method/002-6419973dbedd18275e82225a.webp',
    width: 100,
    height: 100,
    link: 'BRI',
  },
  {
    img: 'https://niagapay.click/images/method/022-6419973dbedd18275e82225c.webp',
    width: 100,
    height: 100,
    link: 'CIMB',
  },
  {
    img: 'https://niagapay.click/images/method/009-6419973dbedd18275e82225e.webp',
    width: 100,
    height: 100,
    link: 'BNI',
  },
  {
    img: 'https://niagapay.click/images/method/008-6419973dbedd18275e822260.webp',
    width: 100,
    height: 100,
    link: 'Mandiri',
  },
  {
    img: 'https://niagapay.click/images/method/013-6419973dbedd18275e822266.webp',
    width: 100,
    height: 100,
    link: 'Permata',
  },
  {
    img: 'https://niagapay.click/images/method/011-6419973dbedd18275e822268.webp',
    width: 100,
    height: 100,
    link: 'Danamon',
  },
  {
    img: 'https://niagapay.click/images/method/451-6481cdb20e36bf4d1b839a4f.webp',
    width: 100,
    height: 100,
    link: 'BSI',
  },
  {
    img: 'https://niagapay.click/images/490-6481d1020e36bf4d1b839c87.webp',
    width: 100,
    height: 100,
    link: 'BNC',
  },
];

const methodEWallet = [
  {
    img: 'https://niagapay.click/images/method/payovo-6419973dbedd18275e822270.webp',
    width: 100,
    height: 100,
    link: 'OVO',
  },
  {
    img: 'https://niagapay.click/images/method/paydana-6419973dbedd18275e822272.webp',
    width: 100,
    height: 100,
    link: 'DANA',
  },
  {
    img: 'https://niagapay.click/images/method/paylinkaja-6419973dbedd18275e822274.webp',
    width: 100,
    height: 100,
    link: 'LinkAja',
  },
  {
    img: 'https://niagapay.click/images/method/payshopeepay-6419973dbedd18275e822278.webp',
    width: 100,
    height: 100,
    link: 'ShopeePay',
  },
];

const methodRetail = [
  {
    img: 'https://niagapay.click/images/method/indomaret-6419973dbedd18275e82226c.webp',
    width: 100,
    height: 100,
    link: 'Indomaret',
  },
  {
    img: 'https://niagapay.click/images/method/alfamart-6419973dbedd18275e82226a.webp',
    width: 100,
    height: 100,
    link: 'Alfamaret',
  },
];

const MethodPage: FC<MethodProps> = ({}) => {
  const router = useRouter();
  const { paymentMethod } = router.query;

  const formatPaymentMethod = (paymentMethod: string) => {
    const formattedString = paymentMethod
      .replace(/-/g, ' ')
      .replace(/\b\w/g, (match) => match.toUpperCase());
    return formattedString;
  };

  const formattedPaymentMethod =
    typeof paymentMethod === 'string' ? formatPaymentMethod(paymentMethod) : '';

  const handleClick = (method: string) => {
    router.push(`${paymentMethod}/${method}`);
  };

  return (
    <>
      <Head>
        <title>{`How To Pay ${formattedPaymentMethod} | NiagaPay`}</title>
        <meta name="description" content="Solution for payments" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://niagapay.click/images/favicon.ico" />
      </Head>
      <header className="px-8 py-4 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-black">
            NiagaPay
          </Link>

          <div className="flex flex-row items-center space-x-3">
            <button className="p-4 bg-black text-white rounded-md">
              Contact Us
            </button>
            <Link href="login" className="p-4 bg-black text-white rounded-md">
              Login
            </Link>
          </div>
        </div>
      </header>
      <Layout>
        <div className="pt-4">
          <button
            className="h-10 py-2 px-4 active:scale-95 inline-flex items-center justify-center rounded-md text-sm font-medium transition-color focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:opacity-50 dark:focus:ring-slate-400 disabled:pointer-events-none dark:focus:ring-offset-slate-900 bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-200 dark:text-slate-900 dark:hover:bg-slate-100"
            onClick={() => router.push('/how-to-pay')}
          >
            <ArrowLeft className="w-6 h-6 text-white" /> Back to How To Pay
          </button>
          {paymentMethod === 'virtual-account' ? (
            <>
              <h1 className="text-2xl text-center lg:text-start lg:text-2xl py-2">
                Guide to Virtual Account Payment Methods
              </h1>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3">
                {methodVA.map((va, idx) => (
                  <div
                    className="p-4 rounded-md items-center border cursor-pointer hover:shadow-md hover:bg-gray-300 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"
                    key={idx}
                    onClick={() => handleClick(va.link)}
                  >
                    <Image
                      className="mx-auto p-4"
                      src={va.img}
                      width={va.width}
                      height={va.height}
                      alt=""
                    />
                  </div>
                ))}
              </div>
            </>
          ) : paymentMethod === 'e-wallet' ? (
            <>
              <h1 className="text-2xl text-center lg:text-start lg:text-2xl py-2">
                Guide to E-Wallet Payment Methods
              </h1>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3">
                {methodEWallet.map((ewallet, idx) => (
                  <div
                    className="p-4 rounded-md items-center border cursor-pointer hover:shadow-md hover:bg-gray-300 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"
                    key={idx}
                    onClick={() => handleClick(ewallet.link)}
                  >
                    <Image
                      className="mx-auto p-4"
                      src={ewallet.img}
                      width={ewallet.width}
                      height={ewallet.height}
                      alt=""
                    />
                  </div>
                ))}
              </div>
            </>
          ) : paymentMethod === 'convenience-store' ? (
            <>
              <h1 className="text-2xl text-center lg:text-start lg:text-2xl py-2">
                Methods of payment and cash withdrawals through Indomaret
                Convenience Stores, Alfa Group (Alfamart, Alfamidi, etc.)
              </h1>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3">
                {methodRetail.map((retail, idx) => (
                  <div
                    className="p-4 rounded-md items-center border cursor-pointer hover:shadow-md hover:bg-gray-300 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"
                    key={idx}
                    onClick={() => handleClick(retail.link)}
                  >
                    <Image
                      className="mx-auto p-4"
                      src={retail.img}
                      width={retail.width}
                      height={retail.height}
                      alt=""
                    />
                  </div>
                ))}
              </div>
            </>
          ) : (
            <>
              <Image
                className="mx-auto p-4"
                src={CC}
                width={100}
                height={100}
                alt=""
              />
              <h1 className="text-center">Guide to Credit Card Payments</h1>
              <div className="p-4 bg-white mx-2 border rounded-md">
                <h1 className="text-xl font-bold">
                  How to pay with Credit Card
                </h1>
                <ol className="list-decimal px-8">
                  <li>
                    Partner provides a <strong>checkout URL</strong>
                  </li>
                  <li>Fill in your credit card details</li>
                  <li>Complete the checkout process</li>
                  <li>You're done!</li>
                </ol>
              </div>
            </>
          )}
        </div>
      </Layout>
    </>
  );
};

export default MethodPage;
