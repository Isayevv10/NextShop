"use client";

import { Button } from "@chakra-ui/react";
import { AppContext } from "@src/context/AppContext";
import { IProduct } from "./model";
import React, { useContext } from "react";
import { BsHeart, BsHeartFill } from "react-icons/bs";

interface IAddToCartButtonProps {
  product: IProduct;
  count?: number;
}

export const AddToWishlistButton = ({
  product,
  count,
}: IAddToCartButtonProps) => {
  const { addItem, removeItem, isAdd } = useContext(AppContext);

  return (
    <>
      {isAdd("wishlist", product.id) ? (
        <Button
          variant="outline"
          borderColor="gray.200"
          color="gray.500"
          borderRadius="50px"
          size="sm"
          w="150px"
          onClick={() => removeItem("wishlist", product.id)}
        >
          <BsHeartFill />
        </Button>
      ) : (
        <Button
          variant="outline"
          borderColor="brand.primary"
          color="brand.primary"
          borderRadius="50px"
          size="sm"
          w="150px"
          onClick={() => addItem("wishlist", product, count)}
        >
          <BsHeart />
        </Button>
      )}
    </>
  );
};
