import Image from "next/image";

const Why = () => {
  return (
    <>
    <div className="w-full px-4">
      <div className="w-14 border-b-4 border-[#4d270c] rounded-full" />
      <div className="flex flex-col md:flex-row w-full items-center justify-between">
        <p className="text-[#291507] text-4xl md:text-6xl font-bold pt-8">
          Why should you have a cat?
        </p>
        <div className="flex w-full items-center justify-between">
          <p className="text-[#291507] text-base md:text-2xl pt-8">
            Having a cat around you can actually trigger the release of calming
            chemicals in your body which lower your stress and anxiety levels.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-3">
        <div className="row-span-3 bg-white p-3 rounded-md">
        <Image
        className="object-cover w-[450px] h-60 rounded-xl shadow-md"
        src="/cats/ranma.jpg"
        alt=""
        width={200}
        height={150}
      /></div>
            <Image
        className="object-cover w-[450px] h-60 rounded-xl shadow-md"
        src="/cats/chawis-oreo.jpeg"
        alt=""
        width={200}
        height={200}
      />
            <Image
        className="object-cover w-[450px] h-60 rounded-xl shadow-md"
        src="/cats/mia.jpeg"
        alt=""
        width={200}
        height={200}
      />
      </div>
      </div>
    </div>
    </>
  );
};

export default Why;
