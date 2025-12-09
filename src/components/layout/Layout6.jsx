'use client';

import FooterStyle2 from "../Footer/FooterStyle2";
import HeaderStyle3 from "../Header/HeaderStyle3";

export default function Layout6({ children }) {
  return (
    <>
      <HeaderStyle3 logoUrl="/images/logo.svg" variant="cs_type_1" fullWidth />
      {children}
      <FooterStyle2 />
    </>
  );
}
