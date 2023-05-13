import Image from 'next/image';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 104px;
`;

export const Container = styled.div`
  background: #d8cbff;
  min-height: 480px;

  margin: 0 auto;
  max-width: 1160px;

  display: flex;
  flex-direction: row;
  gap: 60px;
`;

export const ArticleImage = styled(Image)``;

export const ArticleDescription = styled.div`
  max-width: 380px;
`;

export const ArticleTitle = styled.h3`
  font-family: 'Base&Bloom';
  font-style: normal;
  font-weight: 400;
  font-size: 46px;
  line-height: 90%;
  text-transform: uppercase;
  margin-top: 48px;
  margin-bottom: 0;
`;

export const ArticleDescriptionText = styled.div`
  font-family: 'Piazzolla';
  font-style: italic;
  font-weight: 500;
  font-size: 32px;
  line-height: 105%;
  margin-top: 8px;
  position: relative;

  ::before {
    content: '';
    position: absolute;
    left: -33px;
    width: 376px;
    height: 184px;
    background-image: url('/images/icons/preview_selection_icon.svg');
    background-repeat: no-repeat;
  }
`;
