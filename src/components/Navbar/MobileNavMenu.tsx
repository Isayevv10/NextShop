import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Input,
  useDisclosure,
} from "@chakra-ui/react";
import { VscListFlat } from "react-icons/vsc";
import React from "react";
import { AppLogo } from "../AppLogo";
import { navItems } from "../helpers";
import Link from "next/link";

export const MobileNavMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef: any = React.useRef();

  return (
    <>
      <Button ref={btnRef} onClick={onOpen}>
        <VscListFlat />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <AppLogo />
          </DrawerHeader>

          <DrawerBody>
            {navItems.map((item, i) => (
              <Link href={item.href} key={i}>
                <Box
                  p={"0.5rem"}
                  _hover={{ bgColor: "brand.primaryLight", color: "white" }}
                >
                  {item.label}
                </Box>
              </Link>
            ))}
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
