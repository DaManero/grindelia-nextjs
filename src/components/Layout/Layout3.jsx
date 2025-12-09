'use client';

import Header from '../Header/Header';
import FooterStyle4 from '../Footer/FooterStyle4';

export default function Layout3({ children }) {
  return (
    <>
      <Header logoUrl="/images/logo.svg" />
      {children}
      <FooterStyle4 />
    </>
  );
}
