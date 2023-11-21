import React from "react";
import { fetchNewsDetail } from "../../Sanity/Api";
import NewsDetails from "../../components/NewsDetails"
import MetaDocument from "@/app/components/MetaDocument";

export default async function news({ params, searchParams }) {
  const fetchNewsDetails = await fetchNewsDetail(params.id)

  
  const meta = {
    description: fetchNewsDetails.title,
    image: fetchNewsDetails.image,
    url: process.env.PRODAPI+"news/"+params.id,
    title: fetchNewsDetails.title,
  }
    return <div>
      <MetaDocument data={meta} />
      <meta name='keywords' content='Latest Tamil news, Latest SPorts news, big boss tamil, tamilnadu news, kollywood news, politiocs, tamil seithigal, trending' />
        <meta name='title' content={fetchNewsDetails.title}/>
        <meta name='og:image' content={fetchNewsDetails.image} />
        <meta name='op:description' content={fetchNewsDetails.description} />
        <meta name='op:url' content={fetchNewsDetails.url}/>
      <NewsDetails data={fetchNewsDetails}/>
    </div>

  }