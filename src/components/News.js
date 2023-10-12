// import React, { useEffect, useState } from 'react'
// import NewsData from '../News.json'
// // import axios from 'axios'
// import Spinner from './Spinner'
// import Newsitem from './Newsitem'
// import InfiniteScroll from 'react-infinite-scroll-component'
// function News(props) {
//     const [articles, setArticles] = useState([])
//     const [page, setPage] = useState(1)
//     const [loading, setLoading] = useState(true)
//     const [totalResults, setTotalResults] = useState(0)

//     // console.log(page)

//     // const updateNews = async () => {
//     //     setLoading(true)
//     //     // console.log(loading)s
//     //     console.log("fetch news")
//     //     await axios.get(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=8157a78cb81a48ebac3578c02a2cc6af&q=india&page=${page}&pagesize=${props.pageSize}`)
//     //         .then((response) => {
//     //             // console.log(response); //gives all api content
//     //             setArticles(response.data.articles)
//     //             // page = page + 1
//     //             setTotalResults(response.data.totalResults)
//     //             setLoading(false)
//     //             // console.log(data) //gives all articles content from api 
//     //             console.log(totalResults)
//     //         })
//     // }

//     // const updateNews= async()=>{
//     //     props.setProgress(20)
//     //     const url=`https://newsapi.org/v2/top-headlines?&country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&q=india&page=${page}&pagesize=${props.pageSize}`
//     //     setLoading(true)
//     //     let data=await fetch(url);
//     //     // console.log(data)
//     //     props.setProgress(30)
//     //     let parsedData=await data.json()
//     //     console.log(parsedData);
//     //     props.setProgress(70)
//     //     setArticles(parsedData.articles)
//     //     setTotalResults(parsedData.totalResults)
//     //     // console.log(totalResults)
//     //     setLoading(false)
//     //     props.setProgress(100)
//     // }
//     const updateNews = () => {
//         props.setProgress(20);
//         setArticles(NewsData.articles); // Set articles from local JSON data
//         setTotalResults(NewsData.totalResults); // Set totalResults from local JSON data
//         setLoading(false);
//         props.setProgress(100);
//     };



//     const capitalizeFLetter = (string) => {
//         return (string[0].toUpperCase() + string.slice(1));
//     }

//     // useEffect(() => {
//     //     // setLoading(true)
//     //     // console.log(loading)
//     //     // console.log("fetch news")
//     //     // axios.get(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=8157a78cb81a48ebac3578c02a2cc6af&q=india&page=1&pagesize=${props.pageSize}`)
//     //     //     .then((response) => {
//     //     //         setLoading(false)
//     //     //         console.log(response); //gives all api content
//     //     //         setData(response.data.articles)
//     //     //         console.log(data) //gives all articles content from api 
//     //     //     }) 

//     //     const filteredNews = NewsData.articles.filter(item => item.category === props.category);
//     //     setArticles(filteredNews.slice(0, props.pageSize));
//     //     setTotalResults(filteredNews.length);
//     //     setLoading(false);
//     //     updateNews();
//     //     document.title = `${capitalizeFLetter(props.category)}-NewsMonkey`
//     //     // eslint-disable-next-line
//     // }, [props.category])

//     useEffect(() => {
//         const filteredArticles = NewsData.articles.filter((item) => item.category === props.category);
//         setArticles(filteredArticles.slice(0, props.pageSize));
//         setTotalResults(filteredArticles.length);
//         setLoading(false);
//         updateNews();
//         document.title = `${capitalizeFLetter(props.category)} - NewsMonkey`;

//         // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, [props.category, props.pageSize]);


//     //for grt news button    
//     // const getNews = () => {
//     //     setLoading(true)
//     //     console.log("fetch news")
//     //     axios.get(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=113fc6d45c94422694bed7cccd6befdd&q=india&page=1&pagesize=${props.pageSize}`)
//     //         .then((response) => {
//     //             setLoading(false)
//     //             console.log(response); //gives all api content
//     //             setData(response.data.articles)
//     //             console.log(data) //gives all articles content from api 
//     //         })
//     //     setLoading(false)

