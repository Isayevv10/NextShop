import { ICategory } from "@src/components/model";
import Hero from "@src/features/Hero/Hero";
import AllCategories from "@src/features/categories";
import { client } from "@src/utils/sanity.client";
import { groq } from "next-sanity";
import React from "react";

const getAllCategoriesQueries = `
    *[_type == "category"] {
        "id": _id,
        name,
        "slug": slug.current,
        "image": image.asset->url 
    }
`;

const getCategoriesAsync = () => {
  return client.fetch(groq`${getAllCategoriesQueries}`);
};

export default async function CategoriesPage() {
  const categories: ICategory[] = await getCategoriesAsync();

  return (
    <>
      <Hero
        description="We've got all your favorite Categories"
        imageUrl="./product1.jpg"
        btnLabel="View All Products"
        btnLink="/products"
        heading="Products Categories"
      />

      <AllCategories categories={categories} />
    </>
  );
}
