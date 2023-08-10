import Image from "next/image";
import logo from "../public/CatwikiLogo.svg";

function Footer() {
  return (
    <div className="w-full fixed bottom-0">
      <div className="flex flex-row p-8 justify-between bg-black px-12 py-6 mx-16 rounded-t-3xl">
        <div className="flex items-center md:mb-0">
          <Image
            src={logo}
            alt="Logo"
            width={95}
            height={50}
            style={{ filter: "brightness(0) invert(1)" }}
          />
        </div>
        <div className="text-white text-right text-sm">
          <span className="font-normal break-normal align-middle">created by </span>
          <span className="font-semibold break-normal align-middle">Emmanuel Alanis </span>
          <span className="font-normal line-break-small break-normal align-middle">- devChallenge.io 2023</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
