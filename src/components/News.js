// import React, { useEffect,useState } from 'react'
// import NewsItem from './NewsItem'
// import Spinner from './Spinner';
// import PropTypes from 'prop-types'
// import InfiniteScroll from "react-infinite-scroll-component";

// const News = (props)=>{
//   const [articles, setArticles] = useState([])
//   const [loading, setLoading] = useState(true)
//   const [page, setPage] = useState(1)
//   const [totalResults, setTotalResults] = useState(0)
 
   
//    const capitalizeFirstLetter = (string)=>{
//       return string.charAt(0).toUpperCase() + string.slice(1);
//     }
   
//     // constructor(props){
//     //     super(props);
//     //     // console.log("Hello I am a constructor from News component");
//     //     // this.state = {
//     //     //     articles: [],
//     //     //     loading: true,
//     //     //     page:1,
//     //     //     totalResults:0
//     //     // }
       
//     // }

//    const updateNews = async ()=>{
//       const url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pageSize}`;
//       // this.setState({loading: true});
//       setLoading(true)
//       let data = await fetch(url);
//       let parsedData = await data.json()
//       setArticles(parsedData.articles)
//       setTotalResults(parsedData.totalResults)
//       setLoading(false)
      
//       console.log(parsedData);
//     // //  setState({articles: parsedData.articles, totalResults: parsedData.totalResults,
//     // //          loading:false
                     
//     //   })

//     }

//     useEffect(() => {
//        document.title = `${this.capitalizeFirstLetter(props.category)} - NewsGlobe`;
//       updateNews();
//     }, [])
    
//     // async componentDidMount(){
//     //     // let url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=dcfb93283a9e4a15b7343e194de2f93d&page=1&pagesize=${props.pageSize}`;
//     //     // this.setState({loading: true});
//     //     // let data = await fetch(url);
//     //     // let parsedData = await data.json()
//     //     // console.log(parsedData);
//     //     // this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults,
//     //     //        loading:false        
//     //     // })
        
//     // }

//   const handlePrevClick = async ()=>{
//         // let url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=dcfb93283a9e4a15b7343e194de2f93d&page=${this.state.page - 1}&pagesize=${props.pageSize}`;
//         // this.setState({loading: true});
//         // let data = await fetch(url);
//         // let parsedData = await data.json()
//         // console.log(parsedData);
//         //  this.setState({
//         //     page: this.state.page - 1,
//         //     articles: parsedData.articles,
//         //     loading:false
//          //})
//         //  this.setState({page: this.state.page - 1});
//         setPage(page-1)
//          updateNews();

//     }

//    const handleNextClick = async ()=>{
//         // if (!(this.state.page + 1 > Math.ceil(this.state.totalResult/props.pageSize))){
//         // let url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=dcfb93283a9e4a15b7343e194de2f93d&page=${this.state.page + 1}&pagesize=${props.pageSize}`;
//         // this.setState({loading: true});
//         // let data = await fetch(url);
//         // let parsedData = await data.json()
//         //  this.setState({
//         //     page: this.state.page + 1,
//         //     articles: parsedData.articles,
//         //     loading: false
//         //  })
//         // }
//         // this.setState({page: this.state.page + 1});
//         setPage(page+1)
//         updateNews();
// }
//  const fetchMoreData =async() => {
//   // this.setState({page: this.state.page + 1})

//   const url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pagesize=${props.pageSize}`;
//   setPage(page+1)
//   // this.setState({loading: true});
//   let data = await fetch(url);
//   let parsedData = await data.json()
//   setArticles(articles.concat(parsedData.articles))
//   setTotalResults(parsedData.totalResults)
//   console.log(parsedData);
//   // this.setState({
//   //           articles:articles.concat(parsedData.articles),
//   //               totalResults: parsedData.totalResults
                 
//   // })
// };

 
//     return (
//       <>
//         <h1 className="text-center" style={{margin: '35px 0px', marginTop: '90px'}}>NewsGlobe - Top {capitalizeFirstLetter(props.category)} Headlines  </h1>
//         {loading && <Spinner />}
//         <InfiniteScroll
//           dataLength={articles.length}
//           next={fetchMoreData}
//           hasMore={articles.length !== totalResults}
//           loader={<Spinner />}
//         >
         
//          <div className="container">

    
    
//         <div className="row">
//         {articles.map((element)=>{
//               return <div className="col-md-4" key={element.url}>
//                  <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
//             </div>
//         })}
//         </div>
//         </div>
        
//         </InfiniteScroll>
//        </>

       
//     )
  
// }


// News.defaultProps = {
//   country: 'in',
//   pageSize: 8,
//   category: 'general',
// }

// News.propTypes = {
//   country: PropTypes.string,
//   pageSize:PropTypes.number,
//   category: PropTypes.string
// }

// export default News
















import React, {useEffect,useState} from 'react'

import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props)=>{
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    } 

    const updateNews = async ()=> {
        // props.setProgress(10);
        const url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pageSize}`;
        setLoading(true)
        let data = await fetch(url);
        // props.setProgress(30);
        let parsedData = await data.json()
        // props.setProgress(70);
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
        // props.setProgress(100);
    }

    useEffect(() => {
        document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;
        updateNews(); 
        // eslint-disable-next-line
    }, [])


    const fetchMoreData = async () => {   
      const url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pagesize=${props.pageSize}`;
        setPage(page+1) 
        let data = await fetch(url);
        let parsedData = await data.json()
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
      };
 
        return (
            <>
                <h1 className="text-center" style={{ margin: '35px 0px', marginTop: '90px' }}>NewsMonkey - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
                {loading && <Spinner />}
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Spinner/>}
                > 
                    <div className="container">
                         
                    <div className="row">
                        {articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                    </div>
                    </div> 
                </InfiniteScroll>
            </>
        )
    
}


News.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general',
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}

export default News















