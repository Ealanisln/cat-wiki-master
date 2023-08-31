import { FC } from "react";
import { useRouter } from "next/router";
import { SmallBreed } from "@/interfaces";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Props {
  breed: SmallBreed;
}

export const BreedCard: FC<Props> = ({ breed }) => {
  const router = useRouter();
  const onClick = () => {
    router.push(`/breeds/${breed.name}`);
  };

  return (
    <Card key={breed.id}>
      <div className="p-4 bg-white rounded">
        <CardHeader>
          <CardTitle onClick= {onClick }>{breed.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            {breed.description} - {breed.id}
          </CardDescription>
        </CardContent>
      </div>
    </Card>
  );
};
