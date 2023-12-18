import styled, { css } from 'styled-components';

export const Header = styled.header`
  padding: 15px 140px;
  display: flex;
  background: rgba(0, 0, 0, 0.4);
  color: #fff;
  font-family: 'Lack';
  font-size: 20px;

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 20;
  transition: background 0.3s ease;

  @media screen and (max-width: 830px) {
    padding: 15px 15px;
  }
`;

export const Navigation = styled.nav`
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
  align-items: center;
`;

export const Links = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 580px) {
    display: none;
  }
`;

export const NavList = styled.ul`
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: 580px) {
    justify-content: space-between;
    align-items: center;
  }
`;

export const NavListItem = styled.li`
  margin: 0;
  padding: 0;
  list-style: none;
  text-transform: uppercase;
  white-space: nowrap;

  & + li {
    margin-left: 40px;
  }

  ${({ $isCurrent }) =>
    $isCurrent &&
    css`
      text-decoration: underline;
      font-style: italic;
    `}
`;

export const NavListSocials = styled.li`
  margin: 0;
  padding: 0;
  list-style: none;
  text-transform: uppercase;

  border: 1px solid #fff;
  border-radius: 50%;
  padding: 4px 8px;

  @media screen and (max-width: 580px) {
    display: none;
  }
`;

export const MobileMenu = styled.div`
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
`;

export const MenuIcon = styled.div`
  width: 25px;
  height: 25px;
  display: none;

  .bar1,
  .bar2,
  .bar3 {
    width: 25px;
    height: 2px;
    background-color: #fff;
    margin: 6px 0;
    transition: 0.4s;
  }

  /* Rotate first bar */
  .bar1 {
    transform: ${(props) =>
      props.$cross && 'translate(0, 10px) rotate(-45deg)'};
  }

  /* Fade out the second bar */
  .bar2 {
    opacity: ${(props) => (props.$cross ? '0' : '1')};
  }

  /* Rotate last bar */
  .bar3 {
    transform: ${({ $cross }) => $cross && 'translate(0, -6px) rotate(45deg)'};
  }

  @media screen and (max-width: 580px) {
    display: block;
  }
`;
