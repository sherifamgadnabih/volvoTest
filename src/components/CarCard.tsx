import React, { Fragment, useState, useEffect } from "react";
import Image from "next/image";
import { Link, Spacer, Text, View, Block } from "vcc-ui";
import { CarItem } from "@/types/Car.model";
interface CardProps {
  carItem: CarItem;
  showLinks: boolean;
}
const CarCard = (props: CardProps) => {
  const { carItem, showLinks } = props;
  const [hasMounted, setHasMounted] = useState<boolean>(false);
  useEffect(() => setHasMounted(true), []); // make sure the component has mounted to avoid the hydration problem in react
  const { imageUrl, modelName, bodyType, id, modelType } = carItem;
  return hasMounted ? (
    <Fragment>
      <View
        padding={2}
        marginBottom={2}
        marginTop={2}
        extend={{ textAlign: "start" }}
        data-testid={`pcard-${id}`}
      >
        <Text
          as="h4"
          variant="kelly"
          subStyle="emphasis"
          extend={{ color: "#8c8c8c" }}
        >
          {bodyType}
        </Text>
        <View
          direction={{ default: "column", fromL: "row" }}
          alignItems={{ default: "start", fromM: "left" }}
        >
          <Text
            as="h5"
            variant="hillary"
            subStyle="emphasis"
            extend={{ marginRight: 10 }}
          >
            {modelName}
          </Text>
          <Block extend={{ display: "block" }}>
            <Text variant="kelly" extend={{ color: "#8c8c8c", padding: "2em" }}>
              {modelType}
            </Text>
          </Block>
        </View>
        <Spacer />
        <Image
          width={320}
          height={240}
          src={imageUrl}
          layout="intrinsic"
          priority
          alt={`${modelName} - ${modelType}`}
        />
        {showLinks && (
          <View direction="row" justifyContent="center">
            <Link href={`/learn/${id}`} arrow="right">
              Learn
            </Link>
            <Spacer />
            <Link href={`/shop/${id}`} arrow="right">
              Shop
            </Link>
          </View>
        )}
      </View>

      <Spacer />
      <Spacer />
    </Fragment>
  ) : (
    <></>
  );
};
export default CarCard;
