import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold">Invested Companies</h1>
      </header>
      {children}
    </div>
  );
};

export default Layout;