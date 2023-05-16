import React from 'react';
import fast from '../public/assets/Fast.png';
import own from '../public/assets/Own.png';
import customized from '../public/assets/Customized.png';
import managed from '../public/assets/Managed.png';
import Image from 'next/image';

function Built() {
  const built = [
    {
      id: 1,
      img: fast,
      title: 'Launch Fast',
      desc: 'Having Android & iOS mobile apps in just a few weeks',
      delay: '400',
    },
    {
      id: 2,
      img: own,
      title: 'Your Own App',
      desc: 'Mobile apps with your own name, brand & corporate identity',
      delay: '700',
    },
    {
      id: 3,
      img: customized,
      title: 'Customized',
      desc: 'Design and build app that follow your business process',
      delay: '1000',
    },
    {
      id: 4,
      img: managed,
      title: 'Managed Service',
      desc: 'Developed, run, and managed by professional team',
      delay: '1300',
    },
  ];
  return (
    <section className="py-8">
      <div data-aos="fade-up" data-aos-offset="350">
        <h1 className=" text-center font-custom2 text-5xl mb-8">
          Why Integrate with us
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-4">
        {built.map(({ id, img, title, desc, delay }) => (
          <div
            key={id}
            className="flex flex-col bg-gray-100 justify-center items-center mt-2 m-2 mb-5 pt-12 pb-8 rounded-xl cursor-pointer
                hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out"
            data-aos="zoom-out"
            data-aos-offset="100"
            data-aos-delay={delay}
          >
            <div
              className="relative h-16 w-16"
              data-aos="fade-left"
              data-off-set="350"
            >
              <Image src={img} alt="" className="object-contain" />
            </div>
            <div
              className="text-center lg:p-5 lg:pt-10"
              data-aos="fade-left"
              data-off-set="350"
            >
              <h2 className="font-custom1 font-bold">{title}</h2>
              <p className="text-base font-custom2">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Built;
