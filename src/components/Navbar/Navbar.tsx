import { Box } from "@chakra-ui/react";
import React from "react";
import { navbarStyles } from "./style";
import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";

export const Navbar = () => {
  return (
    <Box h="120px">
      <Box {...navbarStyles}>
        <DesktopNav />
        <MobileNav />
      </Box>
    </Box>
  );
};
