import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full fixed">
      <div className="mx-16">
        <div
          className="flex mx-auto rounded-t-3xl bg-no-repeat px-12 bg-cover bg-center
  bg-[url('../src/assets/images/Herosm.png')]
  md:bg-[url('../src/assets/images/Heromd.png')]
  xl:bg-[url('../src/assets/images/Herolg.png')]"
        >
          <div className="py-12 px-12">
            <Image
              alt="logo cat"
              src="../CatwikiLogo.svg"
              width={200}
              height={200}
              style={{ filter: "brightness(0) invert(1)" }}
            />

            <h2 className="text-white mb-8">
              Get to know more about your cat breed.
            </h2>
            {/* Added margin-bottom (mb-4) to create spacing */}
            <div className="relative text-gray-600">
              <input
                type="search"
                name="search"
                placeholder="Search"
                className="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none"
              />
              
              <button type="submit" className="absolute right-4 top-0 mt-3">
              <svg
                  className="h-4 w-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  id="Capa_1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 56.966 56.966"
                  xmlSpace="preserve"
                >
                  <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;