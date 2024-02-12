import React from 'react';

export interface LayoutProps {
  modal: React.ReactNode;
  header: React.ReactNode;
  toolbar: React.ReactNode;
  children: React.ReactNode;
}

function Layout({ modal, header, toolbar, children }: LayoutProps) {
  return (
    <>
      {modal}
      {header}
      <main>
        {toolbar}
        {children}
      </main>
    </>
  );
}

export default Layout;
