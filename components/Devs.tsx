import { FC } from 'react';

interface DevsProps {}

const Devs: FC<DevsProps> = ({}) => {
  return (
    <section className="py-12 px-6 mx-auto max-w-screen-xl sm:px-8 md:px-12 lg:px-16 xl:px-24">
      <div className="flex items-center justify-center">
        <h2 className="max-w-lg text-4xl font-bold tracking-tight text-center text-black sm:text-5xl md:text-6xl leading-tighter font-rubik">
          Built for devs
        </h2>
      </div>
      <div className="flex flex-col pt-24 md:flex-row md:justify-between">
        <div className="flex flex-col w-full md:w-1/2">
          <p className="relative max-w-sm pt-10 text-base leading-relaxed text-gray-600 border-b border-gray-900 sm:text-lg pb-14 before:absolute before:bottom-0 before:-mb-px before:w-16 before:border-b-2 before:border-gray-100">
            Build integrations quickly via API. Using Niagapay simplifies your
            store's payment system, so you can focus more on a better customer
            experience.
          </p>
        </div>
        <div className="w-full pt-10 md:w-1/2 md:pt-0 bg-primary">
          <div className="flex flex-col">
            <div className="flex items-end w-full h-10 bg-editor-700 rounded-t-md">
              <div className="flex items-center space-x-1.5 h-full pl-4">
                <button className="w-2 h-2 bg-red-500 rounded-full"></button>
                <button className="w-2 h-2 bg-yellow-400 rounded-full"></button>
                <button className="w-2 h-2 rounded-full bg-green"></button>
              </div>
              <div className="pl-6">
                <div className="h-8 px-4 py-2 text-xs text-white bg-editor-800 w-28 rounded-t-md">
                  Transaction
                </div>
              </div>
            </div>
            <div className="relative flex w-full overflow-x-scroll bg-editor-800 rounded-b-md">
              <code className="sticky top-0 bottom-0 left-0 flex flex-col w-10 px-3 py-2 text-xs leading-loose text-right text-gray-600 select-none bg-editor-900">
                1 2 3 4 5 6 7 8 9 10 11 12 13
              </code>
              <pre className="pt-2 pl-2">
                <code className="text-xs leading-tight text-white">
                  <span className="text-orange-600">curl --X GET \</span>
                  {'\n'}
                  <span className="text-orange-600">
                    https://apidev.niagapay.click/v1/open/utility/method \
                  </span>
                  {'\n'}
                  <span className="text-orange-600">
                    --H 'accept: application/json'
                  </span>
                  {'\n'}
                  <span className="text-orange-600">
                    --H 'authorization: Basic[Your_Server_Key]'
                  </span>
                  {'\n'}
                  <span className="text-orange-600">-d </span>
                  {'{'}
                  {'\n'}
                  &nbsp;&nbsp;{'"amount": 10000,'}
                  {'\n'}
                  &nbsp;&nbsp;{'"fee": 5000,'}
                  {'\n'}
                  &nbsp;&nbsp;{'"exp": "2023-06-09T08:01:55.272Z",'}
                  {'\n'}
                  &nbsp;&nbsp;{'"status": "settled",'}
                  {'\n'}
                  {'}'}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center pt-12 sm:items-start sm:flex-row md:pt-18">
        <div className="flex flex-col items-center w-full max-w-sm pt-8 text-center sm:text-left sm:block sm:pt-0 md:w-1/3">
          <img src="assets/api.svg" alt="" />
          <h3 className="pt-3 text-xl font-bold text-black sm:pt-6 font-rubik">
            Modern, clean APIs
          </h3>
          <p className="pt-4 pr-8 text-sm leading-relaxed text-gray-700 md:pr-16">
            Discover the convenience of our modern and streamlined APIs. Our
            APIs are built to be user-friendly and efficient, ensuring a smooth
            integration process for developers.
          </p>
        </div>
        <div className="flex flex-col items-center w-full max-w-sm pt-8 text-center sm:text-left sm:block sm:pt-0 md:w-1/3">
          <img src="assets/cloud.svg" alt="" />
          <h3 className="pt-3 text-xl font-bold text-black sm:pt-6 font-rubik">
            Secure Payment Gateway
          </h3>
          <p className="pt-4 pr-8 text-sm leading-relaxed text-gray-700 md:pr-16">
            Enable seamless and secure online transactions with our
            state-of-the-art payment gateway. Protect customer data and ensure
            smooth payment processing for your users.
          </p>
        </div>
        <div className="flex flex-col items-center w-full max-w-sm pt-8 text-center sm:text-left sm:block sm:pt-0 md:w-1/3">
          <img src="assets/database.svg" alt="" />
          <h3 className="pt-3 text-xl font-bold text-black sm:pt-6 font-rubik">
            Sandbox environment
          </h3>
          <p className="pt-4 pr-8 text-sm leading-relaxed text-gray-700 md:pr-16">
            Experience the power of our sandbox environment. With our dedicated
            sandbox, you can safely experiment, test, and fine-tune your
            applications without affecting your live production environment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Devs;
