import { breedApi } from "@/api";
import { BreedsList } from '@/interfaces';
import { GetStaticProps, NextPage } from "next";
import React, { useEffect, useState } from "react";
import { GetStaticPaths } from "next";
import { getBreedInfo } from "../../lib/getBreedInfo";
import CatCard from "@/components/CatCard";
import MorePhotos from "@/components/MorePhotos";

interface Props {
  breeds: BreedsList[];
}

const BreedPage: NextPage<Props> = ({ breeds }) => {
  const [photos, setPhotos] = useState<string[]>([]);
  const [coverPhoto, setCoverPhoto] = useState<string | null>(null); // Changed the state type to string | null

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
            
            // Set the cover photo to the first URL (if it exists)
            if (photoUrls.length > 0) {
              setCoverPhoto(photoUrls[0]);
            }
          }
        })
        .catch((error) => {
          console.error("Error fetching photos:", error);
        });
    }
  }, [breeds]);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5 lg:gap-6">
        {breeds[0] && breeds[0].breeds
          ? breeds[0].breeds.map((breed, index) => (
              <CatCard key={index} breed={breed} coverPhoto={coverPhoto} />
            ))
          : null}
      </div>
      <MorePhotos additionalPhotos={photos} />
    </div>
  );
};


// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    // Fetch breed data from the API
    const { data } = await breedApi.get<BreedsList[]>("/breeds");

    // Extract the breed IDs from the data
    const allBreedIds: string[] = data.map((breed) => breed.id);

    // Generate static paths
    const paths = allBreedIds.map((id) => ({
      params: { id },
    }));

    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    console.error("Error fetching data from the API:", error);
    return {
      paths: [],
      fallback: false,
    };
  }
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    if (!params || !params.id) {
      throw new Error("Invalid params");
    }

    const breedId = Array.isArray(params.id)
      ? params.id[0].toString()
      : params.id.toString();
    const breeds = await getBreedInfo(breedId);

    if (!breeds) {
      throw new Error(`Breed with id ${breedId} not found`);
    }

    return {
      props: {
        breeds: [breeds],
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

export default BreedPage;
