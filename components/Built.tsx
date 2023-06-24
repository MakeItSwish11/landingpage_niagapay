import React from 'react';
import fast from '../public/assets/Fast.png';
import own from '../public/assets/Own.png';
import customized from '../public/assets/Customized.png';
import Image from 'next/image';

function Built() {
  const built = [
    {
      id: 1,
      img: fast,
      title: 'Instant Activation',
      desc: 'Start accepting payments instantly with online registration and a few supporting documents.',
      delay: '100',
    },
    {
      id: 2,
      img: own,
      title: 'Dashboard',
      desc: 'Manage your payment operations with real time data from the Niagapay dashboard.',
      delay: '100',
    },
    {
      id: 3,
      img: customized,
      title: '100+ Payment Methods',
      desc: 'Receive and send payments through all E-Wallets, Banks, VA, Credit / Debit Cards and More.',
      delay: '100',
    },
  ];
  return (
    <section className="py-12 px-6 mx-auto max-w-screen-xl sm:px-8 md:px-12 lg:px-16 xl:px-24">
      <div
        data-aos="fade-up"
        data-aos-offset="350"
        className="flex items-center justify-center"
      >
        <h2 className="max-w-lg text-4xl font-bold tracking-tight text-center text-black sm:text-5xl md:text-5xl leading-tighter font-rubik">
          Why Integrate with us
        </h2>
      </div>

      <div className="flex flex-col items-center pt-12 sm:items-start sm:flex-row md:pt-18">
        {built.map(({ id, img, title, desc, delay }) => (
          <div
            key={id}
            className="flex flex-col items-center w-full max-w-sm pt-8 text-center sm:text-left sm:block sm:pt-0 md:w-1/3"
            data-aos="zoom-out"
            data-aos-offset="100"
            data-aos-delay={delay}
          >
            <div
              className="relative h-16 w-16"
              data-aos="fade-left"
              data-off-set="350"
            >
              <Image src={img} alt="" width={80} height={80} />
            </div>
            <div data-aos="fade-left" data-off-set="350">
              <h3 className="pt-3 text-xl font-bold text-black sm:pt-6 font-rubik">
                {title}
              </h3>
              <p className="pt-4 pr-8 text-sm leading-relaxed text-gray-700 md:pr-16">
                {desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Built;
