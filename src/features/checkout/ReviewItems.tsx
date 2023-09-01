"use client";

import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { formatPrice, getSubString } from "@src/components/helpers";
import { AppContext } from "@src/context/AppContext";
import React, { useContext } from "react";

export const ReviewItems = () => {
  const {
    state: { checkout },
  } = useContext(AppContext);

  return (
    <Card borderWidth={"1px"} shadow={"none"} borderColor={"gray.200"}>
      <CardHeader>
        <Heading size={"md"}>Review Items</Heading>
      </CardHeader>
      <CardBody>
        <Stack>
          {checkout.map((item) => (
            <Flex key={item.id} align={"center"} justify={"space-between"}>
              <Flex align={"center"}>
                <Image
                  src={item.mainImage}
                  boxSize="100px"
                  bgSize="contain"
                  alt="review"
                />
                <Box mx={"1rem"}>
                  <Text
                    fontWeight={"bold"}
                    fontSize={{ base: "sm", lg: "lg" }}
                    maxW={"500px"}
                  >
                    {item.name}
                  </Text>
                  <Text>{getSubString(item.description, 50)}</Text>
                </Box>
              </Flex>
              <Box textAlign={"right"}>
                <Text fontWeight={"bold"} fontSize={{ base: "md", lg: "lg" }}>
                  $ {formatPrice(item.price)}
                </Text>
                <Text fontSize={{ base: "sm", lg: "md" }}>
                  Quantity: {item.count}
                </Text>
              </Box>
            </Flex>
          ))}
        </Stack>
      </CardBody>
    </Card>
  );
};
