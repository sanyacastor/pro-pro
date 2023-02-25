import React from 'react';
import Link from 'next/link';

import s from './header.module.css';

export const Header = () => (
  <header>
    <div className={s.header}>
      <nav className={s.navigation}>
        <ul>
          <li>
            <Link href="/">ПРО ПРО</Link>
          </li>
          <li>
            <Link href="/map">крта</Link>
          </li>
          <li>
            <Link href="/">статьи</Link>
          </li>
          <li>
            <Link href="/">гуртур</Link>
          </li>
          <li>
            <Link href="/">о проекте</Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);
