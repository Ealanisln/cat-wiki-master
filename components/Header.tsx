import Image from 'next/image'; 
import logo from '../public/CatwikiLogo.svg'


function Header() {
  return (
    <nav className='pt-4 pb-4 px-6'>
        <Image src={logo} alt="Logo" width={100} height={100} />
    </nav>
  )
}

export default Header