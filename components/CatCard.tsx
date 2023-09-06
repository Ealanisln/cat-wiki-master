// CatCard.tsx
import React from "react";
import Image from "next/image";
import { BreedImage } from "../interfaces";
import Dash from "../public/images/dash.svg";
import DashGray from "../public/images/dash-gray.svg";

interface CatCardProps {
  breedImage: BreedImage;
  index: number;
}

const CatCard: React.FC<CatCardProps> = ({ breedImage, index }) => {
  return (
    <>
      <div className="rounded-lg sm:row-span-1 row-span-2">
        <Image
          alt={`Breed ${index}`}
          src={breedImage.url}
          width={700}
          height={475}
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "25px",
          }}
        />
      </div>
      <div className="text-lg font-semibold p-4 text-left">
        <div className="text-3xl md:text-left pb-6 pl-8">
          {breedImage.breeds[0].name}
        </div>
        <div className="text-lg font-medium md:text-left px-8 pb-4">
          {breedImage.breeds[0].description}
        </div>
        <div className="py-2 text-md font-normal md:text-left px-8 pb-4">
          <span className="font-bold">Temperament:</span>{" "}
          {breedImage.breeds[0].temperament}
        </div>
        <div className="py-2 text-md font-normal md:text-left px-8 pb-4">
          <span className="font-bold">Origin:</span>{" "}
          {breedImage.breeds[0].origin}
        </div>
        <div className="py-2 text-md font-normal md:text-left px-8 pb-4">
          <span className="font-bold">Life Span:</span>{" "}
          {breedImage.breeds[0].life_span} years.
        </div>
        <div className="py-2 text-md font-normal md:text-left px-8 pb-4 flex flex-row">
          <span className="font-bold">Adaptability:</span>{" "}
          {Array.from({ length: 5 }, (_, index) => (
            <div className="flex justify-center items-center">
            <div key={index} className="pl-2">
              {index < breedImage.breeds[0].adaptability ? (
                <Image
                  src={Dash}
                  alt={`Adaptability Icon ${index + 1}`}
                  width={80}
                  height={12}
                  sizes="100vw"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
              ) : (
                <Image
                  src={DashGray}
                  alt={`Adaptability Icon ${index + 1}`}
                  width={80}
                  height={12}
                  sizes="100vw"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}

                />
              )}
            </div>
            </div>
          ))}
        </div>
        <div className="py-2 text-md font-normal md:text-left px-8 pb-4 flex flex-row">
          <span className="font-bold">Affection level:</span>
          {Array.from({ length: 5 }, (_, index) => (
            <div className="flex justify-center items-center">
            <div key={index} className="flex justify-center items-center">
              {index < breedImage.breeds[0].affection_level ? (
                <Image
                  src={Dash}
                  alt={`Affection Icon ${index + 1}`}
                  width={80}
                  height={12}
                  sizes="100vw"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
              ) : (
                <Image
                  src={DashGray}
                  alt={`Affection Icon ${index + 1}`}
                  width={80}
                  height={12}
                  sizes="100vw"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
              )}
            </div>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="shadow-lg bg-green-100 text-green-500 text-lg font-bold text-center p-10 rounded-lg">
        3
      </div> */}
    </>
  );
};

export default CatCard;
