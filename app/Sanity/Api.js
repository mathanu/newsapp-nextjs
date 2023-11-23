export const newsData = async () => {
    // Fetch data from external API
    const res = await fetch(process.env.PRODAPI+"news/list?limit=13&flag=true", { cache: 'no-store' })
    const resultData = await res.json()
    let MainData = [];
    let SecondaryData= [] 
    if(resultData)
    {
       MainData = resultData?.filter(result1 => (result1.main === "1"))
       SecondaryData = resultData.filter(result2 => (result2.main === "0" ))

    }
 
    return { MainData, SecondaryData};
  }

export const fetchNewsDetail = async (id) => {
  const data = await fetch(process.env.PRODAPI+"news/fetchbyid?ID="+id)
  const result = await data.json();
  console.log(result, id)
  return result;
}

export const fetchNewsList = async (slug) => {
  const data = await fetch(process.env.PRODAPI+"news/type?type="+slug, { cache: 'no-store' })
  const result = await data.json();
  console.log(result, slug)
  return result;
}

export const fetchHoroscope = async () => {
  const data = await fetch(process.env.PRODAPI+"horoscope/list")
  const result = await data.json();
  return result;
}
