"use client";

import {
  Box,
  Card,
  CardBody,
  Grid,
  GridItem,
  Heading,
  Image,
} from "@chakra-ui/react";
import { SectionHeading } from "@src/components/SectionHeading";
import { ICategory } from "@src/components/model";
import React from "react";

interface ITopCategoriesProps {
  categories: ICategory[];
}

export const TopCategories = ({ categories }: ITopCategoriesProps) => {
  return (
    <Box w={{ base: "100%", lg: "90%" }} mx="auto" py="3rem" px="2rem">
      <SectionHeading title="Show Our Top Categories" />

      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          xl: "repeat(4, 1fr)",
        }}
        gap={4}
      >
        {categories.map((category) => {
          return (
            <GridItem key={category.id}>
              <TopCategoryCard category={category} />
            </GridItem>
          );
        })}
      </Grid>
    </Box>
  );
};

interface ITopCategoryCardProps {
  category: ICategory;
}

const TopCategoryCard = ({ category }: ITopCategoryCardProps) => {
  return (
    <Card
      direction="row"
      align="center"
      overflow="hidden"
      variant="outline"
      w="100%"
      h="100%"
      p="10px"
      _hover={{ cursor: "pointer", bgColor: "gray.100" }}
    >
      <Image src={category.image} alt={category.slug} w={100} h={100} />

      <CardBody>
        <Heading size={{ base: "sm", lg: "md" }}>{category.name}</Heading>
      </CardBody>
    </Card>
  );
};
