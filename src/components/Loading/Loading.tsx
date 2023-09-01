"use client";
import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

export const Loading = () => {
  return (
    <Flex
      minH="calc(100vh - 150px)"
      justify="center"
      align="center"
      flexDir="column"
    >
      <Image
        src={"/loading-cart.gif"}
        alt="loading cart"
        width={200}
        height={200}
      />
      <Text>Loading...</Text>
    </Flex>
  );
};
