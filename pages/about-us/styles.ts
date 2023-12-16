import styled from 'styled-components';

export const Hero = styled.div<{ bgColor?: string }>`
  background: linear-gradient(
      180deg,
      rgba(217, 217, 217, 0) -8.33%,
      rgba(51, 0, 0, 0.29) 55.43%,
      rgba(51, 0, 0, 0.42) 99.44%
    ),
    url(/images/content/about_us_thumbnail.jpg);
  background-size: cover;
  background-position: center;
  text-align: center;
  padding-top: 320px;
  min-height: 800px;

  color: #ebe6da;

  @media (max-width: 960px) {
    min-height: 375px;

    margin-top: 0;
    padding: 0;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: end;
    text-align: center;
    padding: 42px;
  }
`;

export const HeroTitle = styled.h2`
  color: #f8f3f3;
  margin: 0;
  padding: 0;

  font-family: 'BASE&BLOOM';
  font-size: 200px;
  font-style: normal;
  font-weight: 400;
  line-height: 60%;
  text-transform: uppercase;
`;

export const HeroSubtitle = styled.h1`
  color: #f8f3f3;
  margin: 0;
  padding: 0;

  margin-top: 50px;

  font-family: 'BASE&BLOOM';
  font-size: 60px;
  font-style: normal;
  font-weight: 400;
  line-height: 96.667%;
  text-transform: uppercase;
`;

export const SectionTitle = styled.h3`
  color: #000;
  margin-bottom: 16px;

  font-family: 'Piazzolla';
  font-size: 32px;
  font-style: italic;
  font-weight: 400;
  line-height: 130%; /* 41.6px */
  text-decoration-line: underline;
`;

export const Banners = styled.div`
  margin-top: 125px;
`;

export default {}