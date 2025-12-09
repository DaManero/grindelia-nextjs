'use client';

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Header from "../Header/Header";
import FooterStyle2 from "../Footer/FooterStyle2";

export default function Layout7({ children }) {
  const pathname = usePathname();
  useEffect(() => {
    try {
      const isInsideMain = (el) =>
        !!(
          el &&
          (el.closest(".booking-card") || el.closest(".booking-widget-area"))
        );

      document
        .querySelectorAll(
          '[id^="octorate-booking-widget"], [data-sitekey="8e3ffa8acec77e1b7347357712d940a3"]'
        )
        .forEach((el) => {
          if (!isInsideMain(el)) el.remove();
        });

      document
        .querySelectorAll('iframe[src*="booking-widget"]')
        .forEach((ifr) => {
          if (!isInsideMain(ifr)) ifr.remove();
        });
    } catch {
      /* silent */
    }
  }, [pathname]);

  return (
    <>
      <Header
        logoUrl="/images/logo-black.svg"
        variant="cs_round_btn"
        fullWidth
      />
      {children}
      <FooterStyle2 />
    </>
  );
}
