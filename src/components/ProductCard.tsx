import {
  Box,
  Card,
  CardBody,
  Flex,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Rating } from "./Rating";
import { AddToCartButton } from "./Cart/AddToCartButton";
import { IProduct } from "./model";
import { getSubString } from "./helpers";
import { AddToWishlistButton } from "./AddToWishlistButton";
import Link from "next/link";

interface IProductCardProps {
  product: IProduct;
}

export const ProductCard = ({ product }: IProductCardProps) => {
  return (
    <div>
      <Card w="xs" m="0.5rem" pos="relative">
        <AddToWishlistButton product={product} />

        <CardBody>
          <Link href={`/products/${product.slug}`}>
            <Box
              bg={`center / contain no-repeat url(${product.mainImage})`}
              borderRadius="lg"
              boxSize="200px"
              mx="auto"
            />
          </Link>
          <Stack mt="6" spacing="3">
            <Flex justify={"space-between"} align={"center"}>
              <Link href={`/products/${product.slug}`}>
                <Heading size="sm">{getSubString(product.name, 20)}</Heading>
              </Link>
              <Stack
                flexDir={"row"}
                color={"brand.primaryDark"}
                fontWeight={"bold"}
              >
                <Text fontSize={"sm"}>$</Text>
                <Text fontSize={"lg"}>{product?.price}</Text>
              </Stack>
            </Flex>

            <Text>{getSubString(product?.description, 30)}</Text>

            <Rating rating={product?.rating} />

            <AddToCartButton product={product} />
          </Stack>
        </CardBody>
      </Card>
    </div>
  );
};
