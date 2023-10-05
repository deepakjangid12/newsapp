import React, { useEffect,useState } from 'react'
// import axios from 'axios'
import Spinner from './Spinner'
import Newsitem from './Newsitem'
import InfiniteScroll from 'react-infinite-scroll-component'
function News(props) {
    const [articles, setArticles] = useState([])
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(true)
    const [totalResults, setTotalResults] = useState(0)

    // console.log(page)

    // const updateNews = async () => {
    //     setLoading(true)
    //     // console.log(loading)s
    //     console.log("fetch news")
    //     await axios.get(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=8157a78cb81a48ebac3578c02a2cc6af&q=india&page=${page}&pagesize=${props.pageSize}`)
    //         .then((response) => {
    //             // console.log(response); //gives all api content
    //             setArticles(response.data.articles)
    //             // page = page + 1
    //             setTotalResults(response.data.totalResults)
    //             setLoading(false)
    //             // console.log(data) //gives all articles content from api 
    //             console.log(totalResults)
    //         })
    // }

    const updateNews= async()=>{
        props.setProgress(20)
        const url=`https://newsapi.org/v2/top-headlines?&country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&q=india&page=${page}&pagesize=${props.pageSize}`
        setLoading(true)
        let data=await fetch(url);
        props.setProgress(30)
        let parsedData=await data.json()
        props.setProgress(70)
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        //console.log(totalResults)
        setLoading(false)
        props.setProgress(100)
    }


    const capitalizeFLetter = (string) => {
        return (string[0].toUpperCase() + string.slice(1));
    }

    useEffect(() => {
        // setLoading(true)
        // console.log(loading)
        // console.log("fetch news")
        // axios.get(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=8157a78cb81a48ebac3578c02a2cc6af&q=india&page=1&pagesize=${props.pageSize}`)
        //     .then((response) => {
        //         setLoading(false)
        //         console.log(response); //gives all api content
        //         setData(response.data.articles)
        //         console.log(data) //gives all articles content from api 
        //     }) 


        updateNews();
        document.title = `${capitalizeFLetter(props.category)}-NewsMonkey`
        // eslint-disable-next-line
    },[] )

    //for grt news button    
    // const getNews = () => {
    //     setLoading(true)
    //     console.log("fetch news")
    //     axios.get(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=113fc6d45c94422694bed7cccd6befdd&q=india&page=1&pagesize=${props.pageSize}`)
    //         .then((response) => {
    //             setLoading(false)
    //             console.log(response); //gives all api content
    //             setData(response.data.articles)
    //             console.log(data) //gives all articles content from api 
    //         })
    //     setLoading(false)

    // }

    const Nextpage = async() => {
        // console.log("next")
        // setLoading(true)
        // axios.get(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=8157a78cb81a48ebac3578c02a2cc6af&q=india&page=${page + 1}&pageSize=${props.pageSize}`)

        //     .then((response) => {
        //         setLoading(false)
        //         // console.log(response); gives all api content
        //         setData(response.data.articles)
        //         setPage(page+1)
        //         console.log(page)
        //         console.log(data)  //gives all articles content from api
        //     })


        // console.log(page)
        // setPage(page+1)
        // console.log(page)
        // updateNews();
    }


    const Previous = async() => {
        // console.log("previous")
        // setLoading(true)
        // axios.get(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=8157a78cb81a48ebac3578c02a2cc6af&q=india&page=${page - 1}&pageSize=${props.pageSize}`)
        //     .then((response) => {
        //         setLoading(false)
        //         // console.log(response); gives all api content
        //         setData(response.data.articles)
        //         setPage(page - 1)
        //         console.log(page)
        //         // console.log(data)  //gives all articles content from api
        //     })


        // setPage(page-1)
        // updateNews();
    }

    // const fetchMoreData = async () => {
    //     setLoading(true)
    //     setPage(page + 1)
    //     // console.log(loading)
    //     console.log("fetch news")
    //     axios.get(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=8157a78cb81a48ebac3578c02a2cc6af&q=india&page=${page}&pagesize=${props.pageSize}`)
    //         .then((response) => {
    //             console.log(response); //gives all api content

    //             setArticles(articles.concat(response.data.articles))
    //             setTotalResults(response.data.totalResults)
    //             setLoading(false)
    //             // console.log(data) //gives all articles content from api 
    //         })
    // }
    const fetchMoreData=async ()=>{
        // setPage(page+1)
        const url=`https://newsapi.org/v2/top-headlines?&country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&q=india&page=${page+1}&pagesize=${props.pageSize}`
        setLoading(true)
        let data=await fetch(url);
        let parsedData=await data.json()
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
        setPage(page+1)
        setLoading(false)
    };

    return (

    <>
            <h1 className="text-center" style={{marginTop:"80px"}}>NEWS MONKEY-Top {capitalizeFLetter(props.category)} Headlines</h1>
            {loading && <Spinner />}
            {/* <div className="containor my-3">
                <button className='btn btn-primary' onClick={getNews}>Fetch News</button></div> */}

            <InfiniteScroll style={{overflow:'hidden'}}
                dataLength={articles.length} //This is important field to render the next data
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}
            >
                <div className="container">
                    <div className="row">
                        {articles.map((value) => {
                            return (
                                <div className="col-md-4" key={value.url}>
                                    <Newsitem title={value.title ? value.title.slice(0, 45) : ""} description={value.description ? value.description.slice(0, 45) : ""} image={value.urlToImage ? value.urlToImage : ""} more={value.url ? value.url : ""} date={value.publishedAt} source={value.source.name} />
                                </div>
                            )
                        })}
                    </div>
                </div></InfiniteScroll>
            {/* <div className="container d-flex justify-content-between">
                    <button disabled={page <= 1} type='button' className="btn btn-dark" onClick={Previous}>&larr; Previous</button>
                    <button type='button' className="btn btn-dark" onClick={Nextpage} >&rarr; next</button></div> */}
        </>
    )
}

export default News
