import React from "react";
import LeftLogo from "../../docs/chevron-circled.svg";
import styles from "../../styles/icons.module.scss";
const LeftArrowIcon = () => {
  return (
    <span className={styles.LeftArrowIcon}>
      <LeftLogo />
    </span>
  );
};
export default LeftArrowIcon;
