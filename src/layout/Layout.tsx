import { FC, ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <main className="max-w-7xl  px-2 lg:px-0 lg:py-4 mx-auto">{children}</main>
  );
};

export default Layout;
