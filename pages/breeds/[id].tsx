import { GetStaticProps, NextPage, GetStaticPaths } from "next";
import Image from "next/image";
import { BreedImage } from "../../interfaces";
import { getBreedInfo } from "../../lib/getBreedInfo";
import HorizontalRuleRoundedIcon from "@mui/icons-material/HorizontalRuleRounded";
import IconButton from "@mui/material/IconButton";

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
    <div className="w-full">
      <div className="mx-8 md:mx-8 lg:mx-24">
        <div className="flex">
          {breeds.map((breedImage, index) => (
            <div key={index} className="md:w-full p-4">
              <Image
                  src={breedImage.url}
                  width={300}
                  height={300}
                  alt={`Breed ${index}`}
                  className="rounded-3xl"
                />
              <div className="w-1/3 md:w-1/4">
                
              </div>
              <div className="md:w-3/4 p-4 md:pl-20">
                <div className=" text-3xl md:text-left font-semibold">
                  {breedNames.join(", ")}
                </div>
                <div className="py-6">
                  <div className="text-lg font-medium md:text-left pb-4">
                    {breedImage.breeds[0].description}
                  </div>
                  <div className="py-2 text-lg font-normal md:text-left">
                    <span className="font-bold">Temperament:</span>{" "}
                    {breedImage.breeds[0].temperament}
                  </div>
                  <div className="py-2 text-lg font-normal md:text-left">
                    <span className="font-bold">Origin:</span>{" "}
                    {breedImage.breeds[0].origin}
                  </div>
                  <div className="py-2 text-lg font-normal md:text-left">
                    <span className="font-bold">Life Span:</span>{" "}
                    {breedImage.breeds[0].life_span} years.
                  </div>
                  <div className="py-2 text-lg font-normal md:text-left">
                    <span className="font-bold">Adaptability:</span>
                    {Array.from({ length: 5 }, (_, index) => (
                      <span
                        key={index}
                        style={{
                          color:
                            index < numberOfColoredIcons ? "brown" : "gray",
                          fontSize: "inherit",
                          marginRight: "30px", // Optional: Add spacing between icons
                        }}
                      >
                        <IconButton size="large">
                          <HorizontalRuleRoundedIcon />
                        </IconButton>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

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
