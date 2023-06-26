import { Mail } from 'lucide-react';
import { FC } from 'react';

interface ContactProps {}

const Contact: FC<ContactProps> = ({}) => {
  return (
    <section
      id="Contact"
      className="py-12 px-6 mx-auto max-w-screen-xl sm:px-8 md:px-12 lg:px-16 xl:px-24"
    >
      <div className="flex items-center justify-center">
        <h2 className="max-w-lg text-4xl font-bold tracking-tight text-center text-black sm:text-5xl md:text-6xl leading-tighter font-rubik">
          Contact Us
        </h2>
      </div>

      <div className="flex flex-col items-center justify-center pt-12 sm:items-start sm:flex-row md:pt-18">
        <div className="bg-white flex flex-col items-center w-full max-w-sm pt-8 text-center sm:text-left sm:block sm:pt-0 md:w-1/3">
          <div className="flex flex-row p-4 space-x-2">
            <Mail className="w-16 h-16" />
            <div className="">
              <h2 className=" text-xl font-bold text-black  font-rubik">
                Email
              </h2>
              <p className=" text-xl font-semibold leading-relaxed text-gray-700 ">
                niagavoucher@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
