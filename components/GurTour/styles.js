import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100svw;
  height: 100svh;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url('/images/content/gur_tour_background.webp');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const Container = styled.div`
  position: relative;
  height: 100svh;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  max-width: 1160px;
  margin: 0 auto;

  padding: 0 16px;
`;

export const Logo = styled.div`
  width: 500px;
  max-width: 100%;

  img {
    width: 100%;
    max-width: 100%;
    height: auto;
  }

  @media screen and (max-width: 780px) {
    max-width: 230px;
  }
`;

export const Subtitle = styled.div`
  font-family: 'Piazzolla';
  font-weight: 500;
  font-size: 20px;
  line-height: 134.5%;

  text-align: center;
  text-transform: uppercase;

  color: #fff282;
`;

export const ReviewList = styled.ul`
  position: absolute;
  width: 100%;
  height: 100%;

  list-style: none;

  color: #fff282;

  text-align: center;
  font-family: 'Piazzolla';
  font-size: 48px;
  font-style: normal;
  font-weight: 500;
  line-height: 134.5%;
  text-transform: uppercase;
`;

export const ReviewLink = styled.li`
  position: absolute;

  box-shadow: 0px 0px 14px 3px rgba(0, 0, 0, 0.28);

  font-family: 'Lack';
  font-size: 30px;
  padding: 20px 50px;
  border-radius: 50%;
  line-height: 88.5%;

  background: ${({ theme }) => theme.colors.gurTourSecondaryColor};
  color: ${({ theme }) => theme.colors.gurTourMainColor};

  transition: transform 150ms ease-in-out;

  :nth-child(1) {
    top: 340px;
    right: 30px;
    transform: rotate(12deg);

    @media screen and (max-width: 780px) {
      top: auto;
      bottom: 80px;
      right: 20px;
    }
  }

  :nth-child(2) {
    top: 140px;
    left: 120px;
    transform: rotate(-12deg);

    @media screen and (max-width: 780px) {
      bottom: auto;
      top: 120px;
      left: 16px;
    }
  }

  :hover {
    transform: scale(1.1) rotate(0);
  }
`;
