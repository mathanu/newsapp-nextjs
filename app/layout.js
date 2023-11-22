import { Inter } from 'next/font/google'
import './globals.css'

import Footer from "./components/Footer";
import HeaderCmp from "./components/HeaderCmp";
import NextTopLoader from 'nextjs-toploader';

const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'Tamil News Info',
//   description: 'Latest Tamil news, Latest SPorts news, big boss tamil, tamilnadu news, kollywood news, politiocs, tamil seithigal, trending',
// }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7330127866991302"
     crossorigin="anonymous"></script>
    <meta name="google-adsense-account" content="ca-pub-7330127866991302" />
    
      <body >
      <NextTopLoader color="#FF0000"
  initialPosition={2.0}
  crawlSpeed={1000}
  height={3}
  crawl={true}
  showSpinner={true}
  easing="ease"
  speed={1000}
  shadow="0 0 10px #FF0000,0 0 5px #FF0000"
  template='<div class="bar" role="bar"><div class="peg"></div></div> 
  <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
  zIndex={1600}
  showAtBottom={false} />
      <HeaderCmp />
      {children}
      <Footer />
      </body>
      
    </html>
  )
}
