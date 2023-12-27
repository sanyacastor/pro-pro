import React from 'react';
import { Wrapper, BannerContainer, Subtitle } from './styles';

export const FeedbackBanner = () => (
  <Wrapper href="mailto:eclair.canonique@gmail.com">
    <BannerContainer>
      <Subtitle>
        Если у вас есть какие-то истории, идеи,
        <br />
        задумки, проекты или вопросы, связанные <br />
        с городом, его осмыслением, творчеством
        <br /> или историей, смело пишите нам! Сайт может <br />
        стать площадкой для их реализации.
      </Subtitle>
    </BannerContainer>
  </Wrapper>
);
