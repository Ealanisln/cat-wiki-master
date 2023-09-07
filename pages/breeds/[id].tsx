// BreedPage.tsx
import React, { useEffect, useState } from "react";
import { GetStaticProps, NextPage, GetStaticPaths } from "next";
import Image from 'next/image';
import { BreedImage } from "../../interfaces";
import { getBreedInfo } from "../../lib/getBreedInfo";
import CatCard from "@/components/CatCard"; 
import MorePhotos from "@/components/MorePhotos"; 

interface Props {
  breeds: BreedImage[];
}

const BreedPage: NextPage<Props> = ({ breeds }) => {
  const [photos, setPhotos] = useState<string[]>([]);

  useEffect(() => {
    if (breeds && breeds[0] && breeds[0].breeds) {
      const breedId = breeds[0].breeds[0].id; // Assuming you want to fetch photos for the first breed
      // Make an API request to fetch photos for the breed
      fetch(`/api/photos?breedId=${breedId}`)
        .then((response) => response.json())
        .then((data) => {
          // Assuming the API response contains an array of photo objects
          if (Array.isArray(data)) {
            const photoUrls = data.map((photo) => photo.url);
            setPhotos(photoUrls);
          }
        })
        .catch((error) => {
          console.error("Error fetching photos:", error);
        });
    }
  }, [breeds]);

  console.log(breeds);

  const breedNames: string[] = breeds[0].breeds.map(
    (breedsData) => breedsData.name
  );

  console.log(photos);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5 lg:gap-6">
        {breeds.map((breedImage, index) => (
          <CatCard key={index} breedImage={breedImage} index={index} />
        ))}
      </div>
      <MorePhotos additionalPhotos={photos} />
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
