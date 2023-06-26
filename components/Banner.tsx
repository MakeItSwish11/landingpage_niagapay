import { FC, useState } from 'react';
import pg from '../public/assets/PG.png';
import Image from 'next/image';
import Star from '../public/assets/star.svg';
import avatar1 from '../public/assets/avatar-1.jpeg';
import avatar2 from '../public/assets/avatar-2.jpeg';
import avatar3 from '../public/assets/avatar-3.jpeg';

interface BannerProps {}

const avatarImages = [avatar1, avatar2, avatar3];

const Banner: FC<BannerProps> = ({}) => {
  return (
    <div className="flex flex-wrap-reverse gap-y-24 justify-between py-12 px-6 mx-auto max-w-screen-xl sm:px-8 md:px-12 lg:px-16 xl:px-24">
      <div className="relative z-10 md:w-1/2 w-full">
        <h1 className="pt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter leading-tight whitespace-nowrap">
          Accept Payment <br />
          with the most <br />
          complete <br />
          choice of methods <br />
        </h1>
        <p className="pt-8 sm:text-lg max-w-md font-normal text-gray-600 leading-relaxed">
          Niagapay provides a wide range of payment channels to boost your sales
          and ensure a smooth transaction experience for your business
          customers.
        </p>
      </div>
      <div className="relative md:w-1/2 w-full flex flex-col justify-between">
        <Image
          className="  drop-shadow-2xl self-center lg:self-end"
          src={pg}
          alt=""
          width={360}
          height={360}
        />
        <div className="absolute right-0 lg:-right-6 top-0 lg:top-28 flex flex-col py-5 px-7 rounded-2xl shadow-xl bg-white/80 backdrop-blur-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
          <div className="flex -space-x-3">
            {avatarImages.map((i, idx) => (
              <div
                key={idx}
                className="w-13 h-13 rounded-full border-4 border-white object-cover overflow-hidden"
              >
                <Image src={i} alt="" width={52} height={52} />
              </div>
            ))}
          </div>
          <div className="pt-3 font-bold">Happy customers</div>
          <div className="flex items-center text-gray-600 leading-relaxed">
            <Image
              alt=""
              width={5}
              height={5}
              src={Star}
              className="w-5 h-5 text-yellow-500"
            />
            <span className="pl-1">4.9 (+2.5k Ratings)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
