"use client";

import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import {
  bannerButtonStyles,
  bannerHeadingStyles,
  bannerImageStyles,
  bannerStyle,
  bannerTextStyles,
} from "./style";
import Link from "next/link";

export const Banner = () => {
  return (
    <Flex {...bannerStyle}>
      <Box w={{ base: "100%", lg: "50%" }}>
        <Heading {...bannerHeadingStyles}>
          Online Shopping <br /> Made Easy
        </Heading>
        <Text {...bannerTextStyles}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          nostrum nulla explicabo aspernatur. Lorem ipsum dolor sit amet. Lorem
          ipsum dolor, sit amet consectetur adipisicing.
        </Text>
        <Link href="/products">
          <Button {...bannerButtonStyles}>Show More</Button>
        </Link>
      </Box>
      <Box w={{ base: "100%", lg: "50%" }}>
        <Box {...bannerImageStyles} />
      </Box>
    </Flex>
  );
};
