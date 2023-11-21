import React from "react";
import { fetchNewsDetail } from "../../Sanity/Api";
import NewsDetails from "../../components/NewsDetails"

export default async function news({ params, searchParams }) {
  const fetchNewsDetails = await fetchNewsDetail(params.id)

  
  const meta = {
    description: fetchNewsDetails.title,
    image: fetchNewsDetails.image,
    url: process.env.PRODAPI+"news/"+params.id,
    title: fetchNewsDetails.title,
  }
    return <div>
      {/* <MetaDocument data={meta} /> */}
      <meta name='keywords' content='Latest Tamil news, Latest SPorts news, big boss tamil, tamilnadu news, kollywood news, politiocs, tamil seithigal, trending' />
        <meta name='title' content={fetchNewsDetails.title}/>
        <meta name='og:image' content={fetchNewsDetails.image} />
        <meta name='og:description' content={fetchNewsDetails.description} />
        <meta name='og:url' content={fetchNewsDetails.url}/>
        <meta name="twitter:card" value="summary_large_image"/>
      <meta name="twitter:site" value="@tamilnewsinfo"/>
      <meta property="og:image:width" content="1070"/>
      <meta property="og:image:height" content="580"/>
      <meta name="mobile-web-app-capable" content="yes"/>
      <meta content="text/html; charset=UTF-8" http-equiv="Content-Type"></meta>
      <NewsDetails data={fetchNewsDetails}/>
    </div>

  }