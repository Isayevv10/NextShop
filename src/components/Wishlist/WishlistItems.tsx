import { Button, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import { AppContext } from "@src/context/AppContext";
import { getSubString } from "../helpers";
import { IItem } from "../model";
import Link from "next/link";
import { useContext } from "react";
import { BsCart, BsCartX, BsTrash } from "react-icons/bs";

interface WishlistItemProps {
  item: IItem;
}

export const WishlistItem = ({ item }: WishlistItemProps) => {
  const { addItem, removeItem, isAdd } = useContext(AppContext);

  return (
    <Grid
      alignItems="center"
      templateColumns="repeat(8, 1fr)"
      borderBottomWidth="1px"
      borderBottomColor="gray.200"
      my="2"
      py="1"
    >
      <GridItem>
        <Link href={`/products/${item.slug}`}>
          <Image
            src={item.mainImage}
            boxSize="20px"
            rounded="full"
            borderWidth="1px"
            borderColor="gray.300"
            alt="wishImg"
          />
        </Link>
      </GridItem>
      <GridItem colSpan={4}>
        <Link href={`/products/${item.slug}`}>
          <Text fontSize="sm" title={item.name}>
            {getSubString(item.name, 17)}
          </Text>
        </Link>
      </GridItem>

      <GridItem>
        <Text fontWeight="bold" fontSize="xs">
          $ {item.price}
        </Text>
      </GridItem>

      <GridItem textAlign="right">
        {isAdd("cart", item.id) ? (
          <Button
            size="xs"
            bgColor="white"
            borderWidth="1px"
            borderColor="gray.300"
            color="gray.500"
            title="Remove from Cart"
            onClick={() => removeItem("cart", item.id)}
          >
            <BsCartX />
          </Button>
        ) : (
          <Button
            size="xs"
            bgColor="white"
            borderWidth="1px"
            borderColor="brand.primary"
            color="brand.primary"
            title="Add to Cart"
            onClick={() => addItem("cart", item)}
          >
            <BsCart />
          </Button>
        )}
      </GridItem>

      <GridItem textAlign="right">
        <Button
          variant="ghost"
          colorScheme="red"
          size="xs"
          onClick={() => removeItem("wishlist", item.id)}
        >
          <BsTrash />
        </Button>
      </GridItem>
    </Grid>
  );
};
