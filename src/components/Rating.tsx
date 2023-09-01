import { Flex, Text } from "@chakra-ui/react";
import { colors } from "@src/app/theme";
import React from "react";
import ReactStars from "react-stars";
import { IRating } from "./model";

interface IRatingProps {
  rating: IRating;
}

export const Rating = ({ rating }: IRatingProps) => {
  return (
    <Flex>
      <ReactStars
        count={5}
        value={rating.rate}
        edit={false}
        half={true}
        color2={colors.brand.primary}
      />
      {"  "}
      <Text>{rating.count}</Text>
    </Flex>
  );
};
