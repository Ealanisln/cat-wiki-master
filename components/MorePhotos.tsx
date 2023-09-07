// MorePhotos.tsx
import React from "react";
import Image from "next/image";

interface MorePhotosProps {
  additionalPhotos: string[]; // Define the prop for additional photos
}

const MorePhotos: React.FC<MorePhotosProps> = ({ additionalPhotos }) => {
  return (
    <>
      <div className="px-10 md:px-20 text-3xl sm:text-center md:text-left font-medium pt-16 pb-8">
        Other photos:
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pb-12">
          {additionalPhotos.map((photoUrl, photoIndex) => (
            <div
              key={photoIndex}
              className="flex"
            >
              <Image
                src={photoUrl}
                alt={`Additional Photo ${photoIndex + 1}`}
                height={200}
                width={200}
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "25px",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MorePhotos;
