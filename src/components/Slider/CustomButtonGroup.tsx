import React from "react";
import { MAX_ITEMS_PER_PAGE } from "./config";
import LeftArrowIcon from "../../elements/LeftArrowIcon";
import RightArrowIcon from "../../elements/RightArrowIcon";
import styles from "../../../styles/slider.module.scss";
interface Props {
  next: () => void;
  previous: () => void;
  goToSlide: () => void;
  carouselState?: any;
}
const ButtonGroup = (props: Props) => {
  const { next, previous, goToSlide, carouselState } = props;
  const { totalItems = 0 } = carouselState;

  return totalItems > MAX_ITEMS_PER_PAGE ? (
    <div className={styles.carouselButtonGroup}>
      <span onClick={() => previous()}>
        <LeftArrowIcon />
      </span>
      <span onClick={() => next()}>
        <RightArrowIcon />
      </span>
    </div>
  ) : (
    <></>
  );
};
export default ButtonGroup;
