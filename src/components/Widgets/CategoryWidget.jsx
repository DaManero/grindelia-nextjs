'use client';

import React from 'react';
import Link from "next/link";

export default function CategoryWidget({ widgetTitle, data }) {
  return (
    <>
      {widgetTitle && (
        <h4 className="cs_sidebar_widget_title">{widgetTitle}</h4>
      )}
      <ul>
        {data?.map((item, index) => (
          <li className="cat-item" key={index}>
            <Link href={item.href}>
              {item.title} ({item.numberOfItem})
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
