import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { AppLogo } from "../AppLogo";
import { mobileNavContainerStyles, mobileSearchWrapper } from "./style";
import { Search } from "../Search/Search";
import { MobileNavMenu } from "./MobileNavMenu";
import { Wishlist } from "../Wishlist/Wishlist";
import { Cart } from "../Cart/Cart";

export const MobileNav = () => {
  return (
    <>
      <Flex {...mobileNavContainerStyles}>
        <Box>
          <MobileNavMenu />
        </Box>
        <AppLogo />
        <Stack direction="row" spacing={1}>
          <Wishlist />
          <Cart />
        </Stack>
      </Flex>

      <Box {...mobileSearchWrapper}>
        <Search />
      </Box>
    </>
  );
};
