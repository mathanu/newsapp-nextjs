import Head from 'next/head';
import React from 'react';

const MetaDocument = (props) => {
    return <Head>
        <meta name='keywords' content='Latest Tamil news, Latest SPorts news, big boss tamil, tamilnadu news, kollywood news, politiocs, tamil seithigal, trending' />
        <meta name='description' />
        <meta name='title' content={props?.data?.title}/>
        <meta name='og:image' content={props?.data?.image} />
        <meta name='op:description' content={props?.data?.description} />
        <meta name='op:url' content={props?.data?.url}/>
    </Head>;
}

MetaDocument.defaultProps = {
    title: "Tamil News Info",
    description: "Latest Tamil news, Latest SPorts news, big boss tamil, tamilnadu news, kollywood news, politiocs, tamil seithigal, trending",
    image: "",
    url: "www.tamilnewsinfo.com"
}

export default MetaDocument;