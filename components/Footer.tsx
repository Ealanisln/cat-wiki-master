import Image from 'next/image';
import logo from '../public/CatwikiLogo.svg';

function Footer() {
  return (
    <footer style={{ width: '100%', background: 'black', borderRadius: '20px 20px 0 0', padding: '20px ', position: 'fixed', bottom: 0, left: 0 }}>
      <div className="flex flex-row justify-between bg-black px-12 py-6">
        <div className="flex items-center">
          <Image src={logo} alt="Logo" width={75} height={50} style={{ filter: 'brightness(0) invert(1)' }} />
        </div>
        <div className="text-white text-right">
          <span className="font-normal">created by </span>
          <span className="font-semibold">Emmanuel Alanis </span>
          <span className="font-normal">- devChallenge.io 2023</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
