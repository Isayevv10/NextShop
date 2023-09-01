import { IFeaturedItems } from "@src/components/model";
import { Banner } from "@src/features/home/Banner";
import { FeaturedProducts } from "@src/features/home/FeaturedProducts";
import { TopCategories } from "@src/features/home/TopCategories";
import { client } from "@src/utils/sanity.client";
import { groq } from "next-sanity";

const getAllFeaturedItemsQueries = `
    *[_type == "featuredProductsAndCategories"]{
        "topCategories": topCategories[]->{
            "id": _id,
            name,
            "slug": slug.current,
            "image": image.asset->url,
        },
        "bestDeals": bestDeals[]->{
            "id": _id,
            name,
            description,
            price,
            "slug": slug.current,
            rating,
            "mainImage": mainImage.asset->url,
        },
        "trendingProducts": trendingProducts[]->{
            "id": _id,
            name,
            description,
            price,
            "slug": slug.current,
            rating,
            "mainImage": mainImage.asset->url,
        },
        "mostsellingProducts": mostsellingProducts[]->{
            "id": _id,
            name,
            description,
            price,
            "slug": slug.current,
            rating,
            "mainImage": mainImage.asset->url,
        }
    }
`;

const getFeaturedItemsAsync = () => {
  return client.fetch(groq`${getAllFeaturedItemsQueries}`);
};

export const revalidate = 60;

export default async function Home() {
  const featuredItems: IFeaturedItems[] = await getFeaturedItemsAsync();

  return (
    <main>
      <Banner />
      <TopCategories categories={featuredItems[0].topCategories} />
      <FeaturedProducts
        title="Best Deals For You"
        products={featuredItems[0].bestDeals}
      />
      <FeaturedProducts
        title="Most Selling Products"
        products={featuredItems[0].mostSellingProducts}
      />
      <FeaturedProducts
        title="Trending Products"
        products={featuredItems[0].trendingProducts}
      />
    </main>
  );
}
