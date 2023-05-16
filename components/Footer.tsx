import Link from 'next/link';
import React from 'react';

function Footer() {
  return (
    <footer className="text-center py-8">
      <div className="flex items-center justify-center space-x-2">
        <Link href="/">NiagaPay</Link>
      </div>
    </footer>
  );
}

export default Footer;
