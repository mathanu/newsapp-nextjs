import React from "react";
import { fetchNewsList } from "../Sanity/Api";
import NewsList from "../components/NewsList";

export default async function newslist({ params, searchParams }) {
  const newsListData = await fetchNewsList(params.slug)
  console.log(newsListData)
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
      <NewsList data={newsListData}/>
    </div>

  }