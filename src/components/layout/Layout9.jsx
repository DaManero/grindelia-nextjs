'use client';

import Header from "../Header/Header";
import FooterStyle2 from "../Footer/FooterStyle2";

export default function Layout9({ children }) {
  return (
    <>
      <Header
        logoUrl="/images/logo-black.svg"
        variant="cs_type_1 cs_round_btn"
        fullWidth
      />
      {children}
      <FooterStyle2 />
    </>
  );
}
