"use client";

import { Button, Flex } from "@chakra-ui/react";
import { usePagination } from "@mantine/hooks";
import { BreadCrumb } from "@src/components/BreadCrumb";
import { ProductCard } from "@src/components/ProductCard";
import { IBreadcrumbItem, IProduct } from "@src/components/model";
import React, { useState } from "react";

interface IProductProps {
  products: IProduct[];
  breadcrumbItems?: IBreadcrumbItem[];
}

const itemsPerPage = 10;

export const AllProducts = ({ products, breadcrumbItems }: IProductProps) => {
  const [visibleProducts, setVisibleProducts] = useState(
    products.slice(0, itemsPerPage)
  );

  const total = Math.ceil(products.length / itemsPerPage);

  const pagination = usePagination({
    total,
    initialPage: 1,
    onChange(page) {
      const start = (page - 1) * itemsPerPage;
      const end = start + itemsPerPage;
      setVisibleProducts(products.slice(start, end));
    },
  });

  return (
    <>
      <BreadCrumb items={breadcrumbItems} />

      <Flex
        flexWrap={"wrap"}
        mx={"auto"}
        w={{ base: "100%", lg: "90%" }}
        justify={{ base: "center", lg: "space-between" }}
      >
        {visibleProducts.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </Flex>

      {itemsPerPage < products.length && (
        <Flex
          justify="center"
          w={{ base: "100%", lg: "90%" }}
          mx="auto"
          py="2rem"
        >
          {pagination.range.map((range) =>
            range === "dots" ? (
              <Button
                borderWidth="1px"
                borderColor="brand.primary"
                color="brand.primary"
                bgColor="white"
                mx="1"
                key={range}
              >
                ...
              </Button>
            ) : (
              <Button
                onClick={() => pagination.setPage(range)}
                borderWidth="1px"
                borderColor="brand.primary"
                color={pagination.active === range ? "white" : "brand.primary"}
                bgColor={
                  pagination.active === range ? "brand.primary" : "white"
                }
                mx="1"
                key={range}
                _active={{ bgColor: "none" }}
                _hover={{ bgColor: "none" }}
              >
                {range}
              </Button>
            )
          )}
        </Flex>
      )}
    </>
  );
};
