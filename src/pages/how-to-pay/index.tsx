import Layout from '@/layout/Layout';
import { CreditCard, Send, Store, Wallet } from 'lucide-react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';

interface HowToPayProps {}

const HowToPayPage: FC<HowToPayProps> = ({}) => {
  const router = useRouter();
  const items = [
    {
      label: 'Virtual Account',
      desc: 'How to pay for Virtual Accounts using ATMs, mobile banking, and internet banking',
      icons: <Send className="w-6 h-6 text-white" />,
      link: 'virtual-account',
    },
    {
      label: 'E-Wallet',
      desc: 'Payment methods are via OVO, DANA, ShopeePay and LinkAja e-wallets',
      icons: <Wallet className="w-6 h-6 text-white" />,
      link: 'e-wallet',
    },
    {
      label: 'Convenience Store',
      desc: 'Method of payment and cash withdrawal through Convenience Store Indomaret, Alfa Group (Alfamart, Indomaret, etc.)',
      icons: <Store className="w-6 h-6 text-white" />,
      link: 'convenience-store',
    },
    {
      label: 'Credit Card',
      desc: 'Method of payment via credit card',
      icons: <CreditCard className="w-6 h-6 text-white" />,
      link: 'credit-card',
    },
  ];

  const handleClick = (link: string) => {
    router.push(`how-to-pay/${link}`);
  };
  return (
    <>
      <Head>
        <title>How To Pay | NiagaPay</title>
        <meta name="description" content="Solution for payments" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://niagapay.click/images/favicon.ico" />
      </Head>
      <header className="px-8 py-4 shadow-md">
        <div className=" max-w-7xl mx-auto flex justify-between items-center  ">
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
        <div className="grid grid-cols-1 ">
          <h1 className="text-2xl text-black text-center py-8">
            Guide to Payment Methods & Cash Withdrawals
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 ">
            {items.map((item, idx) => (
              <div
                key={idx}
                className="p-4 flex flex-col space-y-3 items-center bg-gray-200 rounded-md  text-center "
              >
                <div className="w-fit p-4 rounded-full bg-black">
                  {item.icons}
                </div>
                <h1 className="text-lg">{item.label}</h1>
                <p className="text-base">{item.desc}</p>
                <button
                  className="h-10 py-2 px-4 active:scale-95 inline-flex items-center justify-center rounded-md text-sm font-medium transition-color focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:opacity-50 dark:focus:ring-slate-400 disabled:pointer-events-none dark:focus:ring-offset-slate-900 bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-200 dark:text-slate-900 dark:hover:bg-slate-100"
                  onClick={() => handleClick(item.link)}
                >
                  View Guide
                </button>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default HowToPayPage;
