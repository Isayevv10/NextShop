import { IProduct } from "@src/components/model";
import ProductDetails from "@src/features/products/ProductDetails";
import { client } from "@src/utils/sanity.client";
import { groq } from "next-sanity";
import React from "react";

const query: string = groq`
    *[_type == "product" && slug.current == $slug][0] {
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

type Props = {
  params: {
    slug: string;
  };
};

export default async function ProductDetailPage({ params: { slug } }: Props) {
  const product: IProduct = await client.fetch(query, { slug });

  return (
    <>
      <ProductDetails product={product} />
    </>
  );
}
