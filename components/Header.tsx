import Image from 'next/image'; 
import logo from '../public/CatwikiLogo.svg'
import Link from 'next/link';


function Header() {
  return (
    <nav className='pt-4 pb-4 px-6'>
      <Link href="/">
        <Image src={logo} alt="Logo" width={100} height={100} />
        </Link>
    </nav>
  )
}

export default Header