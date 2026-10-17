import React, { useEffect, useState } from "react";
import styles from "./MobileMenu.module.css";
import { SOCIAL } from "../../config";

type Props = {
  isVisible: boolean;
  onClose: () => void;
};

function cn(...parts: (string | false | undefined | null)[]) {
  return parts.filter(Boolean).join(" ");
}

export const MobileMenu = ({ isVisible, onClose }: Props) => {
  const [pathname, setPathname] = useState("/");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setPathname(window.location.pathname);
    }
  }, []);

  return (
    <div
      className={cn(styles.menuContainer, isVisible && styles.menuContainerOpen)}
    >
      <ul className={styles.links}>
        {pathname !== "/map" && (
          <li className={styles.item}>
            <a href="/map" onClick={onClose}>карта</a>
          </li>
        )}
        {pathname !== "/" && (
          <li className={styles.item}>
            <a href="/" onClick={onClose}>статьи</a>
          </li>
        )}
        {pathname !== "/gurtour" && (
          <li className={styles.item}>
            <a href="/gurtour" onClick={onClose}>гуртур</a>
          </li>
        )}
        {pathname !== "/about-us" && (
          <li className={styles.item}>
            <a href="/about-us" onClick={onClose}>о проекте</a>
          </li>
        )}
        <li className={styles.socialLink}>
          <a target="_blank" rel="noopener noreferrer" href={SOCIAL.instagram}>
            Инстаграм
          </a>
        </li>
        <li className={styles.socialLink}>
          <a target="_blank" rel="noopener noreferrer" href={SOCIAL.telegram}>
            Телеграм
          </a>
        </li>
        <li className={styles.socialLink}>
          <a target="_blank" rel="noopener noreferrer" href={SOCIAL.youtube}>
            Ютуб
          </a>
        </li>
      </ul>
    </div>
  );
};
