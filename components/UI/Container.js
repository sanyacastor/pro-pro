import styled from 'styled-components';

export const PostContainer = styled.div`
  width: 1160px;
  margin: 0 auto;
  font-size: 18px;
  overflow: hidden;

  a {
    cursor: pointer;
    text-decoration: underline;
  }

  @media (max-width: 1160px) {
    width: 100%;
  }
`;

export const ReviewContainer = styled.div`
  width: 760px;
  margin: 0 auto;
  font-weight: 400;
  font-size: 20px;
  line-height: 130%;
  overflow: hidden;

  a {
    cursor: pointer;
    text-decoration: underline;
  }

  @media (max-width: 760px) {
    width: 100%;
    padding: 0 8px;
  }
`;
