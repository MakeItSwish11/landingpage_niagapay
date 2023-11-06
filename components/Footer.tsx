import Link from 'next/link';
import React from 'react';

function Footer() {
  return (
    <>
      {/* Footer container */}
      <footer className="  container mx-auto text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left">
        {/* Main container div: holds the entire content of the footer, including four sections (Tailwind Elements, Products, Useful links, and Contact), with responsive styling and appropriate padding/margins. */}
        <div className="mx-6 py-10 text-center md:text-left">
          <div className="grid-1 grid gap-8 md:grid-cols-2 lg:flex-1 lg:justify-between">
            {/* Tailwind Elements section */}
            <div className="">
              <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-3 h-4 w-4"
                >
                  <path d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z" />
                </svg>
                NIAGAPAY CORP
              </h6>
              <p>
                Jl. Samanhudi No.43-45, RT.1/RW.7, Ps. Baru, Kecamatan Sawah
                Besar, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10710
              </p>
            </div>
            {/* Products section */}
            <div className="flex justify-around items-center">
              <div className="grid grid-cols-1">
                <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                  Products
                </h6>
                <p className="mb-4">
                  <a className="text-neutral-600 dark:text-neutral-200">
                    Payment
                  </a>
                </p>
                <p className="mb-4">
                  <a className="text-neutral-600 dark:text-neutral-200">
                    Topup
                  </a>
                </p>
                <p className="mb-4">
                  <a className="text-neutral-600 dark:text-neutral-200">
                    Disbursement
                  </a>
                </p>
              </div>

              <div>
                <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                  Useful links
                </h6>
                <p className="mb-4">
                  <a
                    href="#!"
                    className="text-neutral-600 dark:text-neutral-200"
                  >
                    Pricing
                  </a>
                </p>
                <p className="mb-4">
                  <a
                    href="#!"
                    className="text-neutral-600 dark:text-neutral-200"
                  >
                    Settings
                  </a>
                </p>
                <p className="mb-4">
                  <a
                    href="#!"
                    className="text-neutral-600 dark:text-neutral-200"
                  >
                    Orders
                  </a>
                </p>
                <p>
                  <a
                    href="#!"
                    className="text-neutral-600 dark:text-neutral-200"
                  >
                    Help
                  </a>
                </p>
              </div>
            </div>
            {/* Useful links section */}
          </div>
        </div>
        {/*Copyright section*/}
        <div className=" p-6 text-center ">
          <span>© 2023 Copyright:</span>
          <a className="font-semibold text-neutral-600 ">NIAGAPAY CORP</a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
