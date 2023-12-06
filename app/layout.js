import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';
import Footer from "./components/Footer";
import HeaderCmp from "./components/HeaderCmp";
import NextTopLoader from "nextjs-toploader";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'Tamil News Info',
  description: 'Latest Tamil news, Latest SPorts news, big boss tamil, tamilnadu news, kollywood news, politiocs, tamil seithigal, trending',
  keywords: 'Latest Tamil news, Latest SPorts news, big boss tamil, tamilnadu news, kollywood news, politiocs, tamil seithigal, trending, bigg boss updates in tamil, cook with comali, vijay tv promos, sun tv serial updates, today serailupdates in tamil, today raasipalan in tamil, cooking tips in tamil, healthy life style in tamil, trending tamil news, today trending, trending news, technology updates in tamil, online tamil news, tamil news portal, tamil actors, tamil actresses, astrology news in tamil, chennai news, கேலரி, ஜோதிடம, இலக்கியம, ஆன்மீகம, தமிழ் வீடியோ, தமிழ சினிமா, கோலிவுட , நடிகைகள்,  நடிகர், திரைப் படங்கள், raasi palan today, today raasi palan in tamil, horoscope tamil, weekly horoscope in tamil, monthly horoscope in tamil, guru peyarchi, horoscope tamil, sports updates',
  
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7330127866991302"
        crossOrigin="anonymous"
      />
      <meta name="google-adsense-account" content="ca-pub-7330127866991302" />

      <body>
      <Analytics />
        <NextTopLoader
          color="#FF0000"
          initialPosition={2.0}
          crawlSpeed={1000}
          height={3}
          crawl={true}
          showSpinner={true}
          easing="ease"
          speed={1000}
          shadow="0 0 10px #FF0000,0 0 5px #FF0000"
          template="<div class=&quot;bar&quot; role=&quot;bar&quot;><div class=&quot;peg&quot;></div></div> 
  <div class=&quot;spinner&quot; role=&quot;spinner&quot;><div class=&quot;spinner-icon&quot;></div></div>"
          zIndex={1600}
          showAtBottom={false}
        />
        <HeaderCmp />
        {children}
        <Footer />
      </body>
    </html>
  );
}
