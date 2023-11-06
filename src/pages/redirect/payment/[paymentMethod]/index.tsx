import { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useSearchParams } from 'next/navigation';
import Loader, { Hourglass } from 'react-loader-spinner';
import { BASE_API_V1 } from '../../../../../constant/api';
import { setBrowserIdCookie } from '@/utils/cookiesHelpers';

enum TransactionType {
  All = 'all',
  Settled = 'settled',
  Paid = 'paid',
  Processing = 'processing',
  Pending = 'pending',
  Failed = 'failed',
  Expired = 'expired',
  Assist = 'assist',
}

const PaymentPage: FC = () => {
  const router = useRouter();
  const queryParam = useSearchParams();
  console.log(queryParam.get('paymentMethod'));
  //   console.log(router.query);
  const [isLoading, setIsLoading] = useState(false);

  const fetchBrowserId = async () => {
    try {
      const browserIdResponse = await fetch(`${BASE_API_V1}p/browser`);

      if (!browserIdResponse.ok) {
        throw new Error('Failed to fetch browser ID');
      }

      const { data: browserId } = await browserIdResponse.json();
      setBrowserIdCookie(browserId);
      return browserId;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  const addDetail = async () => {
    setIsLoading(true);
    try {
      const paymentMethod = queryParam.get('paymentMethod');
      const customerName = queryParam.get('customer_name');
      const partnerReff = queryParam.get('partner_reff');
      const amount = queryParam.get('amount');

      // Get the 'status' and 'message' parameters from query parameters
      const statusValue = queryParam.get('status');
      const messageValue = queryParam.get('message');

      // Map 'messageValue' to the corresponding enum value, or set a default if it's not valid
      const transactionTypeEnumValue =
        TransactionType[messageValue as keyof typeof TransactionType] ||
        TransactionType.All;

      // Construct the 'status' field by concatenating 'statusValue' and the mapped enum value
      const status = `${statusValue} ${transactionTypeEnumValue}`;

      const postData = {
        method: paymentMethod,
        customerName: customerName,
        partnerReff: partnerReff,
        amount: amount ? parseInt(amount.replace(/\D/g, ''), 10) : 0, // Use 0 or another default value when amount is null
        status: status,
      };

      // Fetch the browserId
      const browserId = await fetchBrowserId();

      const response = await fetch(`${BASE_API_V1}p/redirect/payment`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-browser-id': browserId,
        },
        body: JSON.stringify(postData),
      });

      setIsLoading(false);

      if (!response.ok) {
        // Handle the response if it's not OK, e.g., redirect to an error page
        console.log(response);
      } else {
        const data = await response.json();

        if (data.data) {
          // Redirect to the URL provided in the response data
          window.location.replace(data.data);
        } else {
          // Handle the case when there's no 'data' property in the response
          console.log('No data in the response');
        }
      }
    } catch (error) {
      setIsLoading(false);
      console.error(error);
      // Handle the error, e.g., redirect to an error page
      // router.push('/notfound');
    }
  };

  useEffect(() => {
    addDetail();
  }, []);

  return (
    <div className="w-full min-h-screen flex items-center justify-center font-sans text-white bg-gradient-to-br from-transparent to-green-100">
      <div className="text-center">
        <Hourglass
          visible={true}
          height="80"
          width="80"
          ariaLabel="hourglass-loading"
          wrapperStyle={{}}
          wrapperClass=""
          colors={['#9FE2BF', '#dcfce7 ']}
        />
        <h1 className="text-green-400">Loading...</h1>
      </div>
    </div>
  );
};

export default PaymentPage;
