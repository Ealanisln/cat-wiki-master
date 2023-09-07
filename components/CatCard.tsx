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
  const {
    name,
    description,
    temperament,
    origin,
    life_span,
    adaptability,
    affection_level,
    child_friendly,
    grooming,
    intelligence,
    health_issues,
    social_needs,
    stranger_friendly,
  } = breedImage.breeds[0];

  return (
    <>
      <div className="rounded-lg sm:row-span-1 row-span-2 justify-center">
        <Image
          alt={`Breed ${index}`}
          src={breedImage.url}
          width={500}
          height={400}
          sizes="75vw"
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "25px",
          }}
        />
      </div>
      <div className="text-md font-semibold">
        <div className="text-3xl sm:text-center md:text-left pb-6 pt-4">
          {name}
        </div>
        <div className="text-lg font-medium md:text-left pb-4">
          {description}
        </div>
        <div className="py-2 text-md font-normal md:text-left pb-4">
          <span className="font-bold">Temperament:</span> {temperament}
        </div>
        <div className="py-2 text-md font-normal md:text-left pb-4">
          <span className="font-bold">Origin:</span> {origin}
        </div>
        <div className="py-2 text-md font-normal md:text-left pb-4">
          <span className="font-bold">Life Span:</span> {life_span} years.
        </div>
        <div className="pt-2 h-auto flex flex-wrap lg:flex-nowrap pr-8">
          <span className="font-bold w-2/6">Adaptability:</span>
          <div className="w-full h-8 flex items-center justify-between">
            {Array.from({ length: 5 }, (_, idx) => (
              <div key={idx}>
                <div>
                  {idx < adaptability ? (
                    <Image
                      src={Dash}
                      alt={`Adaptability Icon ${idx + 1}`}
                      className="align-middle"
                    />
                  ) : (
                    <Image
                      src={DashGray}
                      alt={`Adaptability Icon ${idx + 1}`}
                      className="align-middle"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="pt-2 h-auto flex flex-wrap lg:flex-nowrap pr-8">
          <span className="font-bold w-2/6">Affection level:</span>
          <div className=" w-full h-8 flex items-center justify-between">
            {Array.from({ length: 5 }, (_, idx) => (
              <div key={idx}>
                <div>
                  {idx < affection_level ? (
                    <Image
                      src={Dash}
                      alt={`Affection Icon ${idx + 1}`}
                      className="align-middle"
                    />
                  ) : (
                    <Image
                      src={DashGray}
                      alt={`Affection Icon ${idx + 1}`}
                      className="align-middle"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="pt-2 h-auto flex flex-wrap lg:flex-nowrap pr-8">
          <span className="font-bold w-2/6">Child Friendly:</span>
          <div className=" w-full h-8 flex items-center justify-between">
            {Array.from({ length: 5 }, (_, idx) => (
              <div key={idx}>
                <div>
                  {idx < child_friendly ? (
                    <Image
                      src={Dash}
                      alt={`Affection Icon ${idx + 1}`}
                      className="align-middle"
                    />
                  ) : (
                    <Image
                      src={DashGray}
                      alt={`Affection Icon ${idx + 1}`}
                      className="align-middle"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="pt-2 h-auto flex flex-wrap lg:flex-nowrap pr-8">
          <span className="font-bold w-2/6">Grooming:</span>
          <div className=" w-full h-8 flex items-center justify-between">
            {Array.from({ length: 5 }, (_, idx) => (
              <div key={idx}>
                <div>
                  {idx < grooming ? (
                    <Image
                      src={Dash}
                      alt={`Affection Icon ${idx + 1}`}
                      className="align-middle"
                    />
                  ) : (
                    <Image
                      src={DashGray}
                      alt={`Affection Icon ${idx + 1}`}
                      className="align-middle"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="pt-2 h-auto flex flex-wrap lg:flex-nowrap pr-8">
          <span className="font-bold w-2/6">Intelligence:</span>
          <div className=" w-full h-8 flex items-center justify-between">
            {Array.from({ length: 5 }, (_, idx) => (
              <div key={idx}>
                <div>
                  {idx < intelligence ? (
                    <Image
                      src={Dash}
                      alt={`Intelligence Icon ${idx + 1}`}
                      className="align-middle"
                    />
                  ) : (
                    <Image
                      src={DashGray}
                      alt={`Intelligence Icon ${idx + 1}`}
                      className="align-middle"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="pt-2 h-auto flex flex-wrap lg:flex-nowrap pr-8">
          <span className="font-bold w-2/6">Health issues:</span>
          <div className=" w-full h-8 flex items-center justify-between">
            {Array.from({ length: 5 }, (_, idx) => (
              <div key={idx}>
                <div>
                  {idx < health_issues ? (
                    <Image
                      src={Dash}
                      alt={`Health issues Icon ${idx + 1}`}
                      className="align-middle"
                    />
                  ) : (
                    <Image
                      src={DashGray}
                      alt={`Health issues Icon ${idx + 1}`}
                      className="align-middle"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="pt-2 h-auto flex flex-wrap lg:flex-nowrap pr-8">
          <span className="font-bold w-2/6">Social needs:</span>
          <div className=" w-full h-8 flex items-center justify-between">
            {Array.from({ length: 5 }, (_, idx) => (
              <div key={idx}>
                <div>
                  {idx < social_needs ? (
                    <Image
                      src={Dash}
                      alt={`Social needs Icon ${idx + 1}`}
                      className="align-middle"
                    />
                  ) : (
                    <Image
                      src={DashGray}
                      alt={`Social needs Icon ${idx + 1}`}
                      className="align-middle"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="pt-2 h-auto flex flex-wrap lg:flex-nowrap pr-8">
          <span className="font-bold w-2/6">Stranger friendly:</span>
          <div className=" w-full h-8 flex items-center justify-between">
            {Array.from({ length: 5 }, (_, idx) => (
              <div key={idx}>
                <div>
                  {idx < stranger_friendly ? (
                    <Image
                      src={Dash}
                      alt={`Stranger friendly Icon ${idx + 1}`}
                      className="align-middle"
                    />
                  ) : (
                    <Image
                      src={DashGray}
                      alt={`Stranger friendly Icon ${idx + 1}`}
                      className="align-middle"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CatCard;
