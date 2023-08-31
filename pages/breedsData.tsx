import { NextPage, GetStaticProps } from "next";
import { breedApi } from "../api";
import { SmallBreed, BreedListResponse } from "@/interfaces";
import { BreedCard } from "@/components/Breed";

interface Props {
  breeds: SmallBreed[]; // Assuming Breed is the correct type for each item
}

const BreedsPage: NextPage<Props> = ({ breeds }) => {
  if (!breeds) {
    return <div>Loading...</div>; // Handle loading state
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {breeds.map((breed) => (
        <BreedCard key={breed.id} breed={breed} />
      ))}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const response = await breedApi.get<BreedListResponse[]>("/breeds");

  const breeds = response.data.map((breed, index) => ({
    ...breed,
    number: index + 1,
  }));

  return {
    props: {
      breeds,
    },
  };
};

export default BreedsPage;
