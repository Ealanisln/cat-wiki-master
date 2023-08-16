import Image from "next/image";

const TopSearch = () => {
  return (
    <div className="mx-4 md:mx-8 lg:mx-16 mb-16">
      <div className="px-10 bg-[#e3e1dc] w-full rounded-b-3xl pt-4">
        <div className="flex flex-col gap-1">
          <p className="font-light text-[#4d270c]">Most Searched Breeds</p>
          <div className="w-14 border-b-4 border-[#4d270c] rounded-full" />
        </div>
        <div className="flex w-full  items-center justify-between">
          <p className="text-[#291507] lg:text-4xl md:text-xl font-bold lg:w-[35%] pt-8">
            66+ Breeds For you to discover
          </p>
          <div className="hidden md:flex gap-3">
            <p className="lg:text-lg md:text-lg sm:text-md xs:text-sm xxs:text-xs font-semibold cursor-pointer text-[#73675c] ">
              SEE MORE
            </p>
          </div>
        </div>
        <section className="py-8 px-4">
          <div className="flex flex-wrap -mx-2">
            <div className="w-1/2 md:w-1/4 px-2 mb-8">
              <Image
                className="object-cover w-[450px] h-60 rounded-xl shadow-md"
                src="/cats/abyssian.webp"
                alt="Abyssian Cat"
                width={150}
                height={150}
              />
              <p className="font-semibold text-[#73675c] text-left mt-2">
                Abyssian Cat
              </p>
            </div>
            <div className="w-1/2 md:w-1/4 px-2 mb-8">
              <Image
                className="object-cover w-[450px] h-60 rounded-xl shadow-md"
                src="/cats/aegean.webp"
                alt=""
                width={200}
                height={200}
              />
              <p className="font-semibold text-[#73675c] text-left mt-2">
                Aegean Cat
              </p>
            </div>
            <div className="w-1/2 md:w-1/4 px-2 mb-8">
              <Image
                className="object-cover w-[450px] h-60 rounded-xl shadow-md"
                src="/cats/american-bobtail.webp"
                alt=""
                width={200}
                height={200}
              />
              <p className="font-semibold text-[#73675c] text-left mt-2">
                American Bobtail Cat
              </p>
            </div>
            <div className="w-1/2 md:w-1/4 px-2 mb-8">
              <Image
                className="object-cover w-[450px] h-60 rounded-xl shadow-md"
                src="/cats/american-curl.webp"
                alt=""
                width={200}
                height={200}
              />
              <p className="font-semibold text-[#73675c] text-left mt-2">
                American Curl Cat
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TopSearch;
