export const newsData = async () => {
    // Fetch data from external API
    const res = await fetch(process.env.PRODAPI+"?limit=20&flag=true")
    const result = await res.json()
    const MainData = result?.filter(result1 => (result1.main === "1"))
    const SecondaryData = result.filter(result2 => (result2.main === "0" ))
    return { MainData, SecondaryData};
  }

export const fetchNewsDetail = async (id) => {
  const data = await fetch("https://gxcmef9ngc.execute-api.ap-south-1.amazonaws.com/news/fetchbyid?ID="+id)
  const result = await data.json();
  console.log(result, id)
  return result;
}