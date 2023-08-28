import { NextPage, GetStaticProps } from "next";
import { breedApi } from "../api";
import Image from "next/Image";
import { BreedResponse } from "@/lib/interface";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Props {
  breeds: BreedResponse[]; // Assuming Breed is the correct type for each item
}

const BreedsPage: NextPage<Props> = ({ breeds }) => {
  if (!breeds) {
    return <div>Loading...</div>; // Handle loading state
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {breeds.map((breed) => (
        <Card key={breed.id}>
          <div className="p-4 bg-white rounded">
            <CardHeader>
              <CardTitle>{breed.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{breed.description} - 
              {breed.reference_image_id}</CardDescription>
            </CardContent>
          </div>
        </Card>
      ))}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const response = await breedApi.get<BreedResponse[]>("/breeds");

  const breeds = response.data.map((breed, index) => ({
    ...breed,
    id: index + 1,
    name: breed.name,
    origin: breed.origin,
  }));

  console.log(breeds);

  return {
    props: {
      breeds,
    },
  };
};

export default BreedsPage;
