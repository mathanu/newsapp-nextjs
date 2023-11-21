import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Tamil News Info',
  description: 'Latest Tamil news, Latest SPorts news, big boss tamil, tamilnadu news, kollywood news, politiocs, tamil seithigal, trending',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <meta name="google-adsense-account" content="ca-pub-7330127866991302" />
      <body >{children}</body>
    </html>
  )
}
