import React from "react";
import { fetchNewsDetail } from "../../Sanity/Api";
import NewsDetails from "../components/newsdetails";

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
      <meta property='keywords' content={fetchNewsDetails.titleEnglish} />
        <meta property='title' content={fetchNewsDetails.title}/>
        <meta property='og:title' content={fetchNewsDetails.title}/>
        <meta property='image' content={fetchNewsDetails.image} />
        <meta property='og:image' content={fetchNewsDetails.image} />
        <meta property='og:description' content={fetchNewsDetails.titleEnglish} />
        <meta property='description' content={fetchNewsDetails.titleEnglish} />
        <meta property='og:url' content={fetchNewsDetails.url}/>
        <meta property="twitter:card" value="summary_large_image"/>
        <meta property="twitter:site" value="@tamilnewsinfo"/>
        <meta property='twitter:url' content={fetchNewsDetails.url}/>
        <meta property='twitter:title' content={fetchNewsDetails.title}/>
        <meta property='twitter:image' content={fetchNewsDetails.image} />
        <meta property='twitter:description' content={fetchNewsDetails.titleEnglish} />
        <meta property="og:image:width" content="1600"/>
        <meta property="og:image:height" content="900"/>
        <meta property="mobile-web-app-capable" content="yes"/>
        <meta content="text/html; charset=UTF-8" http-equiv="Content-Type"></meta>
<NewsDetails data={fetchNewsDetails} />
    </div>

  }
