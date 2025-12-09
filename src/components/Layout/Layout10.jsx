'use client';

import Header from '../Header/Header';
import Footer from '../Footer';

export default function Layout10({ children }) {
  return (
    <>
      <Header logoUrl="/images/logo.svg" variant="cs_round_btn" fullWidth />
      {children}
      <Footer />
    </>
  );
}
