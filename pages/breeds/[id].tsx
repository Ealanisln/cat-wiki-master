// BreedPage.tsx
import React from "react";
import { GetStaticProps, NextPage, GetStaticPaths } from "next";
import { BreedImage } from "../../interfaces";
import { getBreedInfo } from "../../lib/getBreedInfo";
import CatCard from "@/components/CatCard"; // Import the CatCard component

interface Props {
  breeds: BreedImage[];
}

const BreedPage: NextPage<Props> = ({ breeds }) => {
  if (!breeds || !breeds[0] || !breeds[0].breeds) {
    return <div>Loading...</div>; // Handle loading state
  }

  const breedNames: string[] = breeds[0].breeds.map(
    (breedsData) => breedsData.name
  );

  const adaptabilityValue = breeds[0].breeds[0].adaptability;
  const numberOfColoredIcons = Math.min(adaptabilityValue, 5); // Ensure it's within 1 to 5 range

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5 lg:gap-6">
      {breeds.map((breedImage, index) => (
        <CatCard key={index} breedImage={breedImage} index={index} />
      ))}
    </div>
  );
};

// Rest of your code remains unchanged

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const allCatBreeds = [...Array(66)].map((value, index) => `${index + 1}`);

  return {
    paths: allCatBreeds.map((id) => ({
      params: { id },
    })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    if (!params || !params.id) {
      throw new Error("Invalid params");
    }

    const breedId = Array.isArray(params.id) ? params.id[0] : params.id; // Convert to string if it's an array
    const breeds = await getBreedInfo(breedId);

    if (!breeds) {
      throw new Error(`Breed with id ${breedId} not found`);
    }

    return {
      props: {
        breeds: [breeds], // Wrapping the breed data in an array for consistency
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

export default BreedPage;
