import Image from 'next/image'; 
import logo from '../public/CatwikiLogo.svg'


function Header() {
  return (
    <nav>
        <Image src={logo} alt="Logo" width={150} height={50} />
    </nav>
  )
}

export default Header