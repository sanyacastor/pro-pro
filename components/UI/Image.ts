import styled from 'styled-components';

export const Image = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;

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
`;
