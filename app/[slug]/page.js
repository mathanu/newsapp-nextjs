import React from "react";
import { fetchNewsList, fetchHoroscope } from "../Sanity/Api";
import NewsList from "../components/NewsList";
import RaasiPalan from "../components/RaasiPalan";

export default async function newslist({ params, searchParams }) {
    let responseData = []
    if(params.slug === 'sports' || params.slug === 'cinema' || params.slug === 'lifestyle' || params.slug === 'technology')
    {
        responseData = await fetchNewsList(params.slug)
    }

    if(params.slug === 'raasipalan')
    {
        responseData = await fetchHoroscope()
    }

  
  return <div>
      {/* <MetaDocument data={meta} /> */}
      {/* <meta property='keywords' content={fetchNewsDetails.englishtitle} />
        <meta property='title' content={fetchNewsDetails.title}/>
        <meta property='og:title' content={fetchNewsDetails.title}/>
        <meta property='image' content={fetchNewsDetails.image} />
        <meta property='og:image' content={fetchNewsDetails.image} />
        <meta property='og:description' content={fetchNewsDetails.englishtitle} />
        <meta property='description' content={fetchNewsDetails.englishtitle} />
        <meta property='og:url' content={fetchNewsDetails.url}/>
        <meta property="twitter:card" value="summary_large_image"/>
        <meta property="twitter:site" value="@tamilnewsinfo"/>
        <meta property='twitter:url' content={fetchNewsDetails.url}/>
        <meta property='twitter:title' content={fetchNewsDetails.title}/>
        <meta property='twitter:image' content={fetchNewsDetails.image} />
        <meta property='twitter:description' content={fetchNewsDetails.englishtitle} />
        <meta property="og:image:width" content="1600"/>
        <meta property="og:image:height" content="900"/>
        <meta property="mobile-web-app-capable" content="yes"/>
        <meta content="text/html; charset=UTF-8" http-equiv="Content-Type"></meta> */}
      { (params.slug === 'sports' || params.slug === 'cinema'  || params.slug === 'lifestyle' || params.slug === 'technology') && <NewsList data={responseData}/> }
      { params.slug === 'raasipalan' && <RaasiPalan data={responseData}/> }
    </div>

  }