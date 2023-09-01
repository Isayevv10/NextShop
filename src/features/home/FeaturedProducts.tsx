"use client";

import React, { CSSProperties, FC } from "react";
import { ProductCard } from "@src/components/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { SwiperOptions } from "swiper/types";
import { Navigation, Autoplay } from "swiper/modules";
import { SwiperNavBtns } from "@src/components/SwiperNavBtns";
import { SectionHeading } from "@src/components/SectionHeading";
import { Box } from "@chakra-ui/react";
import { IProduct } from "@src/components/model";

const slideStyles: CSSProperties = {
  maxWidth: "350px",
  boxSizing: "border-box",
};

interface FeaturedProductsProps {
  title: string;
  products: IProduct[];
}

export const FeaturedProducts: FC<FeaturedProductsProps> = ({
  title,
  products,
}) => {
  const swiperSettings: SwiperOptions = {
    modules: [Navigation, Autoplay],
    slidesPerView: "auto",
    speed: 1000,
    spaceBetween: 10,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  };

  return (
    <div>
      <Box w={{ base: "100%", lg: "90%" }} mx={"auto"} p="2rem">
        <SectionHeading title={title} />

        <Swiper {...swiperSettings} style={{ width: "100%", height: "100%" }}>
          {products?.map((product) => {
            return (
              <SwiperSlide style={slideStyles} key={product.id}>
                <ProductCard product={product} />
              </SwiperSlide>
            );
          })}
          <SwiperNavBtns />
        </Swiper>
      </Box>
    </div>
  );
};
