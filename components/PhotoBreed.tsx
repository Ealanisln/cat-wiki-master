import React, { Suspense } from "react";
import { BreedFull } from "@/interfaces";
import Image from "next/image";

interface CatCardProps {
    breed: BreedFull;
    coverPhoto?: string | null;
  }

const PhotoBreed: React.FC<CatCardProps> = ({ breed, coverPhoto}) => {
  const fallbackImage = "/public/cats/fallback.png";

  return (
    <div className="rounded-lg sm:row-span-1 row-span-2 justify-center">
      <Suspense fallback={<p> Loading... </p>}>
        <Image
          alt={`Breed ${breed.name}`}
          src={coverPhoto || fallbackImage}
          width={500}
          height={400}
          sizes="75vw"
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "25px",
          }}
        />
      </Suspense>
    </div>
  );
}

export default PhotoBreed;