//     // }

//     const Nextpage = async () => {
//         // console.log("next")
//         // setLoading(true)
//         // axios.get(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=8157a78cb81a48ebac3578c02a2cc6af&q=india&page=${page + 1}&pageSize=${props.pageSize}`)

//         //     .then((response) => {
//         //         setLoading(false)
//         //         // console.log(response); gives all api content
//         //         setData(response.data.articles)
//         //         setPage(page+1)
//         //         console.log(page)
//         //         console.log(data)  //gives all articles content from api
//         //     })


//         // console.log(page)
//         // setPage(page+1)
//         // console.log(page)
//         // updateNews();
//     }


//     const Previous = async () => {
//         // console.log("previous")
//         // setLoading(true)
//         // axios.get(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=8157a78cb81a48ebac3578c02a2cc6af&q=india&page=${page - 1}&pageSize=${props.pageSize}`)
//         //     .then((response) => {
//         //         setLoading(false)
//         //         // console.log(response); gives all api content
//         //         setData(response.data.articles)
//         //         setPage(page - 1)
//         //         console.log(page)
//         //         // console.log(data)  //gives all articles content from api
//         //     })


//         // setPage(page-1)
//         // updateNews();
//     }

//     // const fetchMoreData = async () => {
//     //     setLoading(true)
//     //     setPage(page + 1)
//     //     // console.log(loading)
//     //     console.log("fetch news")
//     //     axios.get(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=8157a78cb81a48ebac3578c02a2cc6af&q=india&page=${page}&pagesize=${props.pageSize}`)
//     //         .then((response) => {
//     //             console.log(response); //gives all api content

//     //             setArticles(articles.concat(response.data.articles))
//     //             setTotalResults(response.data.totalResults)
//     //             setLoading(false)
//     //             // console.log(data) //gives all articles content from api 
//     //         })
//     // }
//     // const fetchMoreData=async ()=>{
//     //     // setPage(page+1)
//     //     const url=`https://newsapi.org/v2/top-headlines?&country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&q=india&page=${page+1}&pagesize=${props.pageSize}`
//     //     setLoading(true)
//     //     let data=await fetch(url);
//     //     let parsedData=await data.json()
//     //     setArticles(articles.concat(parsedData.articles))
//     //     setTotalResults(parsedData.totalResults)
//     //     setPage(page+1)
//     //     setLoading(false)
//     // };
//     // const fetchMoreData = () => {
//     //     const startIndex = page * props.pageSize;
//     //     const endIndex = startIndex + props.pageSize;
//     //     const newArticles = NewsData.articles.slice(startIndex, endIndex);

//     //     setArticles(prevArticles => [...prevArticles, ...newArticles]);
//     //     setPage(page + 1);
//     // };
//     const fetchMoreData = () => {
//         const startIndex = page * props.pageSize;
//         const endIndex = startIndex + props.pageSize;
//         // const newArticles = NewsData.articles
//         //   .filter((item) => item.category === props.category) // Filter based on category
//         //   .slice(startIndex, endIndex);

//         // setArticles([...articles, ...newArticles]);
//         // setPage(page + 1);
//         const filteredArticles = NewsData.articles
//             .filter((item) => item.category === props.category)
//             .slice(startIndex, endIndex);

//         setArticles([...articles, ...filteredArticles]);
//         setPage(page + 1);
//     };


//     return (

//         <>
//             <h1 className="text-center" style={{ marginTop: "80px" }}>NEWS MONKEY-Top {capitalizeFLetter(props.category)} Headlines</h1>
//             {loading && <Spinner />}
//             {/* <div className="containor my-3">
//                 <button className='btn btn-primary' onClick={getNews}>Fetch News</button></div> */}

