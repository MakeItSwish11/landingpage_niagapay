import { FC, useEffect } from 'react';
import useMethods from '../hooks/useMethods';
import { BASE_URL } from '../constant/api';
import Image from 'next/image';

interface PricingProps {}

export interface Method {
  _id: string;
  name: string;
  type: string;
  code: string;
  path: string;
  img: string;
  isActive: boolean;
  min: number;
  max: number;
}

interface MethodsByType {
  [key: string]: Method[];
}

export const formatter = new Intl.NumberFormat('id-ID', {
  style: 'currency',
  currency: 'IDR',
  minimumFractionDigits: 0,
});

const Pricing: FC<PricingProps> = ({}) => {
  const { fetchMethods, methodType, isLoading } = useMethods();

  useEffect(() => {
    fetchMethods();
  }, []);

  const renderMethodsByType = () => {
    return Object.entries(methodType).map(([type, methods]) => {
      return (
        <div className="pt-24" key={type}>
          <h1 className="text-xl text-center lg:text-left font-bold text-black uppercase">
            {type === 'va'
              ? 'Virtual Account'
              : type === 'retail'
              ? 'Convenience Store'
              : type === 'paymentewallet'
              ? 'E-Wallet'
              : 'QRIS'}
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center">
            {methods.map((method) => (
              <div
                className="flex flex-row justify-between bg-white shadow-md rounded-md mt-2  p-4 items-center"
                key={method._id}
              >
                <Image
                  src={`${BASE_URL + method.img}`}
                  alt={method.name}
                  width={80}
                  height={80}
                />
                <div className="flex flex-col">
                  <h3 className="text-xl font-bold text-black  font-rubik">
                    Fee
                  </h3>
                  <p className="pt-4 pr-8 text-base font-bold  text-green md:pr-16">
                    {method.fee.type === 'fixed'
                      ? formatter.format(method.fee.fixed)
                      : `${method.fee.percentage}%`}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    });
  };

  return (
    <section
      id="Pricing"
      className="py-12 px-6 mx-auto max-w-screen-xl sm:px-8 md:px-12 lg:px-16 xl:px-24"
    >
      <div className="flex items-center justify-center">
        <h2 className="max-w-lg text-4xl font-bold tracking-tight text-center text-black sm:text-5xl md:text-6xl leading-tighter font-rubik">
          Pricing
        </h2>
      </div>
      {isLoading ? <p>Loading...</p> : renderMethodsByType()}
    </section>
  );
};

export default Pricing;
