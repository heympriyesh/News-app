
import React, { useState ,useContext} from 'react'
import {  useDispatch} from 'react-redux';
import {updateTopnews,updateTechnology,updateBusiness,updateSports, updateEntertainment} from '../actions'
import Nav from './Nav';
import news from '../image/news.jpg'
import { ApiContext } from '../ApiContext';
import {useHistory, useLocation} from 'react-router-dom';
import Login from './Login';

const empty={
    title:'',
    urlToImage:news,
    description:'',
    author:'',
    publishedAt:'',
}
const Edit = ({dash1,seteditCheck,editCheck}) => {
    const [dropvalue, setDropValue] = useState(window.location.pathname);
    let newDate = new Date()
     const dispatch = useDispatch();
     const location=useLocation();
     const history=useHistory();
    // const { truevalue} =useContext(ApiContext);
    // console.log("Edit dropvalue",dropvalue)
    const [dash,setDash]=useState({
        title:dash1.title,
        urlToImage:dash1.urlToImage,
        description:dash1.description,
        author:dash1.author,
        publishedAt:dash1.publishedAt,
        id:dash1.id

    })
    const { truevalue}=useContext(ApiContext)
    const handleDashboard=(e)=>{
        e.preventDefault();
        console.log("category",dropvalue);
            if(dash.title.length>0)
                {
                    if(dash.urlToImage.length>0)
                    {
                       if(dash.description.length>0)
                       {
                           if (dropvalue ==='/technolgy')
                            {
                                    dispatch(updateTechnology(dash));
                                    setDash(empty);
                            }
                           if (dropvalue === '/business') {
                                
                                   dispatch(updateBusiness(dash));
                                   setDash(empty);
                                   
                            }
                           if (dropvalue === '/top-headlines') {
                                    dispatch(updateTopnews(dash));
                                    setDash(empty);
                            }
                           if (dropvalue === '/sports') {
                                    dispatch(updateSports(dash));
                                    setDash(empty);
                            }
                           if (dropvalue === '/entertainment') {
                                
                                dispatch(updateEntertainment(dash));
                                setDash(empty);

                            }
                        }
                    }
                }
                seteditCheck(!editCheck);
    }

    return (
            // {truevalue?
        <div>
           
                <Nav />
                <form onSubmit={handleDashboard} className="container mt-5">
                    <div className="form-group">
                        <label >Title</label>
                        <input type="text" className="form-control"
                            placeholder="Enter Title"
                            value={dash.title}
                            onChange={(e) => {
                                setDash({ ...dash, title: e.target.value })
                            }}
                        />
                    </div>
                    <div className="form-group">
                        <label >Select Category</label>
                        <select
                            className="custom-select"
                            value={dropvalue}
                            onChange={(e) => {
                                const dropvalue = e.target.value;
                                setDropValue(dropvalue);
                            }}>
                        <option value="/business">Business</option>
                        <option value="/entertainment">Entertainment</option>
                        <option value="/sports">Sports</option>
                        <option value="/top-headlines">Top Headline</option>
                        <option value="/technolgy">Technology</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label className="form-group">Image Link</label>
                        <br />
                        <input
                            className="form-control"
                            value={dash.urlToImage}
                            onChange={(e) => {
                                setDash({ ...dash, urlToImage: e.target.value })
                            }}
                        />
                    </div>

                    <div className="form-group">
                        <label for="exampleFormControlTextarea1">Descripton</label>
                        <textarea className="form-control"
                            value={dash.description}
                            onChange={(e) => {
                                setDash({ ...dash, description: e.target.value })
                            }}
                            rows="3"></textarea>
                    </div>
                    <center>
                        <input type="submit" className="d-flex justify-content-center p-3" />
                    </center>
                </form>
        </div>
    )
}

export default Edit
