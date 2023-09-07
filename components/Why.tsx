import Image from "next/image";

const Why = () => {
  return (
    <>
      <div className="w-full px-10 md:px-20">
        <div className="w-14 border-b-4 border-[#4d270c] rounded-full" />
        <div className="flex flex-col md:flex-row w-full items-center justify-between">
          <p className="text-[#291507] text-4xl md:text-4xl font-bold pt-8">
            Why should you have a cat?
          </p>
          <div className="flex w-full items-center justify-between">
            <p className="text-[#291507] text-base md:text-xl pt-8">
              Having a cat around you can actually trigger the release of
              calming chemicals in your body which lower your stress and anxiety
              levels.
            </p>
          </div>
          <div className="container mx-auto pt-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-12">
              <Image
                className="object-cover w-[450px] h-60 rounded-xl shadow-md"
                src="/cats/ranma.jpg"
                alt="Ranma the cat"
                width={200}
                height={200}
              />
              <Image
                className="object-cover w-[450px] h-60 rounded-xl shadow-md"
                src="/cats/chawis-oreo.jpeg"
                alt="Oreo the cat"
                width={200}
                height={200}
              />
              <Image
                className="object-cover w-[450px] h-60 rounded-xl shadow-md"
                src="/cats/mia.jpeg"
                alt="Mia the cat"
                width={200}
                height={200}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Why;
