import '@/styles/globals.css'
import Layout from '../components/layout';
import type { AppProps } from 'next/app'
import { Montserrat } from '@next/font/google'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
    <main className={montserrat.className}>
      <Component {...pageProps} />
    </main>
    </Layout>
  )
}
