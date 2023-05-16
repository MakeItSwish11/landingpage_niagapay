import Link from 'next/link';

function Header() {
  return (
    <header className="px-8 py-5 w-full">
      <div
        data-aos="fade-left"
        className="flex justify-between items-center space-x-5 cursor-pointer"
      >
        <Link href="/" target="_blank">
          NiagaPay
        </Link>

        <button>Contact Us</button>
      </div>
    </header>
  );
}

export default Header;
