import { CardProps, ImageProps } from "@chakra-ui/react";
import { Box } from "framer-motion";

export const heroCardStyles: CardProps = {
  direction: { base: "column", lg: "row" },
  align: "center",
  justify: "center",
  overflow: "hidder",
  variant: "outline",
  mx: "auto",
  shadow: "sm",
  p: "2rem",
  mb: "2rem",
  w: { base: "100%", lg: "90%" },
};

export const heroImageStyles: ImageProps = {
  objectFit: "cover",
  maxW: "100%",
  rounded: "mg",
};
