import React, { useState } from 'react';

function Suits() {
  const [openSection, setOpenSection] = useState('');

  const toggleSection = (sectionId: any) => {
    setOpenSection(openSection === sectionId ? '' : sectionId);
  };

  return (
    <section
      id="FAQ"
      className=" py-12 px-6 mx-auto max-w-screen-xl sm:px-8 md:px-12 lg:px-16 xl:px-24"
    >
      <div className="flex items-center justify-center">
        <h2 className="max-w-2lg text-4xl mb-10 font-bold tracking-tight text-center text-black sm:text-5xl md:text-6xl leading-tighter font-rubik">
          Frequently asked questions
        </h2>
      </div>

      <div id="accordion-open" data-accordion="open">
        <h2 id="accordion-open-heading-1">
          <button
            type="button"
            className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={() => toggleSection('accordion-open-body-1')}
            aria-expanded={openSection === 'accordion-open-body-1'}
            aria-controls="accordion-open-body-1"
          >
            <span className="flex items-center text-xl font-bold text-black font-rubik">
              <svg
                className="w-5 h-5 mr-2 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                  clipRule="evenodd"
                />
              </svg>{' '}
              Who can use Niagapay?
            </span>
            <svg
              data-accordion-icon=""
              className={`w-3 h-3 rotate-${
                openSection === 'accordion-open-body-1' ? '0' : '180'
              } shrink-0`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-open-body-1"
          className={`p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900 ${
            openSection === 'accordion-open-body-1' ? '' : 'hidden'
          }`}
          aria-labelledby="accordion-open-heading-1"
        >
          <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
            <p className="pt-4 pr-8 text-sm leading-relaxed text-gray-700 md:pr-16">
              Every individual (business, merchant or website), CV, PT,
              Cooperative who wants to start receiving payments or sending funds
              digitally can use Niagapay.
            </p>
          </div>
        </div>
        <h2 id="accordion-open-heading-2">
          <button
            type="button"
            className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={() => toggleSection('accordion-open-body-2')}
            aria-expanded={openSection === 'accordion-open-body-2'}
            aria-controls="accordion-open-body-2"
          >
            <span className="flex items-center text-xl font-bold text-black font-rubik">
              <svg
                className="w-5 h-5 mr-2 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                  clipRule="evenodd"
                />
              </svg>{' '}
              How to register Niagapay?
            </span>
            <svg
              data-accordion-icon=""
              className={`w-3 h-3 rotate-${
                openSection === 'accordion-open-body-2' ? '0' : '180'
              } shrink-0`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-open-body-2"
          className={`p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900 ${
            openSection === 'accordion-open-body-2' ? '' : 'hidden'
          }`}
          aria-labelledby="accordion-open-heading-2"
        >
          <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
            <ul className=" pr-8 text-sm leading-relaxed text-gray-700 md:pr-16">
              <li>For Individual and Corporate businesses:</li>
              <li>Call our CS</li>
              <li>
                Register using your "Name", "Business Name", "Phone Number" &
                "Email".
              </li>
              <li>Perform simulated transactions in Sandbox mode.</li>
            </ul>
          </div>
        </div>
        <h2 id="accordion-open-heading-3">
          <button
            type="button"
            className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={() => toggleSection('accordion-open-body-3')}
            aria-expanded={openSection === 'accordion-open-body-3'}
            aria-controls="accordion-open-body-3"
          >
            <span className="flex items-center text-xl font-bold text-black font-rubik">
              <svg
                className="w-5 h-5 mr-2 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                  clipRule="evenodd"
                />
              </svg>{' '}
              What is the settlement time for all payment methods?
            </span>
            <svg
              data-accordion-icon=""
              className={`w-3 h-3 rotate-${
                openSection === 'accordion-open-body-3' ? '0' : '180'
              } shrink-0`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-open-body-3"
          className={`p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900 ${
            openSection === 'accordion-open-body-3' ? '' : 'hidden'
          }`}
          aria-labelledby="accordion-open-heading-3"
        >
          <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
            <p className="pt-4 pr-8 text-sm leading-relaxed text-gray-700 md:pr-16">
              Settlement times for each payment method are as follows:
              <br />
              - Virtual Account: Realtime
              <br />
              - Electronic Wallet: Open Denom + Realtime
              <br />- Retail Outlets: D+3
            </p>
            <p className="pt-4 pr-8 text-sm leading-relaxed text-gray-700 md:pr-16">
              Settlement will be carried out automatically based on the Niagapay
              SLA with businesses. Funds will be sent to the bank account agreed
              upon during the Niagapay registration process.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Suits;
