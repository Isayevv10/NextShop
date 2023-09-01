import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Tag,
  Text,
  useOutsideClick,
} from "@chakra-ui/react";
import {
  dropDownStyles,
  searchInputStyles,
  wrapperContainerStyles,
} from "./style";
import { SearchIcon } from "@chakra-ui/icons";
import { IProduct } from "../model";
import { client } from "@src/utils/sanity.client";
import { groq } from "next-sanity";
import Link from "next/link";

const query: string = groq`
    *[_type == "product" && (name match $searchText || description match $searchText) ] {
      ...,
      "id": _id,
      "slug": slug.current,
        "mainImage": mainImage.asset->url,
        category->{
            name,
            "id": _id,
            "image": image.asset->url
        },
        "gallery": gallery[].asset->url
    }
`;

export const Search = () => {
  const ref = useRef<any>();

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>("");
  const [products, setProducts] = useState<IProduct[] | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useOutsideClick({
    ref,
    handler: () => {
      setIsModalOpen(false);
      setProducts([]);
    },
  });

  const fetchProducts = async () => {
    setIsLoading(true);

    const products: IProduct[] = await client.fetch(query, {
      searchText: `*${searchText}*`,
    });

    setIsLoading(false);
    setProducts(products);
  };

  useEffect(() => {
    const timeout: number = window.setTimeout(() => {
      if (searchText.trim().length >= 3) {
        fetchProducts();
      }
    }, 1300);

    return () => clearTimeout(timeout);
  }, [searchText]);

  return (
    <div>
      <Box ref={ref} {...wrapperContainerStyles}>
        <InputGroup size="sm" w={{ base: "100%", sm: "32rem" }}>
          <InputLeftElement pointerEvents="none">
            <SearchIcon color="gray.400" />
          </InputLeftElement>
          <Input
            type="text"
            placeholder="Search..."
            value={searchText}
            onClick={() => setIsModalOpen(true)}
            onChange={(e) => setSearchText(e.target.value)}
            {...searchInputStyles}
          />
        </InputGroup>

        {isModalOpen && (
          <Box {...dropDownStyles}>
            {products?.length === 0 ? (
              isLoading ? (
                <>Loading...</>
              ) : (
                <>No Products Found</>
              )
            ) : (
              <SearchedProductsList products={products} />
            )}
          </Box>
        )}
      </Box>
    </div>
  );
};

interface SearchedProductsListProps {
  products?: IProduct[];
}

const SearchedProductsList = ({ products }: SearchedProductsListProps) => {
  return (
    <>
      {products?.map((product) => (
        <Link key={product.id} href={`/products/${product.slug}`}>
          <Box
            borderBottomWidth="1px"
            borderBottomColor="gray.200"
            p="2"
            _hover={{ bgColor: "gray.100" }}
          >
            <Flex align="center">
              <Image
                alt={product.name}
                src={product.mainImage}
                boxSize="24px"
                mr="10px"
              />
              <Text>{product.name}</Text>
            </Flex>
            <Flex justify="flex-end">
              <Tag size="sm">{product.category?.name}</Tag>
            </Flex>
          </Box>
        </Link>
      ))}
    </>
  );
};
