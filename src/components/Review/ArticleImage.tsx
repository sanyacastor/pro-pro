import React from "react";
import styled from "styled-components";

const SliderImage = styled.div<{ $pl?: number; $mt?: number }>`
  margin-top: ${({ $mt }) => `${$mt ?? 0}px`};
  display: flex;
  flex-direction: column;
  img {
    width: 100%;
    height: auto;
  }
`;

const Caption = styled.span`
  font-family: "Lack";
  font-size: 14px;
  line-height: 120%;
  color: #5f5f5f;
  margin-top: 8px;
`;

export const ArticleImage = ({
  src,
  meta,
}: {
  src: string;
  meta?: string;
  alt?: string;
}) => {
  const substrings = meta?.split("{");
  const alt = substrings?.[0]?.trim() ?? "";
  const width = substrings?.[1]?.match(/w\s*:\s*(\d+)/)?.[1] ?? "800";
  const height = substrings?.[1]?.match(/h\s*:\s*(\d+)/)?.[1] ?? "400";
  const pl = substrings?.[1]?.match(/pl\s*:\s*(\d+)/)?.[1] ?? 0;
  const mt = substrings?.[1]?.match(/ml\s*:\s*(\d+)/)?.[1] ?? 0;

  return (
    <SliderImage $pl={Number(pl)} $mt={Number(mt)}>
      <img
        src={src}
        alt={alt}
        height={Number(height)}
        width={Number(width)}
      />
      <Caption>{alt}</Caption>
    </SliderImage>
  );
};
