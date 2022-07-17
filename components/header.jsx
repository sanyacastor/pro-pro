import React from "react";
import Link from "next/link";

import s from "../styles/Home.module.scss";

export default function Header() {
  return (
    <header>
      <div className={s.header}>
        <Link href="/">ПРО ПРО</Link>
        <nav className={s.navigation}>
          <ul>
            <li>
              <Link href="/posts">почитать</Link>
            </li>
            <li>
              <Link href="/map">крта</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
