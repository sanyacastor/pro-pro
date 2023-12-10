import styled from 'styled-components';

export const Container = styled.div`
  width: 960px;
  margin: 0 auto;
  font-size: 18px;
  position: relative;

  @media (max-width: 960px) {
    max-width: 960px;

    width: 100%;
    overflow: hidden;
    margin: 0 auto;
    padding: 0 16px;
  }
`;
