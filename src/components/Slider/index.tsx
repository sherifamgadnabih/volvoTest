import React, { Children, Fragment } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import responsive from "./config";
import useWindowSize from "../../hooks/useWindowSize";
import ButtonGroup from "./CustomButtonGroup";

const Slider = (props: any) => {
  const deviceType: string = useWindowSize();

  return (
    <Fragment>
      <Carousel
        swipeable={true}
        draggable={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        keyBoardControl={true}
        customTransition="smooth 500"
        transitionDuration={500}
        removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
        itemClass="carousel-item-padding-10-px"
        renderButtonGroupOutside={true}
        showDots={deviceType === "Desktop" ? false : true}
        slidesToSlide={1}
        containerClass="carousel-with-custom-dots"
        partialVisible
        infinite
        customButtonGroup={
          <ButtonGroup
            next={() => {}}
            previous={() => {}}
            goToSlide={() => {}}
          />
        }
      >
        {props.children}
      </Carousel>
    </Fragment>
  );
};
{
}

// #endregion

export default Slider;