//             <InfiniteScroll style={{ overflow: 'hidden' }}
//                 dataLength={articles.length} //This is important field to render the next data
//                 next={fetchMoreData}
//                 hasMore={articles.length !== totalResults}
//                 loader={<Spinner />}
//             >
//                 {/* <div className="container">
//                     <div className="row">
//                         {articles.map((value) => {
//                             return (
//                                 <div className="col-md-4" key={value.url}>
//                                     <Newsitem title={value.title ? value.title.slice(0, 45) : ""} description={value.description ? value.description.slice(0, 45) : ""} image={value.urlToImage ? value.urlToImage : ""} more={value.url ? value.url : ""} date={value.publishedAt} source={value.source.name} />
//                                 </div>
//                             )
//                         })}
//                     </div>
//                 </div> */}

//                 <div className="container">
//                     <div className="row">
//                         {articles.map((value) => (
//                             <div className="col-md-4" key={value.url}>
//                                 <Newsitem
//                                     title={value.title ? value.title.slice(0, 45) : ''}
//                                     description={value.description ? value.description.slice(0, 45) : ''}
//                                     image={value.urlToImage ? value.urlToImage : ''}
//                                     more={value.url ? value.url : ''}
//                                     date={value.publishedAt}
//                                     source={value.source.name}
//                                 />
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </InfiniteScroll>
//             {/* <div className="container d-flex justify-content-between">
//                     <button disabled={page <= 1} type='button' className="btn btn-dark" onClick={Previous}>&larr; Previous</button>
//                     <button type='button' className="btn btn-dark" onClick={Nextpage} >&rarr; next</button></div> */}
//         </>
//     )
// }

// export default News




import React, { useEffect, useState } from 'react';
import NewsData from '../News.json';
import Spinner from './Spinner';
import Newsitem from './Newsitem';
import InfiniteScroll from 'react-infinite-scroll-component';

function News(props) {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [totalResults, setTotalResults] = useState(0);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

useEffect(() => {
    let filteredArticles;
    if (props.category) {
        // If a specific category is selected, filter articles based on that category
        filteredArticles = NewsData.articles.filter((item) => item.category === props.category);
    } else {
        // If no specific category is selected (home page), show news from all categories
        filteredArticles = NewsData.articles;
    }
    console.log('Total Results:', filteredArticles.length);
    console.log('Currently Loaded Articles:', articles.length);
    setArticles(filteredArticles.slice(0, props.pageSize));
    setTotalResults(filteredArticles.length);
    setLoading(false);

    // document.title = props.category ? `${capitalizeFLetter(props.category)} - NewsMonkey` : 'NewsMonkey - Top Headlines';
    // eslint-disable-next-line react-hooks/exhaustive-deps
}, [props.category, props.pageSize]);



//   const fetchMoreData = () => {
//     setPage(page + 1);
//   };
const fetchMoreData = () => {
    const startIndex = page * props.pageSize;
    const endIndex = startIndex + props.pageSize;
  
    let filteredArticles;
    if (props.category) {
      filteredArticles = NewsData.articles.filter((item) => item.category === props.category);
    } else {
      filteredArticles = NewsData.articles;
    }
  
    const newArticles = filteredArticles.slice(startIndex, endIndex);
  
    if (newArticles.length > 0) {
      setArticles([...articles, ...newArticles]);
      setPage(page + 1);
    }
  };
  
  return (
    <>
      <h1 className="text-center" style={{ marginTop: "80px" }}>
        NEWS MONKEY - Top {capitalizeFirstLetter(props.category)} Headlines
      </h1>
      {loading && <Spinner />}

      <InfiniteScroll
        style={{ overflow: 'hidden' }}
        dataLength={articles.length}
        next={fetchMoreData}
        // hasMore={articles.length < totalResults}
        hasMore={articles.length < totalResults}

        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((value) => (
              <div className="col-md-4" key={value.url}>
                <Newsitem
                  title={value.title ? value.title.slice(0, 45) : ''}
                  description={value.description ? value.description.slice(0, 45) : ''}
                  image={value.urlToImage ? value.urlToImage : ''}
                  more={value.url ? value.url : ''}
                  date={value.publishedAt}
                  source={value.source.name}
                />
              </div>
            ))}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
}

export default News;
