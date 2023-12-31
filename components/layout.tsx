import Header from './Header'
import Footer from './Footer'
import { ReactNode } from 'react'; 

type LayoutProps = {
  children: ReactNode;
};


export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}