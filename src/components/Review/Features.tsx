import React from "react";
import styles from "./Features.module.css";

const Icon = ({ isExist }: { isExist: boolean }) =>
  isExist ? (
    <span className={styles.iconAllow} />
  ) : (
    <span className={styles.iconCross} />
  );

export const Features = ({
  features,
}: {
  features: Record<string, boolean>;
}) => (
  <div className={styles.features}>
    {Object.keys(features ?? {})?.map((key) => (
      <div key={key} className={styles.wrapper}>
        <Icon isExist={!!features[key]} />
        <span className={styles.title}>{key}</span>
      </div>
    ))}
  </div>
);
