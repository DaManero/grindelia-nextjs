'use client';

import { Icon } from "@iconify/react";
import React from "react";
import Link from "next/link";

export default function SocialMedia() {
  return (
    <div className="cs_social_btns cs_style_1">
      <Link target="_blank"
        href="https://www.instagram.com/grindelia.ecoapart"
        className="cs_center"
      >
        <Icon icon="fa-brands:instagram" width="14" height="14" />
      </Link>
      <Link target="_blank"
        href="https://www.facebook.com/profile.php?id=61583406805284#"
        className="cs_center"
      >
        <Icon icon="fa-brands:facebook-f" width="14" height="14" />
      </Link>
    </div>
  );
}
