import React from 'react';
import Restaurant from '../public/assets/Restaurant.png';
import Retail from '../public/assets/Retail.png';
import Entertainment from '../public/assets/Entertainment.png';
import Brands from '../public/assets/Brands.png';
import Team from '../public/assets/team.png';
import Health from '../public/assets/Health.png';
import NonProfit from '../public/assets/NonProfit.png';
import PublicFigure from '../public/assets/PublicFigure.png';
import Image from 'next/image';

function Suits() {
  const suits = [
    {
      id: 1,
      img: Restaurant,
      desc: 'Restaurant and Cafe Chain',
      delay: '100',
    },
    {
      id: 2,
      img: Retail,
      desc: 'Retail Businesses',
      delay: '400',
    },
    {
      id: 3,
      img: Entertainment,
      desc: 'Entertainment Businesses',
      delay: '700',
    },
    {
      id: 4,
      img: Team,
      desc: 'Community',
      delay: '1000',
    },
    {
      id: 5,
      img: Brands,
      desc: 'Consumer Brands',
      delay: '1300',
    },
    {
      id: 6,
      img: Health,
      desc: 'Health, Beauty and Fitness',
      delay: '1600',
    },
    {
      id: 7,
      img: NonProfit,
      desc: 'Non-Profits',
      delay: '1900',
    },
    {
      id: 8,
      img: PublicFigure,
      desc: 'Public Figures',
      delay: '2200',
    },
  ];
  return (
    <section className="py-12 px-6 mx-auto max-w-screen-xl sm:px-8 md:px-12 lg:px-16 xl:px-24">
      <div data-aos="fade-up" data-aos-offset="350">
        <h2 className="max-w-lg mx-auto text-4xl font-bold tracking-tight text-center text-black sm:text-5xl md:text-6xl leading-tighter font-rubik">
          Our Service is suitable for
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-4">
        {suits.map(({ id, img, desc, delay }) => (
          <div
            key={id}
            className="flex flex-col justify-center items-center mt-2 m-2 mb-5 pt-12 pb-8 rounded-xl cursor-pointer
                 transition transform duration-200 ease-out"
            data-aos="zoom-out"
            data-aos-offset="100"
            data-aos-delay={delay}
          >
            <div
              className="relative h-16 w-16"
              data-aos="fade-left"
              data-off-set="350"
              data-aos-delay={delay}
            >
              <Image src={img} alt="" />
            </div>
            <div
              className="text-center lg:p-5"
              data-aos="fade-left"
              data-off-set="350"
              data-aos-delay={delay}
            >
              <h2 className="text-xl font-custom2 font-bold">{desc}</h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Suits;
