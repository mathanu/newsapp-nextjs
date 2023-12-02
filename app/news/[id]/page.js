import React from "react";
import { fetchNewsDetail } from "../../Sanity/Api";
import NewsDetails from "../../components/NewsDetails";

export default async function news({ params, searchParams }) {
  const fetchNewsDetails = await fetchNewsDetail(params.id)

  console.log(">>>>>>>>>>>>>>>>>>>>>>", fetchNewsDetails);

  const meta = {
    description: fetchNewsDetails?.list.title,
    image: fetchNewsDetails?.list.image,
    url: process.env.PRODAPI+"news/"+params.id,
    title: fetchNewsDetails?.list.title,
  }
    return <div>
      {/* <MetaDocument data={meta} /> */}
        <meta property='title' content={fetchNewsDetails?.list.title}/>
        <meta property='og:title' content={fetchNewsDetails?.list.englishtitle}/>
        <meta property='image' content={fetchNewsDetails?.list.image} />
        <meta property='og:image' content={fetchNewsDetails?.list.image} />
        <meta property='og:description' content={fetchNewsDetails?.list.englishtitle} />
        <meta property='description' content={fetchNewsDetails?.list.englishtitle} />
        <meta property='og:url' content={fetchNewsDetails?.list.url}/>
        <meta property="twitter:card" value="summary_large_image"/>
        <meta property="twitter:site" value="@tamilnewsinfo"/>
        <meta property='twitter:url' content={fetchNewsDetails?.list.image}/>
        <meta property='twitter:title' content={fetchNewsDetails?.list.title}/>
        <meta property='twitter:image' content={fetchNewsDetails?.list.image} />
        <meta property='twitter:description' content={fetchNewsDetails?.list.englishtitle} />
        <meta property="og:image:width" content="1600"/>
        <meta property="og:image:height" content="900"/>
        <meta property="mobile-web-app-capable" content="yes"/>
        <meta content="text/html; charset=UTF-8" http-equiv="Content-Type"></meta>
        <NewsDetails data={fetchNewsDetails} />
    </div>

  }
