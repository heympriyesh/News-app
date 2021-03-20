import React,{useContext} from 'react';
import {ApiContext} from '../ApiContext';

const ShowData = ({props,edit,deleteItem,news}) => {
    const { truevalue } = useContext(ApiContext);

    return (
        <div>
            <div className="container mt-5  mb-5">
                {props.length === 0 ? <div class="text-center">
                    <div class="spinner-border" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div> : props.map((data, index) => (
                    <div className="card shadow p-3 mb-4 bg-body rounded border border-3" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class={truevalue ? "bi bi-pencil-square edit" : "d-none"} onClick={() => edit(index)} viewBox="0 0 16 16">
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class={truevalue ? "bi bi-x-square-fill cancel" : "d-none"} onClick={() => deleteItem(index)} viewBox="0 0 16 16">
                            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z" />
                        </svg>
                        <div className="row " style={{ height: 'auto' }}>
                            <div className="col-md-4">
                                <div >
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
        </div>
    )
}

export default ShowData
