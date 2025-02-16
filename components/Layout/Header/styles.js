import styled, { css } from 'styled-components';

export const Header = styled.header`
  height: 70px;

  display: flex;
  background: rgba(0, 0, 0, 0.4);
  color: #fff;
  font-family: 'Lack';
  font-size: 20px;
  line-height: 80%;

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 20;
  transition: background 0.3s ease;

  padding: 16px 16px;

  ${({ mode, theme }) =>
    mode === 'gurTour' &&
    css`
      background-color: ${() => theme.colors.gurTourMainColor};
      color: ${() => theme.colors.gurTourSecondaryColor};
    `}
`;

export const Container = styled.div`
  display: flex;
  margin: 0 auto;

  width: 100%;
  max-width: 1160px;
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

  @media screen and (max-width: 780px) {
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

  @media screen and (max-width: 780px) {
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
  padding-bottom: 2px;

  & + li {
    margin-left: 40px;
  }

  ${({ isUnderlined }) =>
    isUnderlined &&
    css`
      padding-bottom: 0;
      font-style: italic;
      border-bottom: 1px solid #fff;
    `}

  ${({ mode, theme }) =>
    mode === 'gurTour' &&
    css`
      font-style: italic;
      border-color: ${() => theme.colors.gurTourSecondaryColor};
    `}
`;

export const NavListSocials = styled.li`
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;

  margin: 0;
  padding: 0;
  list-style: none;
  text-transform: uppercase;

  ${({ mode, theme }) =>
    mode === 'gurTour' &&
    css`
      border-color: ${() => theme.colors.gurTourSecondaryColor};
    `}

  @media screen and (max-width: 780px) {
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
    margin: 6px 0;
    transition: 0.4s;

    background-color: ${({ theme, mode }) =>
      mode === 'gurTour' ? theme.colors.gurTourSecondaryColor : '#fff'};
  }

  .bar1 {
    transform: ${({ cross }) => cross && 'translate(0, 10px) rotate(-45deg)'};
  }

  .bar2 {
    opacity: ${({ cross }) => (cross ? '0' : '1')};
  }

  .bar3 {
    transform: ${({ cross }) => cross && 'translate(0, -6px) rotate(45deg)'};
  }

  @media screen and (max-width: 780px) {
    display: block;
  }
`;
