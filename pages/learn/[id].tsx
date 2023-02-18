import React, { Fragment } from "react";
import { Link } from "vcc-ui";
import CarCard from "../../src/components/CarCard";
import { CarItem } from "@/types/Car.model";
import cars from "../../public/api/cars.json";
import learnStyles from "../../styles/learn.module.scss";

interface Props {
  carItem: CarItem;
}

const LearnCar = (props: Props) => {
  const { carItem } = props;
  return (
    <Fragment>
      <div className={learnStyles.carInfo}>
        <CarCard showLinks={false} carItem={carItem}></CarCard>
        <Link href={"/"} arrow="left">
          {" "}
          Back To Home page
        </Link>
      </div>
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
export default LearnCar;
