import {
  getBrowserIdCookie,
  getSession,
  getToken,
  setBrowserIdCookie,
} from '@/utils/cookiesHelpers';
import { useState } from 'react';
import { BASE_API_V1 } from '../constant/api';

export interface Method {
  _id: string;
  methodName: string;
  methodType: string;
  code: string;
  path: string;
  methodImg: string;
  isActive: boolean;
  fee: {
    fixed: number;
    percentage: number;
    type: string;
  };
  min: number;
  max: number;
  lp: string;
}

interface MethodsByType {
  [key: string]: Method[];
}

const useMethods = (isAdmin: boolean = false) => {
  const [methods, setMethods] = useState<Method[]>([]);
  const [methodType, setMethodType] = useState<MethodsByType>({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchMethods = async () => {
    try {
      const browserId = getBrowserIdCookie();
      if (!browserId) {
        const browserIdResponse = await fetch(`${BASE_API_V1}p/browser`);

        if (!browserIdResponse.ok) {
          throw new Error('Failed to fetch browser ID');
        }

        const { data: browserId } = await browserIdResponse.json();
        setBrowserIdCookie(browserId);
        fetchMethods();
      } else {
        var methodResponse;

        if (isAdmin) {
          const token = getToken();
          const session = getSession();
          methodResponse = await fetch(`${BASE_API_V1}admin/method`, {
            method: 'GET',
            headers: {
              Authorization: token!,
              'x-browser-id': browserId,
              session: session!,
            },
          });
        } else {
          methodResponse = await fetch(`${BASE_API_V1}p/lp/method`, {
            headers: {
              'x-browser-id': browserId,
            },
          });
        }

        const responseObject = await methodResponse.json();

        if (
          !methodResponse.ok ||
          responseObject.status !== 200 ||
          !responseObject.success
        ) {
          throw new Error('Failed to fetch methods');
        }

        if (
          responseObject &&
          responseObject.data &&
          Array.isArray(responseObject.data)
        ) {
          const methodsArray = responseObject.data as Method[];
          setMethods(methodsArray);
          const groupedMethods = methodsArray.reduce<MethodsByType>(
            (acc, item) => {
              if (!acc[item.methodType]) {
                acc[item.methodType] = [];
              }
              acc[item.methodType].push(item);
              return acc;
            },
            {}
          );
          setMethodType(groupedMethods);
        } else {
          console.error('Unexpected data format:', responseObject);
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { fetchMethods, methods, methodType, isLoading };
};

export default useMethods;
