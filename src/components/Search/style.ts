import { BoxProps, InputProps } from "@chakra-ui/react";

export const searchInputStyles: InputProps = {
  type: "text",
  placeholder: "Search...",
  focusBorderColor: "brand.primaryLight",
  borderWidth: "1px solid",
  borderColor: "gray.400",
};

export const wrapperContainerStyles: BoxProps = {
  pos: "relative",
  w: { base: "100%", lg: "32rem" },
};

export const dropDownStyles: BoxProps = {
  pos: "absolute",
  bg: "white",
  shadow: "md",
  padding: "0.5rem",
  w: "100%",
  maxH: "500px",
  overflowY: "auto",
  boxSizing: "border-box",
};
