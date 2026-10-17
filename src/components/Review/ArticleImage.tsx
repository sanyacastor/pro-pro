import React from "react";
import styles from "./ArticleImage.module.css";

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
  const pl = Number(substrings?.[1]?.match(/pl\s*:\s*(\d+)/)?.[1] ?? 0);
  const mt = Number(substrings?.[1]?.match(/ml\s*:\s*(\d+)/)?.[1] ?? 0);

  return (
    <div className={styles.sliderImage} style={{ marginTop: `${mt}px`, paddingLeft: `${pl}px` }}>
      <img src={src} alt={alt} height={Number(height)} width={Number(width)} />
      <span className={styles.caption}>{alt}</span>
    </div>
  );
};
