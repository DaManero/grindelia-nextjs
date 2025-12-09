'use client';

import Header from "../Header/Header";
import FooterStyle2 from "../Footer/FooterStyle2";

export default function Layout8({ children }) {
  return (
    <>
      <Header logoUrl="/images/logo-black.svg" variant="cs_type_2" fullWidth />
      {children}
      <FooterStyle2 />
    </>
  );
}
