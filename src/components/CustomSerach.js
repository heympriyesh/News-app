
import React, { useState, useContext } from 'react'
import Nav from './Nav'
import DatePicker from 'react-datepicker';
import { useDispatch, useSelector } from 'react-redux';
import 'react-datepicker/dist/react-datepicker.css'
import Moment from 'moment';
import { ApiContext } from '../ApiContext'
import axios from 'axios';
import { topCustom } from '../actions'
const CustomSerach = () => {


    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedDate1, setSelectedDate1] = useState(null);
    const [dropvalue, setDropValue] = useState('');


    const [submit, setSubmit] = useState();
    const { API_KEY } = useContext(ApiContext);
    const dispatch = useDispatch();
    const state = useSelector(state => state.custom.custom);
    const from = Moment(selectedDate).format('YYYY-MM-DD');
    const to = Moment(selectedDate1).format('YYYY-MM-DD');


    const handleSubmit = (e) => {
        console.log(`https://newsapi.org/v2/everything?q=${submit}&from=${from}&to=${to}&sortBy=${dropvalue}&apiKey=${API_KEY}`);
        e.preventDefault();
        console.log("The value of submitted Data", submit);
        const fetchData = async () => {
            const value = await axios.get(`https://newsapi.org/v2/everything?q=${submit}&from=${from}&to=${to}&sortBy=${dropvalue}&apiKey=${API_KEY}`);
            console.log("Custom Search Value", value.data.articles)
            dispatch(topCustom(value.data.articles));
        }
        fetchData();
    }
    return (
        <div>
            <Nav />
            <div className="date-picker d-flex justify-content-center custom-search-div">
                <input type="text"
                    className="search-select"
                    value={submit}
                    onChange={(e) => setSubmit(e.target.value)}
                    placeholder="Search" />
                <span className="text-dark text-uppercase font-weight-bold">from</span>
                <DatePicker
                    selected={selectedDate}
                    onChange={date => setSelectedDate(date)}
                    dateFormat='yyyy-MM-dd'
                    maxDate={new Date()}
                />
                <span className="text-dark text-uppercase font-weight-bold">to</span>
                <DatePicker
                    selected={selectedDate1}
                    onChange={date => setSelectedDate1(date)}
                    dateFormat='yyyy-MM-dd'
                    minDate={selectedDate}
                    maxDate={new Date()}
                />
                <select
                    className="custom-select search-select"
                    onChange={(e) => {
                        const dropvalue = e.target.value;
                        setDropValue(dropvalue);
                    }}>
                    <option value="relevancy">Relevancy</option>
                    <option value="popularity">Popularity</option>
                    <option value="publishedAt">Pulished At</option>
                </select>
                <button className="btn btn-primary" onClick={handleSubmit}>Search</button>
            </div>
            <>
                <div className="container mt-5  mb-5">
                    {state.length === 0 ? <div class="text-center">
                        <div class="spinner-border" role="status">
                            <span class="sr-only">Loading...</span>
                        </div>
                    </div> : state[0].map((data, index) => (
                        <div className="card shadow p-3 mb-4 bg-body rounded border border-3" key={index}>

                            <div className="row " style={{ height: 'auto' }}>
                                <div className="col-md-4">
                                    <div>
                                        <img src={data.urlToImage} alt="..." className="w-75 news-image" style={{ height: '250px' }} />
                                    </div>
                                </div>
                                <div className="col-md-8 position-relative">
                                    <div className="card-body">
                                        <p className="card-text p-title"><b>{data.title}</b></p>
                                        <span>{data.author}</span>   <span>{data.publishedAt}</span>
                                        <p className="card-text"><br />{data.description}</p>
                                        <a href={data.url} target="_blank" rel="noreferrer" className="btn btn-primary">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </>
        </div>
    )
}

export default CustomSerach

