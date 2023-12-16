import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url('/images/content/gur_tour_background.webp');
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
`;

export const Title = styled.div`
  @media (max-width: 760px) {
    img {
      max-width: 80vw;
      height: auto;
    }
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
  margin-top: 52px;

  list-style: none;

  color: #fff282;

  text-align: center;
  font-family: 'Piazzolla';
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 134.5%;
  text-transform: uppercase;
`;

export const ReviewLink = styled.li``;
