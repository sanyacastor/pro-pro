import styled, { css } from 'styled-components';

export const MenuContainer = styled.div`
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

export const MobileMenu = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: none;
  ${({ $isVisible }) =>
    $isVisible &&
    css`
      display: block;
    `}
`;

export const Links = styled.ul`
  text-align: center;

  font-family: 'Base&Bloom';
  font-size: 48px;
  font-weight: 400;
  line-height: 80%;
  text-transform: uppercase;
  color: #0f100a;
  padding: 0;
`;

export const NavListItem = styled.li`
  margin: 0;
  padding: 0;
  list-style: none;
  text-transform: uppercase;
  white-space: nowrap;
  margin-bottom: 24px;
`;

export const NavListSocials = styled.li`
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
    border: 1px solid #000;
    border-radius: 50%;
    padding: 20px 0;
    width: 180px;
    text-align: center;
  }
`;
