import TopSearch from "@/components/TopSearch";
import Hero from "@/components/Hero";
import Why from "@/components/Why";
import { NextPage, GetStaticProps } from "next";
import { breedApi } from "@/api";
import { BreedsList } from "@/interfaces";

const Home: NextPage<BreedsList> = ({breeds}) => {

  return (
    <>
      <Hero />
      <TopSearch />
      <Why />
    </>
  );
};

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await breedApi.get<BreedsList[]>("/breeds"); 

  const breeds: BreedsList[] = data.map((breed) => breed);

  return {
    props: {
      breeds,
    },
  };
};



export default Home;
