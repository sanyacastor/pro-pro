import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import { MobileMenu } from "./MobileMenu";

type Mode = "default" | "gurtour";

type Props = { mode?: Mode };

function cn(...parts: (string | false | undefined | null)[]) {
  return parts.filter(Boolean).join(" ");
}

export default function Header({ mode = "default" }: Props) {
  const [menuVisible, setMenuVisible] = useState(false);
  const [pathname, setPathname] = useState("/");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setPathname(window.location.pathname);
    }
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    if (menuVisible) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [menuVisible]);

  const isUnderlined = (frag: string) => {
    if (frag === "/") return pathname.startsWith("/article");
    return pathname.includes(frag);
  };

  const isGurtourMode = mode === "gurtour";

  return (
    <>
      <header className={cn(styles.header, isGurtourMode && styles.headerGurtour)}>
        <div className={styles.container}>
          <nav className={styles.navigation}>
            <ul className={styles.list}>
              <li className={styles.item}>
                <a href="/">ПРО ПРО</a>
              </li>

              <div className={styles.links}>
                <li
                  className={cn(
                    styles.item,
                    isUnderlined("/map") && styles.itemUnderlined
                  )}
                >
                  <a href="/map">карта</a>
                </li>
                <li
                  className={cn(
                    styles.item,
                    isUnderlined("/article") && styles.itemUnderlined
                  )}
                >
                  <a href="/">статьи</a>
                </li>
                <li
                  className={cn(
                    styles.item,
                    isGurtourMode && styles.itemUnderlinedGurtour,
                    isUnderlined("/gurtour") && styles.itemUnderlined
                  )}
                >
                  <a href="/gurtour">гуртур</a>
                </li>
                <li
                  className={cn(
                    styles.item,
                    isUnderlined("/about-us") && styles.itemUnderlined
                  )}
                >
                  <a href="/about-us">о проекте</a>
                </li>
              </div>

              <li className={styles.socials}></li>

              <div
                role="button"
                aria-label="menu"
                className={styles.menuIcon}
                onClick={() => setMenuVisible((v) => !v)}
              >
                <div
                  className={cn(
                    styles.bar1,
                    isGurtourMode && styles.bar1Gurtour,
                    menuVisible && styles.bar1Open
                  )}
                />
                <div
                  className={cn(
                    styles.bar2,
                    isGurtourMode && styles.bar2Gurtour,
                    menuVisible && styles.bar2Open
                  )}
                />
                <div
                  className={cn(
                    styles.bar3,
                    isGurtourMode && styles.bar3Gurtour,
                    menuVisible && styles.bar3Open
                  )}
                />
              </div>
            </ul>
          </nav>
        </div>
      </header>
      <MobileMenu isVisible={menuVisible} onClose={() => setMenuVisible(false)} />
    </>
  );
}
