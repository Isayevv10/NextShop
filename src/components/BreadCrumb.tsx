"use client";

import React from "react";
import { IBreadcrumbItem } from "./model";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Text,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

interface IBreadCrumbProps {
  items?: IBreadcrumbItem[];
}

export const BreadCrumb = ({ items = [] }: IBreadCrumbProps) => {
  return (
    <>
      {items.length > 0 && (
        <Breadcrumb
          spacing="8px"
          w={{ base: "100%", lg: "90%" }}
          separator={<ChevronRightIcon color={"gray.500"} />}
          py={"2rem"}
          px={"1rem"}
          mx={"auto"}
          fontSize={{ base: "xs", md: "md" }}
        >
          {items?.map((item, index) =>
            index !== items.length - 1 ? (
              <BreadcrumbItem key={index}>
                <BreadcrumbLink href={item.link}>{item.name}</BreadcrumbLink>
              </BreadcrumbItem>
            ) : (
              <BreadcrumbItem key={index}>
                <Text color="gray.500">{item.name}</Text>
              </BreadcrumbItem>
            )
          )}
        </Breadcrumb>
      )}
    </>
  );
};
