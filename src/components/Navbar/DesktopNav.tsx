import { Flex, Stack, Box } from "@chakra-ui/react";
import React from "react";
import {
  cartSectionStyles,
  desktopNavStyles,
  logoSectionStyles,
} from "./style";
import { AppLogo } from "../AppLogo";
import { navItems } from "../helpers";
import Link from "next/link";
import { Search } from "../Search/Search";
import { Wishlist } from "../Wishlist/Wishlist";
import { Cart } from "../Cart/Cart";

export const DesktopNav = () => {
  return (
    <Flex {...desktopNavStyles}>
      <Stack {...logoSectionStyles}>
        <Box>
          <AppLogo />
        </Box>
        {navItems.map((item) => (
          <Box key={item.label}>
            <Link href={item.href}>{item.label}</Link>
          </Box>
        ))}
        <Box>
          <Search />
        </Box>
      </Stack>
      <Stack {...cartSectionStyles}>
        <Box>
          <Wishlist />
        </Box>
        <Box>
          <Cart />
        </Box>
      </Stack>
    </Flex>
  );
};
