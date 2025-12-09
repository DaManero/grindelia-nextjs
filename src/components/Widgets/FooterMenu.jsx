'use client';

import React from 'react';
import Link from "next/link";

export default function FooterMenu({ data, variant }) {
  return (
    <ul className={`cs_mp_0 ${variant}`}>
      {data?.map((item, index) => (
        <li key={index}>
          <Link href={item.href}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );
}
