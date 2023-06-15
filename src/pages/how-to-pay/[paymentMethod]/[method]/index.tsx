/* eslint-disable react/no-unescaped-entities */
import Layout from '@/layout/Layout';
import { ArrowLeft } from 'lucide-react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';

interface MethodsProps {}

const MethodsPage: FC<MethodsProps> = ({}) => {
  const router = useRouter();
  const { paymentMethod, method } = router.query;

  const formatPaymentMethod = (paymentMethod: string) => {
    const formattedString = paymentMethod
      .replace(/-/g, ' ')
      .replace(/\b\w/g, (match) => match.toUpperCase());
    return formattedString;
  };

  const formattedPaymentMethod =
    typeof paymentMethod === 'string' ? formatPaymentMethod(paymentMethod) : '';
  return (
    <>
      <Head>
        <title>{`How To Pay ${formattedPaymentMethod} ${method} | NiagaPay`}</title>
        <meta name="description" content="Solution for payments" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://niagapay.click/images/favicon.ico" />
      </Head>
      <header className="px-8 py-4 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-black">
            NiagaPay
          </Link>

          <div className="flex flex-row items-center space-x-3">
            <button className="p-4 bg-black text-white rounded-md">
              Contact Us
            </button>
            <Link href="login" className="p-4 bg-black text-white rounded-md">
              Login
            </Link>
          </div>
        </div>
      </header>
      <Layout>
        <button
          className="mt-4 h-10 py-2 px-4 active:scale-95 inline-flex items-center justify-center rounded-md text-sm font-medium transition-color focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:opacity-50 dark:focus:ring-slate-400 disabled:pointer-events-none dark:focus:ring-offset-slate-900 bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-200 dark:text-slate-900 dark:hover:bg-slate-100"
          onClick={() => router.push(`/how-to-pay/${paymentMethod}`)}
        >
          <ArrowLeft className="w-6 h-6 text-white" /> Back to{' '}
          {formattedPaymentMethod}
        </button>
        <div className="flex flex-col items-center justify-center py-4">
          {method === 'BCA' ? (
            <>
              <Image
                className="mx-auto p-4"
                src="https://niagapay.click/images/method/014-6419973dbedd18275e822258.webp"
                width={100}
                height={100}
                alt=""
              />
              <h1>Guide to BCA Virtual Account Payment</h1>
            </>
          ) : method === 'BRI' ? (
            <>
              <Image
                className="mx-auto p-4"
                src="https://niagapay.click/images/method/002-6419973dbedd18275e82225a.webp"
                width={100}
                height={100}
                alt=""
              />
              <h1>Guide to BRI Virtual Account Payment</h1>
            </>
          ) : method === 'CIMB' ? (
            <>
              <Image
                className="mx-auto p-4"
                src="https://niagapay.click/images/method/022-6419973dbedd18275e82225c.webp"
                width={100}
                height={100}
                alt=""
              />
              <h1>Guide to CIMB Virtual Account Payment</h1>
            </>
          ) : method === 'BNI' ? (
            <>
              <Image
                className="mx-auto p-4"
                src="https://niagapay.click/images/method/009-6419973dbedd18275e82225e.webp"
                width={100}
                height={100}
                alt=""
              />
              <h1>Guide to BNI Virtual Account Payment</h1>
            </>
          ) : method === 'Mandiri' ? (
            <>
              <Image
                className="mx-auto p-4"
                src="https://niagapay.click/images/method/008-6419973dbedd18275e822260.webp"
                width={100}
                height={100}
                alt=""
              />
              <h1>Guide to Mandiri Virtual Account Payment</h1>
            </>
          ) : method === 'Permata' ? (
            <>
              <Image
                className="mx-auto p-4"
                src="https://niagapay.click/images/method/013-6419973dbedd18275e822266.webp"
                width={100}
                height={100}
                alt=""
              />
              <h1>Guide to Permata Virtual Account Payment</h1>
            </>
          ) : method === 'Danamon' ? (
            <>
              <Image
                className="mx-auto p-4"
                src="https://niagapay.click/images/method/011-6419973dbedd18275e822268.webp"
                width={100}
                height={100}
                alt=""
              />
              <h1>Guide to Danamon Virtual Account Payment</h1>
            </>
          ) : method === 'BSI' ? (
            <>
              <Image
                className="mx-auto p-4"
                src="https://niagapay.click/images/method/451-6481cdb20e36bf4d1b839a4f.webp"
                width={100}
                height={100}
                alt=""
              />
              <h1>Guide to BSI Virtual Account Payment</h1>
            </>
          ) : method === 'BNC' ? (
            <>
              <Image
                className="mx-auto p-4"
                src="https://niagapay.click/images/490-6481d1020e36bf4d1b839c87.webp"
                width={100}
                height={100}
                alt=""
              />
              <h1>Guide to BNC Virtual Account Payment</h1>
            </>
          ) : method === 'OVO' ? (
            <>
              <Image
                className="mx-auto p-4"
                src="https://niagapay.click/images/method/payovo-6419973dbedd18275e822270.webp"
                width={100}
                height={100}
                alt=""
              />
              <h1>Guide to {method} E-Wallet Payment</h1>
            </>
          ) : method === 'DANA' ? (
            <>
              <Image
                className="mx-auto p-4"
                src="https://niagapay.click/images/method/paydana-6419973dbedd18275e822272.webp"
                width={100}
                height={100}
                alt=""
              />
              <h1>Guide to {method} E-Wallet Payment</h1>
            </>
          ) : method === 'LinkAja' ? (
            <>
              <Image
                className="mx-auto p-4"
                src="https://niagapay.click/images/method/paylinkaja-6419973dbedd18275e822274.webp"
                width={100}
                height={100}
                alt=""
              />
              <h1>Guide to {method} E-Wallet Payment</h1>
            </>
          ) : method === 'ShopeePay' ? (
            <>
              <Image
                className="mx-auto p-4"
                src="https://niagapay.click/images/method/payshopeepay-6419973dbedd18275e822278.webp"
                width={100}
                height={100}
                alt=""
              />
              <h1>Guide to {method} E-Wallet Payment</h1>
            </>
          ) : method === 'Indomaret' ? (
            <>
              <Image
                className="mx-auto p-4"
                src="https://niagapay.click/images/method/indomaret-6419973dbedd18275e82226c.webp"
                width={100}
                height={100}
                alt=""
              />
              <h1>Guide to {method} Payment Method & Cash Withdrawal</h1>
            </>
          ) : method === 'Alfamaret' ? (
            <>
              <Image
                className="mx-auto p-4"
                src="https://niagapay.click/images/method/alfamart-6419973dbedd18275e82226a.webp"
                width={100}
                height={100}
                alt=""
              />
              <h1>Guide to {method} Payment Method </h1>
            </>
          ) : (
            ''
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {method === 'BCA' ? (
            <>
              <div className="p-4 bg-white mx-2 border rounded-md">
                <h1 className="text-xl font-bold">Payment method via ATM:</h1>
                <ol className="list-decimal px-8 ">
                  <li>
                    Enter your <strong>ATM</strong> Card and{' '}
                    <strong>PIN</strong>
                  </li>
                  <li>
                    Select <strong>Menu other transactions</strong>
                  </li>
                  <li>
                    Select <strong>Transfer</strong>
                  </li>
                  <li>
                    Input the <strong>Virtual Account Number</strong>, for
                    example <strong>12345678xxxx</strong>
                  </li>
                  <li>
                    Select <strong>TRUE</strong>
                  </li>
                  <li>
                    Select <strong>YES</strong>
                  </li>
                  <li>
                    Take your <strong>proof of payment</strong>
                  </li>
                  <li>Finish</li>
                </ol>
              </div>
              <div className="p-4 bg-white mx-2 border rounded-md">
                <h1 className="text-xl font-bold">
                  Payment method via Mobile Banking:
                </h1>
                <ol className="list-decimal px-8 ">
                  <li>
                    Login to your <strong>{method} Mobile Banking</strong>
                  </li>
                  <li>
                    Select <strong>m-Transfer</strong>
                  </li>
                  <li>
                    Select <strong>{method} Virtual Account</strong>
                  </li>
                  <li>
                    Input the <strong>Virtual Account Number</strong>, for
                    example <strong>12345678xxxx</strong>
                  </li>
                  <li>
                    Select <strong>SEND</strong>
                  </li>
                  <li>
                    <strong>Virtual Account information</strong> will be
                    displayed
                  </li>
                  <li>
                    Select <strong>OK</strong>
                  </li>
                  <li>
                    Input your <strong>PIN</strong>
                  </li>
                  <li>
                    <strong>Proof Of Payment</strong> will Displayed
                  </li>
                  <li>Finish</li>
                </ol>
              </div>
              <div className="p-4 bg-white mx-2 border rounded-md">
                <h1 className="text-xl font-bold">
                  Payment method via Internet Banking:
                </h1>
                <ol className="list-decimal px-8 ">
                  <li>
                    Login to <strong>{method} Internet Banking</strong>
                  </li>
                  <li>
                    Select a <strong>Fund transactions</strong>
                  </li>
                  <li>
                    Select Transfer to <strong>{method} Virtual Account</strong>
                  </li>
                  <li>
                    Input the <strong>Virtual Account Number</strong>, for
                    example <strong>12345678xxxx</strong>
                  </li>
                  <li>
                    Select <strong>Continue</strong>
                  </li>
                  <li>
                    Input <strong>Respon KeyBCA Appli 1</strong>
                  </li>
                  <li>
                    Select <strong>Send</strong>
                  </li>
                  <li>
                    <strong>Proof Of Payment</strong> will Displayed
                  </li>
                  <li>Finish</li>
                </ol>
              </div>
            </>
          ) : method === 'Mandiri' ? (
            <>
              <div className="p-4 bg-white mx-2 border rounded-md">
                <h1 className="text-xl font-bold">Payment method via ATM:</h1>
                <ol className="list-decimal px-8 ">
                  <li>
                    Enter your <strong>ATM</strong> Card and{' '}
                    <strong>PIN</strong>
                  </li>
                  <li>
                    Select <strong>Buy/Pay</strong>
                  </li>
                  <li>
                    Select <strong>More</strong>
                  </li>
                  <li>
                    Select <strong>Multi Payment</strong>
                  </li>
                  <li>
                    Input the <strong>Virtual Account Number</strong>, for
                    example <strong>70017XXXXXXXXXXXX</strong>
                  </li>
                  <li>
                    Select <strong>TRUE</strong>
                  </li>
                  <li>
                    Select <strong>YES</strong>
                  </li>
                  <li>
                    Take your <strong>proof of payment</strong>
                  </li>
                  <li>Finish</li>
                </ol>
              </div>
              <div className="p-4 bg-white mx-2 border rounded-md">
                <h1 className="text-xl font-bold">
                  Payment method via Mobile Banking:
                </h1>
                <ol className="list-decimal px-8 ">
                  <li>
                    Login to your <strong>{method} Mobile Banking</strong>
                  </li>
                  <li>
                    Select <strong>Pay</strong>
                  </li>
                  <li>
                    Input <strong>i-Pay</strong> as a{' '}
                    <strong>Service Provider</strong>
                  </li>
                  <li>
                    Input the <strong>Virtual Account Number</strong>, for
                    example <strong>12345678xxxx</strong>
                  </li>
                  <li>
                    Select <strong>Continue</strong>
                  </li>
                  <li>
                    Input your {method} Mobile Banking{' '}
                    <strong>OTP and PIN</strong>
                  </li>
                  <li>
                    Select <strong>OK</strong>
                  </li>
                  <li>
                    <strong>Proof Of Payment</strong> will Displayed
                  </li>
                  <li>Finish</li>
                </ol>
              </div>
              <div className="p-4 bg-white mx-2 border rounded-md">
                <h1 className="text-md font-bold">
                  Payment method via Internet Banking:
                </h1>
                <ol className="list-decimal px-8 ">
                  <li>
                    Login to <strong>{method} Internet Banking</strong>
                  </li>
                  <li>
                    Select a <strong>Pay</strong>
                  </li>
                  <li>
                    Select a <strong>Multi Payment</strong>
                  </li>
                  <li>
                    Input <strong>i-Pay</strong> as a{' '}
                    <strong>Service Provider</strong>
                  </li>
                  <li>
                    Input the <strong>Virtual Account Number</strong>, for
                    example <strong>12345678xxxx</strong>
                  </li>
                  <li>
                    Select <strong>Continue</strong>
                  </li>
                  <li>
                    Input your {method} Mobile Banking{' '}
                    <strong>OTP and PIN</strong>
                  </li>
                  <li>
                    Select <strong>OK</strong>
                  </li>
                  <li>
                    <strong>Proof Of Payment</strong> will Displayed
                  </li>
                  <li>Finish</li>
                </ol>
              </div>
              <div className="p-4 bg-white mx-2 border rounded-md">
                <h1 className="text-md font-bold">
                  Payment Methods through non-Bank {method} Channel:
                </h1>
                <ol className="list-decimal px-8">
                  <li>Input your ATM card and PIN</li>
                  <li>
                    Select <strong>Pay/Buy</strong>
                  </li>
                  <li>
                    Choose <strong>Others</strong>
                  </li>
                  <li>
                    Select <strong>Bank Transfer</strong>
                  </li>
                  <li>
                    Choose <strong>Bank Mandiri (008)</strong>
                  </li>
                  <li>
                    Enter <strong>88017</strong>, followed by the virtual
                    account number, for example <strong>881714501000009</strong>
                  </li>
                  <li>Enter the payment amount</li>
                  <li>Proceed with the payment</li>
                </ol>
              </div>
            </>
          ) : method === 'BNI' ? (
            <>
              <div className="p-4 bg-white mx-2 border rounded-md">
                <h1 className="text-xl font-bold">Payment method via ATM:</h1>
                <ol className="list-decimal px-8 ">
                  <li>
                    Enter your <strong>ATM</strong> Card and{' '}
                  </li>
                  <li>
                    Select <strong>Language</strong>
                  </li>
                  <li>
                    Enter your ATM <strong>PIN</strong>{' '}
                  </li>
                  <li>
                    Select <strong>Other Menus</strong>
                  </li>
                  <li>
                    Select <strong>Transfer</strong>
                  </li>
                  <li>
                    Select the <strong>Type of Account</strong> that you will
                    use (Example: From a <strong>Savings Account</strong>)
                  </li>
                  <li>
                    Select <strong>Virtual Account Billing</strong>
                  </li>
                  <li>
                    Enter your <strong>Virtual Account Number</strong>, for
                    example: <strong>123456789012XXXX</strong>
                  </li>
                  <li>
                    Bills to be paid will appear on the confirmation screen
                  </li>
                  <li>
                    Confirm, if it is appropriate, continue the transaction
                  </li>
                  <li>Your transaction has been completed</li>
                </ol>
              </div>
              <div className="p-4 bg-white mx-2 border rounded-md">
                <h1 className="text-xl font-bold">
                  Payment method via Mobile Banking:
                </h1>
                <ol className="list-decimal px-8 ">
                  <li>
                    Access BNI Mobile Banking from your mobile then enter your{' '}
                    <strong>User ID and Password</strong>
                  </li>
                  <li>
                    Select <strong>Transfer</strong> Menu
                  </li>
                  <li>
                    Select the <strong>Virtual Account Billing</strong> menu
                    then select a debit account
                  </li>
                  <li>
                    Input the <strong>Virtual Account Number</strong>, for
                    example <strong>12345678xxxx</strong>
                  </li>
                  <li>
                    Bills to be paid will appear on the confirmation screen
                  </li>
                  <li>
                    Confirm, if it is appropriate, continue the transaction
                  </li>
                  <li>Your payment has been completed</li>
                </ol>
              </div>
              <div className="p-4 bg-white mx-2 border rounded-md">
                <h1 className="text-md font-bold">
                  Payment method via Internet Banking:
                </h1>
                <ol className="list-decimal px-8 ">
                  <li>
                    Go to <strong>https://ibank.bni.co.id</strong>{' '}
                  </li>
                  <li>
                    Input your <strong>User ID and Password</strong>
                  </li>
                  <li>
                    Select a <strong>Transfer</strong> Menu
                  </li>
                  <li>
                    Select <strong>Virtual Account Billing</strong>
                  </li>
                  <li>
                    Input the <strong>Virtual Account Number</strong>, for
                    example <strong>12345678xxxx</strong>
                  </li>
                  <li>
                    Bills to be paid will appear on the confirmation screen
                  </li>

                  <li>
                    Enter <strong>Token Authentication Code</strong>
                  </li>
                  <li>Your payment has been completed</li>
                </ol>
              </div>
              <div className="p-4 bg-white mx-2 border rounded-md">
                <h1 className="text-md font-bold">
                  Payment method via SMS Banking:
                </h1>
                <ol className="list-decimal px-8 ">
                  <li>
                    Open the <strong>BNI SMS Banking application</strong>
                  </li>
                  <li>
                    Select a <strong>Transfer</strong> Menu
                  </li>
                  <li>
                    Select <strong>Trf rekening BNI</strong> Menu
                  </li>
                  <li>
                    Enter the destination account number with 16 digits of the{' '}
                    <strong>Virtual Account Number</strong>, for example :
                    <strong> 12345678912XXX</strong>
                  </li>

                  <li>
                    Enter the <strong>Nominal</strong> transfer according to
                    your bill or obligation. Different nominal cannot be
                    processed
                  </li>
                  <li>
                    Input the <strong>Virtual Account Number</strong>, for
                    example <strong>12345678xxxx</strong>
                  </li>
                  <li>
                    Select <strong>Process</strong> then <strong>Agree</strong>
                  </li>

                  <li>
                    Reply sms by typing the <strong>PIN</strong> according to
                    the command
                  </li>
                  <li>Your payment has been completed</li>
                </ol>
                <h1>
                  <strong>NOTE:</strong> you can also directly type an SMS with
                  the format: <strong>TRF[SPACE]NumberVA[SPACE]NOMINAL</strong>{' '}
                  and then send it to <strong>3346</strong> Example: TRF
                  123456789012XXXX 44000
                </h1>
              </div>
            </>
          ) : method === 'BRI' ? (
            <>
              <div className="p-4 bg-white mx-2 border rounded-md">
                <h1 className="text-xl font-bold">Payment method via ATM:</h1>
                <ol className="list-decimal px-8 ">
                  <li>
                    Enter your <strong>ATM</strong> Card and{' '}
                    <strong>PIN</strong>
                  </li>
                  <li>
                    Select <strong>Other Transaction</strong>
                  </li>
                  <li>
                    Select <strong>Payment</strong> Menu
                  </li>
                  <li>
                    Select the <strong>Other Menu</strong>
                  </li>
                  <li>
                    Select <strong>BRIVA</strong> Menu
                  </li>
                  <li>
                    Input the <strong>Virtual Account Number</strong>, for
                    example <strong>70017XXXXXXXXXXXX</strong>
                  </li>
                  <li>
                    Select <strong>YES</strong>
                  </li>
                  <li>
                    Take your <strong>proof of payment</strong>
                  </li>
                  <li>Finish</li>
                </ol>
              </div>
              <div className="p-4 bg-white mx-2 border rounded-md">
                <h1 className="text-xl font-bold">
                  Payment method via Mobile Banking:
                </h1>
                <ol className="list-decimal px-8 ">
                  <li>
                    Login to your <strong>{method} Mobile Banking</strong>
                  </li>
                  <li>
                    Select <strong>Mobile Banking BRI</strong>
                  </li>
                  <li>
                    Input <strong>Payment</strong> Menu
                  </li>
                  <li>
                    Select <strong>BRIVA</strong> Menu
                  </li>
                  <li>
                    Input the <strong>Virtual Account Number</strong>, for
                    example <strong>12345678xxxx</strong>
                  </li>
                  <li>
                    Enter the <strong>nominal according to the bill</strong>,
                    for example <strong>10000</strong>
                  </li>
                  <li>
                    Select <strong>SEND</strong>
                  </li>
                  <li>
                    Input <strong>PIN</strong>
                  </li>
                  <li>
                    Select <strong>SEND</strong>
                  </li>
                  <li>
                    <strong>Proof Of Payment</strong> will sended with SMS
                  </li>
                  <li>Finish</li>
                </ol>
              </div>
              <div className="p-4 bg-white mx-2 border rounded-md">
                <h1 className="text-md font-bold">
                  Payment method via Internet Banking:
                </h1>
                <ol className="list-decimal px-8">
                  <li>
                    Login to your <strong>Internet Banking</strong>
                  </li>
                  <li>
                    Select <strong>Payment</strong>
                  </li>
                  <li>
                    Select <strong>BRIVA</strong>
                  </li>
                  <li>
                    Enter the <strong>Virtual Account Number</strong>, for
                    example <strong>887XXXXX</strong>
                  </li>
                  <li>
                    Click <strong>Submit</strong>
                  </li>
                  <li>
                    Enter your <strong>Password</strong>
                  </li>
                  <li>
                    Enter the <strong>mToken</strong>
                  </li>
                  <li>
                    Click <strong>Submit</strong>
                  </li>
                  <li>
                    The <strong>Proof of Payment</strong> will be displayed
                  </li>
                  <li>Finished</li>
                </ol>
              </div>
            </>
          ) : method === 'Permata' ? (
            <>
              <div className="p-4 bg-white mx-2 border rounded-md">
                <h1 className="text-xl font-bold">Payment method via ATM:</h1>
                <ol className="list-decimal px-8">
                  <li>
                    Input your <strong>ATM Card</strong> and{' '}
                    <strong>PIN</strong>
                  </li>
                  <li>
                    Select <strong>Other Transactions</strong>
                  </li>
                  <li>
                    Select <strong>Payment</strong>
                  </li>
                  <li>
                    Select <strong>Other Payments</strong>
                  </li>
                  <li>
                    Select <strong>Virtual Account</strong>
                  </li>
                  <li>
                    Enter the <strong>Virtual Account Number</strong>, for
                    example <strong>8625XXXXXXXXXX</strong>
                  </li>
                  <li>
                    Select <strong>Confirm</strong>
                  </li>
                  <li>
                    Select <strong>Yes</strong>
                  </li>
                  <li>
                    Retrieve your <strong>Proof of Payment</strong>
                  </li>
                  <li>Finished</li>
                </ol>
              </div>
              <div className="p-4 bg-white mx-2 border rounded-md">
                <h1 className="text-xl font-bold">
                  Payment method via Mobile Banking:
                </h1>
                <ol className="list-decimal px-8">
                  <li>
                    Login to your <strong>Mobile Banking</strong>
                  </li>
                  <li>
                    Select <strong>Bill Payment</strong>
                  </li>
                  <li>
                    Select <strong>Virtual Account</strong>
                  </li>
                  <li>
                    Enter the <strong>Virtual Account Number</strong>, for
                    example <strong>8625XXXXXXX</strong>
                  </li>
                  <li>
                    Enter the <strong>amount</strong>, for example{' '}
                    <strong>100000</strong>
                  </li>
                  <li>
                    Click <strong>Submit</strong>
                  </li>
                  <li>
                    Enter the <strong>Token</strong>
                  </li>
                  <li>
                    Click <strong>Submit</strong>
                  </li>
                  <li>
                    The <strong>Proof of Payment</strong> will be displayed
                  </li>
                  <li>Finished</li>
                </ol>
              </div>
              <div className="p-4 bg-white mx-2 border rounded-md">
                <h1 className="text-md font-bold">
                  Payment method via Internet Banking:
                </h1>
                <ol className="list-decimal px-8">
                  <li>
                    Login to your <strong>Internet Banking</strong>
                  </li>
                  <li>
                    Select <strong>Bill Payment</strong>
                  </li>
                  <li>
                    Select <strong>Virtual Account</strong>
                  </li>
                  <li>
                    Enter the <strong>Virtual Account Number</strong>, for
                    example <strong>8625XXXXX</strong>
                  </li>
                  <li>
                    Enter the <strong>amount</strong>, for example{' '}
                    <strong>50000</strong>
                  </li>
                  <li>
                    Click <strong>Submit</strong>
                  </li>
                  <li>
                    Enter the <strong>Token</strong>
                  </li>
                  <li>
                    Click <strong>Submit</strong>
                  </li>
                  <li>
                    The <strong>Proof of Payment</strong> will be displayed
                  </li>
                  <li>Finished</li>
                </ol>
              </div>
            </>
          ) : method === 'CIMB' ? (
            <>
              <div className="p-4 bg-white mx-2 border rounded-md">
                <h1 className="text-xl font-bold">Payment method via ATM:</h1>
                <ol className="list-decimal px-8">
                  <li>
                    Input your <strong>ATM Card</strong> and{' '}
                    <strong>PIN</strong>
                  </li>
                  <li>
                    Select <strong>Payment</strong> menu
                  </li>
                  <li>
                    Select <strong>Continue</strong> menu
                  </li>
                  <li>
                    Select <strong>Virtual Account</strong> menu
                  </li>
                  <li>
                    Enter the <strong>Virtual Account Number</strong>, for
                    example <strong>8625XXXXXXXXXX</strong>
                  </li>
                  <li>
                    Select <strong>Process</strong>
                  </li>
                  <li>Virtual Account data will be displayed</li>
                  <li>
                    Select <strong>Process</strong>
                  </li>
                  <li>
                    Retrieve your <strong>Proof of Payment</strong>
                  </li>
                  <li>Finished</li>
                </ol>
              </div>
              <div className="p-4 bg-white mx-2 border rounded-md">
                <h1 className="text-xl font-bold">
                  Payment method via Mobile Banking:
                </h1>
                <ol className="list-decimal px-8">
                  <li>
                    Login to your <strong>Go Mobile</strong>
                  </li>
                  <li>
                    Select <strong>Transfer</strong> menu
                  </li>
                  <li>
                    Select <strong>Transfer to Another CIMB Niaga</strong> menu
                  </li>
                  <li>
                    Select the <strong>source of funds</strong> to be used
                  </li>
                  <li>
                    Enter the <strong>Virtual Account Number</strong>, for
                    example <strong>8625XXXXXXX</strong>
                  </li>
                  <li>
                    Enter the <strong>amount</strong>, for example{' '}
                    <strong>100000</strong>
                  </li>
                  <li>
                    Click <strong>Next</strong>
                  </li>
                  <li>Virtual Account data will be displayed</li>
                  <li>
                    Enter your <strong>Mobile PIN</strong>
                  </li>
                  <li>
                    The <strong>Proof of Payment</strong> will be sent via SMS
                  </li>
                  <li>Finished</li>
                </ol>
              </div>
              <div className="p-4 bg-white mx-2 border rounded-md">
                <h1 className="text-md font-bold">
                  Payment method via Internet Banking:
                </h1>
                <ol className="list-decimal px-8">
                  <li>
                    Login to your <strong>Internet Banking</strong>
                  </li>
                  <li>
                    Select <strong>Pay Bill</strong>
                  </li>
                  <li>
                    Select the <strong>Source Account</strong> - Choose the
                    account you want to use
                  </li>
                  <li>
                    Select <strong>Payment Type</strong> - Choose{' '}
                    <strong>Virtual Account</strong>
                  </li>
                  <li>
                    For <strong>Payment</strong> - Enter the{' '}
                    <strong>Virtual Account Number</strong>, for example{' '}
                    <strong>8625XXXXX</strong>
                  </li>
                  <li>
                    Fill in the <strong>Remark</strong> if necessary
                  </li>
                  <li>
                    Click <strong>Continue</strong>
                  </li>
                  <li>Virtual Account data will be displayed</li>
                  <li>
                    Enter your <strong>mPIN</strong>
                  </li>
                  <li>
                    Click <strong>Send</strong>
                  </li>
                  <li>
                    The <strong>Proof of Payment</strong> will be displayed
                  </li>
                  <li>Finished</li>
                </ol>
              </div>
            </>
          ) : method === 'Danamon' ? (
            <>
              <div className="p-4 bg-white mx-2 border rounded-md">
                <h1 className="text-xl font-bold">
                  Bank Danamon ATMs using Bank Danamon Cards:
                </h1>
                <ol className="list-decimal px-8">
                  <li>
                    Input your <strong>ATM Card</strong> and{' '}
                    <strong>PIN</strong>
                  </li>
                  <li>
                    Select <strong>Payment Menu</strong>
                  </li>
                  <li>
                    Choose <strong>Virtual Account</strong>
                  </li>
                  <li>
                    Enter the <strong>Virtual Account Number</strong>
                  </li>
                  <li>
                    Enter the <strong>Amount</strong>
                  </li>
                  <li>
                    On the payment confirmation screen, verify the transaction
                    details and select <strong>YES</strong> to proceed with the
                    transaction
                  </li>
                </ol>
              </div>
              <div className="p-4 bg-white mx-2 border rounded-md">
                <h1 className="text-xl font-bold">D-Mobile Application:</h1>
                <ol className="list-decimal px-8">
                  <li>
                    Login to your <strong>D-Mobile</strong> application
                  </li>
                  <li>
                    Select <strong>Virtual Account</strong> menu
                  </li>
                  <li>
                    Enter the <strong>16-digit Virtual Account Number</strong>
                  </li>
                  <li>
                    Enter the <strong>Amount</strong>
                  </li>
                  <li>
                    On the payment confirmation screen, verify the transaction
                    details and select <strong>Yes</strong> to proceed with the
                    transaction
                  </li>
                </ol>
              </div>
              <div className="p-4 bg-white mx-2 border rounded-md">
                <h1 className="text-md font-bold">
                  Bank Danamon ATMs use other bank cards
                </h1>
                <ol className="list-decimal px-8">
                  <li>
                    Go to the <strong>Transfer</strong> menu
                  </li>
                  <li>
                    Select the destination account as{' '}
                    <strong>Bank Danamon</strong>
                  </li>
                  <li>
                    Enter the <strong>Bank Danamon Code (011)</strong> +{' '}
                    <strong>16-digit Virtual Account Number</strong>
                  </li>
                  <li>
                    Enter the <strong>payment amount</strong>
                  </li>
                  <li>
                    On the payment confirmation screen, please ensure that the
                    recipient`s name and transaction amount are correct
                  </li>
                  <li>Confirm the payment</li>
                </ol>
              </div>
              <div className="p-4 bg-white mx-2 border rounded-md">
                <h1 className="text-xl font-bold">
                  ATMs of other banks use Bank Danamon cards or other banks
                </h1>
                <ol className="list-decimal px-8">
                  <li>
                    Go to the <strong>Transfer</strong> menu
                  </li>
                  <li>
                    Select <strong>Other Bank Account</strong> as the
                    destination
                  </li>
                  <li>
                    Enter the <strong>Bank Danamon Code (011)</strong> +{' '}
                    <strong>16-digit Virtual Account Number</strong>
                  </li>
                  <li>
                    Enter the <strong>payment amount</strong>
                  </li>
                  <li>
                    On the payment confirmation screen, please ensure that the
                    recipient`s name and transaction amount are correct
                  </li>
                  <li>Confirm the payment</li>
                </ol>
              </div>
              <div className="p-4 bg-white mx-2 border rounded-md">
                <h1 className="text-xl font-bold">
                  Internet Banking Other Banks, Online Transfers (ATM Bersama /
                  ALTO / Prima)
                </h1>
                <ol className="list-decimal px-8">
                  <li>
                    Go to the <strong>Transfer</strong> menu
                  </li>
                  <li>
                    Select the destination account as{' '}
                    <strong>Bank Danamon</strong>
                  </li>
                  <li>
                    Enter the <strong>Bank Danamon Code (011)</strong> +{' '}
                    <strong>16-digit Virtual Account Number</strong>
                  </li>
                  <li>
                    Enter the <strong>payment amount</strong>
                  </li>
                  <li>
                    On the payment confirmation screen, please ensure that the
                    recipient`s name and transaction amount are correct
                  </li>
                  <li>Confirm the payment</li>
                </ol>
              </div>
            </>
          ) : method === 'BSI' ? (
            <>
              <div className="p-4 bg-white mx-2 border rounded-md">
                <h1 className="text-xl font-bold">Payment method via ATM:</h1>
                <ol className="list-decimal px-8">
                  <li>
                    Select <strong>Payment / Pembayaran / Pembelian</strong>{' '}
                    menu
                  </li>
                  <li>
                    Choose <strong>Institution / Akademik / Wakaf</strong>
                  </li>
                  <li>
                    Enter the institution code: <strong>1062</strong> followed
                    by your payment VA number. Format:{' '}
                    <strong>1062xxxxxxxxxxxx</strong> (1062 = institution code,
                    xxxxxxxxxxxx = payment / virtual account number) Example:
                    1062123456789123
                  </li>
                  <li>
                    Press <strong>OK / Next</strong> button
                  </li>
                  <li>
                    Your transaction data will be displayed, please double-check
                    the recipient`s name and payment amount to match your bill
                  </li>
                  <li>
                    If the data is correct, select <strong>OK / YES</strong>
                  </li>
                  <li>
                    The transaction receipt will be displayed if successful
                  </li>
                </ol>
              </div>
              <div className="p-4 bg-white mx-2 border rounded-md">
                <h1 className="text-xl font-bold">
                  Payment method via Mobile Banking:
                </h1>
                <ol className="list-decimal px-8">
                  <li>
                    Select <strong>Payment / Pembayaran</strong> menu
                  </li>
                  <li>
                    Choose <strong>Institution / Akademik / Wakaf</strong>
                  </li>
                  <li>
                    Enter the institution code: <strong>1062</strong>
                  </li>
                  <li>
                    Enter your payment VA number without the institution code,
                    then click "Agree / Setuju"
                  </li>
                  <li>
                    Press <strong>Next</strong> button, then your transaction
                    data will be displayed. Please double-check the recipient's
                    name and payment amount to match your bill, then click{' '}
                    <strong>Next</strong>
                  </li>
                  <li>Enter your PIN</li>
                  <li>
                    Press <strong>Next</strong> button to Submit
                  </li>
                  <li>
                    The transaction receipt will be displayed if successful
                  </li>
                </ol>
              </div>
              <div className="p-4 bg-white mx-2 border rounded-md">
                <h1 className="text-xl font-bold">
                  Payment Methods through non-Bank Channels:
                </h1>
                <ol className="list-decimal px-8">
                  <li>
                    Input your <strong>ATM Card</strong> and{' '}
                    <strong>PIN</strong>
                  </li>
                  <li>
                    Select <strong>Pay / Buy</strong>
                  </li>
                  <li>
                    Choose <strong>Others / Lainnya</strong>
                  </li>
                  <li>
                    Select <strong>Bank Transfer</strong>
                  </li>
                  <li>
                    Choose <strong>BSI Bank (451)</strong>
                  </li>
                  <li>
                    Enter <strong>9001062</strong>, followed by the virtual
                    account number, for example{' '}
                    <strong>9001062010000000014</strong>
                  </li>
                  <li>
                    Enter the <strong>Payment Amount</strong>
                  </li>
                  <li>Proceed with the payment</li>
                </ol>
              </div>
            </>
          ) : method === 'BNC' ? (
            <>
              <div className="p-4 bg-white mx-2 border rounded-md">
                <h1 className="text-xl font-bold">
                  How to pay BNCVA via ATM Bersama:
                </h1>
                <ol className="list-decimal px-8">
                  <li>
                    Input your <strong>ATM Card</strong> and{' '}
                    <strong>PIN</strong>
                  </li>
                  <li>
                    Select <strong>Payment VA</strong> menu
                  </li>
                  <li>
                    Input the <strong>Virtual Account Number</strong>
                  </li>
                  <li>
                    Select <strong>Confirm</strong> or <strong>OK</strong> and
                    complete the payment
                  </li>
                  <li>Take a receipt of your payment</li>
                </ol>
              </div>
              <div className="p-4 bg-white mx-2 border rounded-md">
                <h1 className="text-xl font-bold">
                  Payment method via Mobile Banking:
                </h1>
                <ol className="list-decimal px-8">
                  <li>
                    Login to your <strong>Mobile Banking</strong>
                  </li>
                  <li>
                    Select <strong>VA Payment</strong>
                  </li>
                  <li>
                    Input the <strong>Virtual Account Number</strong>
                  </li>
                  <li>
                    Select <strong>Continue</strong> and enter your PIN
                  </li>
                  <li>Proceed to complete the payment</li>
                  <li>The payment receipt will be displayed</li>
                </ol>
              </div>
            </>
          ) : method === 'OVO' ? (
            <>
              <div className="p-4 bg-white mx-2 border rounded-md">
                <h1 className="text-xl font-bold">How to pay with OVO</h1>
                <ol className="list-decimal px-8">
                  <li>
                    Select <strong>OVO Payment</strong> and enter your OVO
                    number
                  </li>
                  <li>
                    Payment notification will be sent to your OVO application
                  </li>
                  <li>Open and login to your OVO application</li>
                  <li>Ensure that your OVO balance is sufficient</li>
                  <li>
                    If you don't receive the notification, please check the Bell
                    icon in the top right corner
                  </li>
                  <li>
                    Click <strong>Pay</strong>, <strong>Bayar</strong>, or{' '}
                    <strong>Confirm</strong>
                  </li>
                  <li>
                    Your payment is successful! You will be redirected to the
                    result page
                  </li>
                </ol>
              </div>
            </>
          ) : method === 'DANA' ? (
            <>
              <div className="p-4 bg-white mx-2 border rounded-md">
                <h1 className="text-xl font-bold">How to pay with DANA</h1>
                <ol className="list-decimal px-8">
                  <li>
                    Select <strong>DANA Payment</strong> and enter your
                    registered mobile number
                  </li>
                  <li>You will be redirected to the DANA Payment Page</li>
                  <li>Log in using your DANA account</li>
                  <li>Ensure that your balance is sufficient</li>
                  <li>
                    Click <strong>Pay</strong>, <strong>Bayar</strong>, or{' '}
                    <strong>Confirm</strong>
                  </li>
                  <li>
                    Your payment is successful! You will be redirected to the
                    result page
                  </li>
                </ol>
              </div>
            </>
          ) : method === 'LinkAja' ? (
            <>
              <div className="p-4 bg-white mx-2 border rounded-md">
                <h1 className="text-xl font-bold">How to pay with LinkAja</h1>
                <ol className="list-decimal px-8">
                  <li>
                    Select <strong>LinkAja Payment</strong> and enter your
                    LinkAja number
                  </li>
                  <li>You will be redirected to your LinkAja Payment Page</li>
                  <li>Log in using your LinkAja account</li>
                  <li>Ensure that your balance is sufficient</li>
                  <li>
                    Click <strong>Pay</strong>, <strong>Bayar</strong>, or{' '}
                    <strong>Confirm</strong>
                  </li>
                  <li>
                    Your payment is successful! You will be redirected to the
                    result page
                  </li>
                </ol>
              </div>
            </>
          ) : method === 'ShopeePay' ? (
            <>
              <div className="p-4 bg-white mx-2 border rounded-md">
                <h1 className="text-xl font-bold">How to pay with ShopeePay</h1>
                <ol className="list-decimal px-8">
                  <li>
                    Select <strong>ShopeePay Payment</strong> and enter your
                    ShopeePay number
                  </li>
                  <li>You will be redirected to your ShopeePay Payment Page</li>
                  <li>Log in using your ShopeePay account</li>
                  <li>Ensure that your balance is sufficient</li>
                  <li>
                    Click <strong>Pay</strong>, <strong>Bayar</strong>, or{' '}
                    <strong>Confirm</strong>
                  </li>
                  <li>
                    Your payment is successful! You will be redirected to the
                    result page
                  </li>
                </ol>
              </div>
            </>
          ) : method === 'Indomaret' ? (
            <>
              <div className="p-4 bg-white mx-2 border rounded-md">
                <h1 className="text-xl font-bold">How to pay with Indomaret</h1>
                <ol className="list-decimal px-8">
                  <li>
                    Select <strong>Indomaret Payment</strong>
                  </li>
                  <li>
                    Take note or print the <strong>Payment Code</strong>
                  </li>
                  <li>
                    Bring the <strong>Payment Code</strong> to an Indomaret
                    store
                  </li>
                  <li>
                    Inform the cashier of the <strong>Merchant Name</strong>
                  </li>
                  <li>
                    Provide the <strong>Payment Code</strong> to the cashier
                  </li>
                  <li>
                    The cashier will enter the <strong>Payment Code</strong>
                  </li>
                  <li>Pay the amount as specified</li>
                  <li>Collect the payment receipt</li>
                  <li>You're done!</li>
                </ol>
              </div>
              <div className="p-4 bg-white mx-2 border rounded-md">
                <h1 className="text-xl font-bold">How to Withdraw Cash:</h1>
                <ol className="list-decimal px-8">
                  <li>Come to the nearest Indomaret outlet</li>
                  <h1>
                    Tell the cashier to withdraw LinkQu cash without a card and
                    inform the token, cellphone number and nominal Proof of
                    transfer will be provided via email
                  </h1>
                </ol>
              </div>
            </>
          ) : method === 'Alfamaret' ? (
            <>
              <div className="p-4 bg-white mx-2 border rounded-md">
                <h1 className="text-xl font-bold">
                  How to pay with ALFA GROUP
                </h1>
                <ol className="list-decimal px-8">
                  <li>
                    Select{' '}
                    <strong>Alfamart/Alfamidi/Dan+Dan/Lawson Payment</strong>
                  </li>
                  <li>
                    Take note or print the <strong>Payment Code</strong>
                  </li>
                  <li>
                    Bring the <strong>Payment Code</strong> to an
                    Alfamart/Alfamidi/Dan+Dan/Lawson store
                  </li>
                  <li>
                    Inform the cashier that you want to make a{' '}
                    <strong>LINKITA payment</strong>
                  </li>
                  <li>
                    Provide the <strong>Payment Code</strong> to the cashier
                  </li>
                  <li>
                    The cashier will enter the <strong>Payment Code</strong>
                  </li>
                  <li>Pay the amount as specified</li>
                  <li>Collect the payment receipt</li>
                  <li>You're done!</li>
                </ol>
              </div>
            </>
          ) : (
            ''
          )}
        </div>
      </Layout>
    </>
  );
};

export default MethodsPage;
