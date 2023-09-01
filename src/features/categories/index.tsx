"use client";

import { Card, CardBody, Grid, Heading, Image } from "@chakra-ui/react";
import { ICategory } from "@src/components/model";
import Link from "next/link";
import React from "react";

interface AllCategoriesProps {
  categories: ICategory[];
}

export default function AllCategories({ categories }: AllCategoriesProps) {
  return (
    <>
      <Grid
        w={{ base: "100%", lg: "90%" }}
        gap={"20px"}
        mx={"auto"}
        py={"2rem"}
        templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(2, 1fr)" }}
      >
        {categories.map((item) => {
          return <CategoryCard key={item.id} category={item} />;
        })}
      </Grid>
    </>
  );
}

interface ICategoryCardProps {
  category: ICategory;
}

const CategoryCard = ({ category }: ICategoryCardProps) => {
  return (
    <Link href={`/categories/${category.id}`}>
      <Card
        direction={"column"}
        align={"center"}
        variant={"outline"}
        overflow={"hidden"}
        w={"100%"}
        h={"100%"}
        _hover={{ bgColor: "gray.100", cursor: "pointer" }}
      >
        <Image
          src={category.image}
          width={200}
          height={200}
          alt={category.name}
        />

        <CardBody>
          <Heading size={{ base: "sm", lg: "md" }}>{category.name}</Heading>
        </CardBody>
      </Card>
    </Link>
  );
};
