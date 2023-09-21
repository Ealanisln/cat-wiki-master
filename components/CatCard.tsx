"use client";
// CatCard.tsx
import React, { Suspense, useEffect, useState } from "react";
import Image from "next/image";
import { BreedFull } from "@/interfaces";
import Dash from "../public/images/dash.svg";
import DashGray from "../public/images/dash-gray.svg";

interface CatCardProps {
  breed: BreedFull;
  coverPhoto?: string | null;
}

const CatCard: React.FC<CatCardProps> = ({ breed }) => {
  return (
    <>
      <div className="text-md font-semibold">
        <div className="text-3xl sm:text-center md:text-left pb-6 pt-4">
          {breed.name}
        </div>
        <div className="text-lg font-medium md:text-left pb-4">
          {breed.description}
        </div>
        <div className="py-2 text-md font-normal md:text-left pb-4">
          <span className="font-bold">Temperament:</span> {breed.temperament}
        </div>
        <div className="py-2 text-md font-normal md:text-left pb-4">
          <span className="font-bold">Origin:</span> {breed.origin}
        </div>
        <div className="py-2 text-md font-normal md:text-left pb-4">
          <span className="font-bold">Life Span:</span> {breed.life_span} years.
        </div>
        <div className="pt-2 h-auto flex flex-wrap lg:flex-nowrap pr-8">
          <span className="font-bold w-2/6">Adaptability:</span>
          <div className="w-full h-8 flex items-center justify-between">
            {Array.from({ length: 5 }, (_, idx) => (
              <div key={idx}>
                <div>
                  {idx < breed.adaptability ? (
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
                  {idx < breed.affection_level ? (
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
                  {idx < breed.child_friendly ? (
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
                  {idx < breed.grooming ? (
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
                  {idx < breed.intelligence ? (
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
                  {idx < breed.health_issues ? (
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
                  {idx < breed.social_needs ? (
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
                  {idx < breed.stranger_friendly ? (
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
