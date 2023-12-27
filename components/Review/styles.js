import styled from 'styled-components';

export const StatsRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 100px;

  @media (max-width: 760px) {
    gap: 16px;
    flex-wrap: wrap;

    padding-top: 10px;
    padding-bottom: 18px;

    border-top: 1px solid #000000;
    border-bottom: 1px solid #000000;
  }
`;

export const Title = styled.h2`
  font-family: 'BASE&BLOOM';
  font-style: normal;
  font-weight: 400;
  font-size: 80px;
  line-height: 80%;
  text-transform: uppercase;
  margin-bottom: 0;

  white-space: nowrap;

  @media (max-width: 760px) {
    font-size: 36px;
  }
`;

export const Subtitle = styled.p`
  font-family: 'Piazzolla';
  font-style: italic;
  font-weight: 400;
  font-size: 50px;
  line-height: 48px;
  margin-top: 8px;

  @media (max-width: 760px) {
    font-size: 24px;
    line-height: 24px;
  }
`;

export const Heading = styled.h3`
  font-family: 'Piazzolla';
  font-style: normal;
  font-weight: 500;
  font-size: 48px;
  line-height: 48px;
  line-height: 100%;
  margin-top: 64px;
`;

export const FeaturesRow = styled.div``;

export const PostContainer = styled.div`
  margin-bottom: 107px;

  @media (max-width: 760px) {
    margin-bottom: 32px;
  }
`;

export const ImagesRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;

  margin-top: 64px;

  figure + figure {
    margin-left: 40px;
  }

  @media (max-width: 760px) {
    flex-direction: column;

    figure + figure {
      margin-left: 0;
    }
  }
`;

export const Image = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 100%;

  margin-top: 64px;

  figure {
    padding: 0;
    margin: 0;
  }

  figure + figure {
    margin-left: 40px;
  }

  img {
    width: 100%;
  }

  @media (max-width: 760px) {
    img {
      /* width: 90vw; */
      height: auto;
    }
  }
`;
