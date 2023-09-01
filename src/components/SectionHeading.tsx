import { Heading } from "@chakra-ui/react";
import React, { FC } from "react";

interface ISectionHeadingProps {
  title: string;
}

export const SectionHeading: FC<ISectionHeadingProps> = ({ title }) => {
  return (
    <Heading size="md" my="1.5rem">
      {title}
    </Heading>
  );
};
