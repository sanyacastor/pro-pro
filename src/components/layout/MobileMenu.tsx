import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { SOCIAL } from "../../config";

const MenuContainer = styled.div<{ $isVisible: boolean }>`
  height: 100vh;
  width: 100vw;
  position: fixed;
  left: 0;
  padding-top: 75px;
  background-color: #d9d9d9;
  transform: translateX(-100%);
  transition: all 0.3s ease;
  z-index: 15;
  ${({ $isVisible }) =>
    $isVisible &&
    css`
      transform: translateX(0);
    `}
`;

const Links = styled.ul`
  text-align: center;
  font-family: "Base&Bloom";
  font-size: 48px;
  font-weight: 400;
  line-height: 80%;
  text-transform: uppercase;
  color: #0f100a;
  padding: 0;
`;

const NavListItem = styled.li`
  margin: 0;
  padding: 0;
  list-style: none;
  text-transform: uppercase;
  white-space: nowrap;
  margin-bottom: 24px;
`;

const NavListSocials = styled.li`
  margin: 0;
  padding: 0;
  list-style: none;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  line-height: 20px;
  margin-bottom: 18px;
  a {
    display: block;
    width: 180px;
    text-align: center;
    text-decoration: underline;
  }
`;

type Props = {
  isVisible: boolean;
  onClose: () => void;
};

export const MobileMenu = ({ isVisible, onClose }: Props) => {
  const [pathname, setPathname] = useState("/");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setPathname(window.location.pathname);
    }
  }, []);

  return (
    <MenuContainer $isVisible={isVisible}>
      <Links>
        {pathname !== "/map" && (
          <NavListItem>
            <a href="/map" onClick={onClose}>
              карта
            </a>
          </NavListItem>
        )}
        {pathname !== "/" && (
          <NavListItem>
            <a href="/" onClick={onClose}>
              статьи
            </a>
          </NavListItem>
        )}
        {pathname !== "/gurtour" && (
          <NavListItem>
            <a href="/gurtour" onClick={onClose}>
              гуртур
            </a>
          </NavListItem>
        )}
        {pathname !== "/about-us" && (
          <NavListItem>
            <a href="/about-us" onClick={onClose}>
              о проекте
            </a>
          </NavListItem>
        )}
        <NavListSocials>
          <a target="_blank" rel="noopener noreferrer" href={SOCIAL.instagram}>
            Инстаграм
          </a>
        </NavListSocials>
        <NavListSocials>
          <a target="_blank" rel="noopener noreferrer" href={SOCIAL.telegram}>
            Телеграм
          </a>
        </NavListSocials>
        <NavListSocials>
          <a target="_blank" rel="noopener noreferrer" href={SOCIAL.youtube}>
            Ютуб
          </a>
        </NavListSocials>
      </Links>
    </MenuContainer>
  );
};
