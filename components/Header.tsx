import Link from 'next/link';

function Header() {
  return (
    <header className="px-8 py-5 w-full">
      <div
        data-aos="fade-left"
        className="flex justify-between items-center space-x-5 "
      >
        <Link href="/">NiagaPay</Link>

        <div className="flex flex-row items-center space-x-3">
          <button className="p-4 bg-black text-white rounded-md">
            Contact Us
          </button>
          <Link
            href="https://portal.niagapay.click/login"
            className="p-4 bg-black text-white rounded-md"
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
