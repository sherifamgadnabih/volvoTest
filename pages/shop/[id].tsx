import React, { Fragment } from "react";

import CarCard from "../../src/components/CarCard";
import { CarItem } from "@/types/Car.model";
import { View, Link } from "vcc-ui";
import cars from "../../public/api/cars.json";
import shopStyles from "../../styles/shop.module.scss";
interface Props {
  carItem: CarItem;
}

const ShopCar = (props: Props) => {
  const { carItem } = props;
  return (
    <Fragment>
      <div className={shopStyles.carInfo}>
        <CarCard showLinks={false} carItem={carItem}></CarCard>
      </div>
      <Link href={`/`} arrow="left">
        Back To Home page
      </Link>
    </Fragment>
  );
};
export const getServerSideProps = async (props: any) => {
  const { params } = props;
  const car = cars.find((carItem: CarItem) => carItem.id === params.id);
  return {
    props: {
      carItem: car,
    },
  };
};
export default ShopCar;
