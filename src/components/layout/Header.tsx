import React, { useState } from "react";
import styled, { css } from "styled-components";

import { MobileMenu } from "./MobileMenu";

type Mode = "default" | "gurtour";

type Props = { mode?: Mode };

const HeaderEl = styled("header")<{ $mode: Mode }>`
  height: 70px;
  display: flex;
  background: rgba(0, 0, 0, 0.4);
  color: #fff;
  font-family: "Lack";
  font-size: 20px;
  line-height: 80%;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 20;
  transition: background 0.3s ease;
  padding: 16px 16px;
  ${({ $mode }) =>
    $mode === "gurtour" &&
    css`
      background-color: #ec500e;
      color: #ffc229;
    `}
`;

const Container = styled.div`
  display: flex;
  margin: 0 auto;
  width: 100%;
  max-width: 1160px;
`;

const Navigation = styled.nav`
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
  align-items: center;
`;

const Links = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 780px) {
    display: none;
  }
`;

const NavList = styled.ul`
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media screen and (max-width: 780px) {
    justify-content: space-between;
    align-items: center;
  }
`;

const NavListItem = styled("li")<{
  $isUnderlined?: boolean;
  $mode?: Mode;
}>`
  margin: 0;
  padding: 0;
  list-style: none;
  text-transform: uppercase;
  white-space: nowrap;
  padding-bottom: 2px;
  & + li {
    margin-left: 40px;
  }
  ${({ $isUnderlined }) =>
    $isUnderlined &&
    css`
      padding-bottom: 0;
      border-bottom: 1px solid #fff;
    `}
  ${({ $mode }) =>
    $mode === "gurtour" &&
    css`
      border-color: #ffc229;
    `}
`;

const MenuIcon = styled("div")<{ $cross?: boolean; $mode: Mode }>`
  width: 25px;
  height: 25px;
  display: none;
  .bar1,
  .bar2,
  .bar3 {
    width: 25px;
    height: 2px;
    margin: 6px 0;
    transition: 0.4s;
    background-color: ${({ $mode }) =>
      $mode === "gurtour" ? "#ffc229" : "#fff"};
  }
  .bar1 {
    transform: ${({ $cross }) => $cross && "translate(0, 10px) rotate(-45deg)"};
  }
  .bar2 {
    opacity: ${({ $cross }) => ($cross ? "0" : "1")};
  }
  .bar3 {
    transform: ${({ $cross }) => $cross && "translate(0, -6px) rotate(45deg)"};
  }
  @media screen and (max-width: 780px) {
    display: block;
  }
`;

const NavListSocials = styled.li`
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
  text-transform: uppercase;
  @media screen and (max-width: 780px) {
    display: none;
  }
`;

export default function Header({ mode = "default" }: Props) {
  const [menuVisible, setMenuVisible] = useState(false);

  // Use the underlying pathname from the browser only — this is a hydrated
  // client island. During SSR, document is undefined; this is fine because
  // useState defaults to false, and Astro only renders the markup once.
  const [pathname, setPathname] = useState("/");
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      setPathname(window.location.pathname);
    }
  }, []);

  // Body scroll lock when menu open
  React.useEffect(() => {
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

  return (
    <>
      <HeaderEl $mode={mode}>
        <Container>
          <Navigation>
            <NavList>
              <NavListItem>
                <a href="/">ПРО ПРО</a>
              </NavListItem>

              <Links>
                <NavListItem $isUnderlined={isUnderlined("/map")}>
                  <a href="/map">карта</a>
                </NavListItem>
                <NavListItem $isUnderlined={isUnderlined("/article")}>
                  <a href="/">статьи</a>
                </NavListItem>
                <NavListItem
                  $mode={mode}
                  $isUnderlined={isUnderlined("/gurtour")}
                >
                  <a href="/gurtour">гуртур</a>
                </NavListItem>
                <NavListItem $isUnderlined={pathname === "/about-us"}>
                  <a href="/about-us">о проекте</a>
                </NavListItem>
              </Links>

              <NavListSocials />

              <MenuIcon
                $cross={menuVisible}
                $mode={mode}
                onClick={() => setMenuVisible((v) => !v)}
                role="button"
                aria-label="menu"
              >
                <div className="bar1" />
                <div className="bar2" />
                <div className="bar3" />
              </MenuIcon>
            </NavList>
          </Navigation>
        </Container>
      </HeaderEl>
      <MobileMenu isVisible={menuVisible} onClose={() => setMenuVisible(false)} />
    </>
  );
}
