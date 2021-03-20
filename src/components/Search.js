import React,{useContext} from 'react'
import Nav from './Nav'
import { useSelector } from 'react-redux';
import Login from './Login';
import { ApiContext } from '../ApiContext';
import news from '../image/news.jpg'
const Search = () => {
    const state = useSelector(state => state.search.search);
    const {truevalue}=useContext(ApiContext);
    return (
        <div>
              <><Nav />
                <>
                    <div className="container mt-5  mb-5">
                        {state.length === 0 ? <div class="text-center">
                        <div class="spinner-border" role="status">
                            <span class="sr-only">Loading...</span>
                        </div>
                    </div> : state[0].map((data, index) => (
                            <div className="card shadow p-3 mb-4 bg-body rounded border border-3" >

                                <div className="row " style={{ height: 'auto' }}>
                                    <div className="col-md-4">
                                        <div>
                                            <img src={data.urlToImage === null ? news : data.urlToImage} alt="..." className="w-75 news-image" style={{ height: '250px' }} />
                                        </div>
                                    </div>
                                    <div className="col-md-8 position-relative">
                                        <div className="card-body">
                                            <p className="card-text p-title"><b>{data.title}</b></p>
                                            <span>{data.author}</span>   <span>{data.publishedAt}</span>
                                            <p className="card-text"><br />{data.description}</p>
                                            <a href={data.url} target="_blank" className="btn btn-primary">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            </> 
        </div>
    )
}

export default Search
