"use client";

import { Box, Button, Card, Heading, Text, Image } from "@chakra-ui/react";
import React from "react";
import { heroCardStyles, heroImageStyles } from "./style";
import Link from "next/link";

interface IHeroProps {
  heading: string;
  description: string;
  imageUrl: string;
  btnLabel: string;
  btnLink: string;
}

export default function Hero({
  heading,
  description,
  imageUrl,
  btnLabel,
  btnLink,
}: IHeroProps) {
  return (
    <Card {...heroCardStyles}>
      <Box mx={"2rem"} w={{ base: "100%", lg: "50%" }}>
        <Heading size={{ base: "xl", lg: "2xl" }}>{heading}</Heading>
        <Text py="1rem">{description}</Text>
        <Link href={btnLink}>
          <Button variant={"outline"}>{btnLabel}</Button>
        </Link>
      </Box>

      <Box mx={"2rem"} w={{ base: "100%", lg: "50%" }} mt={"1rem"}>
        <Image src={imageUrl} {...heroImageStyles} alt="hero" />
      </Box>
    </Card>
  );
}
