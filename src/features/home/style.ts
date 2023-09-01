import {
  BoxProps,
  ButtonProps,
  FlexProps,
  HeadingProps,
  TextProps,
} from "@chakra-ui/react";

export const bannerStyle: FlexProps = {
  justify: "center",
  align: "center",
  gap: "2",
  mx: "auto",
  p: "2rem",
  flexDir: { base: "column", lg: "row" },
  w: { base: "100%", lg: "90%" },
};

export const bannerHeadingStyles: HeadingProps = {
  lineHeight: "4rem",
  color: "brand.primary",
  size: { base: "xl", lg: "3xl" },
};

export const bannerTextStyles: TextProps = {
  py: "1rem",
  maxW: "600px",
  fontSize: { base: "md", lg: "lg" },
};

export const bannerButtonStyles: ButtonProps = {
  rounded: "full",
  minW: "10rem",
  bgColor: "brand.primary",
  color: "white",
  _hover: { bgColor: "brand.primaryDark" },
};

export const bannerImageStyles: BoxProps = {
  mx: "2rem",
  w: { base: "300px", lg: "600px" },
  h: { base: "300px", lg: "500px" },
  bg: "center / cover no-repeat url(mockup.svg)",
};
