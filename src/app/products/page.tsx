import React from "react";
import { AllProducts } from "@src/features/products";
import Hero from "@src/features/Hero/Hero";
import { client } from "@src/utils/sanity.client";
import { groq } from "next-sanity";
import { IProduct } from "@src/components/model";

// const getAllProductsQueries = `
//     *[_type == "product"] {
//         "id": _id,
//         name,
//         description,
//         price,
//         rating,
//         "slug": slug.current,
//         "mainImage": mainImage.asset->url,
//         category->{
//             name,
//             "id": _id,
//             "image": image.asset->url
//         },
//         "gallery": gallery[] {
//             caption,
//             "url": asset->url
//         }
//     }
// `;

const getAllProductsQueries: string = `
    *[_type == "product"] {
        "id": _id,
        name,
        description,
        price,   
        rating,
        "slug": slug.current,
        "mainImage": mainImage.asset->url,
    }
`;

const getProductsAsync = () => {
  return client.fetch(groq`${getAllProductsQueries}`);
};

export const revalidate = 60;

export default async function ProductsPage() {
  const products: IProduct[] = await getProductsAsync();

  return (
    <div>
      <Hero
        description="Affordability, Durability , Fast and Convenient Delivery , Free Shipping and more"
        imageUrl="/product1.jpg"
        btnLabel="View All Categries"
        btnLink="/categories"
        heading="Best and Quality Products"
      />

      <AllProducts products={products} />
    </div>
  );
}
