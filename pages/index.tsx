import TopSearch from "@/components/TopSearch";
import Hero from "@/components/Hero";
import Why from "@/components/Why";
import { NextPage } from "next";
import { BreedsList } from "@/interfaces";

const Home: NextPage<BreedsList> = () => {

  return (
    <>
      <Hero />
      <TopSearch />
      <Why />
    </>
  );
};


export default Home;
