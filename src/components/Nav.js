import React, { useState, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom';
import logo from '../image/inshorts.png';
import axios from 'axios';
import { topSearch } from '../actions'
import { ApiContext } from '../ApiContext';

import { useDispatch, useSelector } from 'react-redux';

const Nav = () => {
    const [submit, setSubmit] = useState();
    const [navbar, setNavbar] = useState(false);
    const dispatch = useDispatch();
    let history = useHistory();
    const state = useSelector(state => state.search.search);

    const { API_KEY, truevalue, settruevalue } = useContext(ApiContext);
    const setlogut = () => {
        settruevalue(false);
        // localStorage.clear();
    }
    const setlogin = () => {
        history.push("/login")
    }
    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setNavbar(true);
        } else {
            setNavbar(false)
        }
    };
    window.addEventListener('scroll', changeBackground)
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("VAlue is logged")
        console.log("The value of submitted Data", submit);
        const fetchData = async () => {
            const value = await axios.get(`https://newsapi.org/v2/everything?q=${submit}&apiKey=${API_KEY}`);
            console.log("Serach value after Submit", value.data.articles)
            dispatch(topSearch(value.data.articles));
        }
        fetchData();
        console.log("Search from data");
        history.push('/search');
    }
    return (
        <div>
            <nav className={navbar ? 'navbar active' : 'navbar'}>
                <div className="logo">
                    <Link to="/">
                        <img src={logo} alt="..." />
                    </Link>
                </div>
                <div className="after-logo">
                    <ul>
                        <Link to="/top-headlines">
                            <li>Top News</li>
                        </Link>

                        <Link to="/technolgy">
                            <li>Technology</li>
                        </Link>

                        <li>
                            <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle d-flex justify-content-center res bg-primary" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    More Category
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <Link className="dropdown-item" to="/business">Business</Link>
                                    <Link className="dropdown-item" to="/sports">Sports</Link>
                                    <Link className="dropdown-item" to="/entertainment">Entertainment</Link>
                                    <Link className="dropdown-item" to="/custom-search">Custom Search</Link>
                                </div>
                            </div>
                        </li>
                        {truevalue ? <Link to="/additem">
                            Add Item
                        </Link> : <></>}
                        {truevalue ? <Link to="/user-detail">
                            <li>User Details</li>
                        </Link> : <></>}
                        <li>
                            <form onSubmit={handleSubmit} className="mr-2">

                                <input type="text"
                                    className="control-search-width"
                                    value={submit}
                                    onChange={(e) => setSubmit(e.target.value)}
                                    placeholder="Search" />
                                <input type="submit" className="in-res btn btn-primary ml-2  res-btn" value="Search" />
                            </form>
                        </li>
                        <li>
                            {truevalue ? <button onClick={setlogut} className="btn btn-primary res-btn">
                                Logout
                </button> : <button onClick={setlogin} className="btn btn-primary res-btn">
                                    Login
                </button>}

                        </li>
                    </ul>
                </div>
                <div className="d-flex justify-content-between">
                </div>
            </nav>
            <div className="h-25 w-100 bg-dark">

            </div>

        </div>
    )
}

export default Nav;









