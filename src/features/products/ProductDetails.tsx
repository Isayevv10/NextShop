"use client";

import React, { useContext, useState } from "react";
import {
  Box,
  Button,
  Divider,
  Grid,
  GridItem,
  Heading,
  Image,
  Stack,
  Text,
  Link,
  Flex,
} from "@chakra-ui/react";
import { AddToCartButton } from "@src/components/Cart/AddToCartButton";
import { AddToWishlistButton } from "@src/components/AddToWishlistButton";
import { BreadCrumb } from "@src/components/BreadCrumb";
import { Quatity } from "@src/components/Quantity";
import { Rating } from "@src/components/Rating";
import { getSubString } from "@src/components/helpers";
import { IBreadcrumbItem, IProduct } from "@src/components/model";
import { AppContext } from "@src/context/AppContext";

interface IProductsDetailsProps {
  product: IProduct;
}

const items: IBreadcrumbItem[] = [
  {
    name: "Products",
    link: "/products",
  },
  {
    name: "Categories",
    link: "/categories",
  },
];

export default function ProductDetails({ product }: IProductsDetailsProps) {
  const [quantity, setQuantity] = useState<number>(1);
  const { isAdd, addItem, resetItem } = useContext(AppContext);

  return (
    <>
      <BreadCrumb
        items={[
          ...items,
          {
            name: product.category?.name as string,
            link: `/categories/${product.category?.id}`,
          },
          {
            name: getSubString(product.name, 20) as string,
            link: `/products/${product.slug}`,
          },
        ]}
      />
      <Grid
        w={{ base: "100%", lg: "90%" }}
        gap={"20px"}
        mx={"auto"}
        p={"2rem"}
        templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(2, 1fr)" }}
      >
        <GridItem p={"1rem"} pos={"relative"}>
          <AddToWishlistButton product={product} />

          <Image src={product?.mainImage} mx={"auto"} alt="pic" />

          <Flex>
            {product.gallery?.length !== 0 &&
              product.gallery?.map((image, i) => (
                <Image
                  key={i}
                  src={image}
                  alt={product.name}
                  mx="auto"
                  boxSize="70px"
                  rounded="md"
                  shadow="sm"
                  borderWidth="1px"
                  borderColor="gray.100"
                />
              ))}
          </Flex>
        </GridItem>

        <GridItem p={"1rem"}>
          <Heading>{product.name}</Heading>
          <Text my={"1rem"}>{product.description}</Text>

          <Rating rating={product.rating} />

          <Text fontWeight={"bold"} fontSize={"2rem"}>
            $ {product.price}
          </Text>

          <Divider my="1rem" />

          <Quatity
            setQuantity={(_valueAsString, valueAsNumber) =>
              setQuantity(valueAsNumber)
            }
            disabled={isAdd("cart", product.id)}
          />
          <Divider my="1rem" />

          <Box>
            <Link href="/checkout">
              <Button
                variant="outline"
                bgColor="brand.primary"
                color="white"
                borderRadius="50px"
                size="sm"
                w="160px"
                mr="1rem"
                my="0.5rem"
                _hover={{ bgColor: "none" }}
                onClick={() => {
                  resetItem("checkout");
                  addItem("checkout", product, quantity);
                }}
              >
                Buy Now
              </Button>
            </Link>

            <AddToCartButton product={product} count={quantity} />
          </Box>

          <Stack py="2rem">
            <Box borderWidth={1} borderColor="gray.100" p="1rem">
              <Text fontWeight="bold">Free Deliver</Text>
              <Link textDecor="underline" color="gray.500">
                Enter Your postal Code for Delivery Availability
              </Link>
            </Box>

            <Box borderWidth={1} borderColor="gray.100" p="1rem">
              <Text fontWeight="bold">Return Delivery</Text>
              <Text color="gray.500">
                Free 30 Days Delivery Returns
                <Link textDecor={"underline"}> Details</Link>
              </Text>
            </Box>
          </Stack>
        </GridItem>
      </Grid>
    </>
  );
}
