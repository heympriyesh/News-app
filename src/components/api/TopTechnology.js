import React, { useEffect,useContext } from 'react'
import { topTech } from '../../actions';
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { ApiContext } from '../../ApiContext';

const TopTechnology = () => {
    const {API_KEY} = useContext(ApiContext);

    const dispatch = useDispatch();
    useEffect(() => {
        const fetchData = async () => {
            const value = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=${API_KEY}`);
            // console.log(value)
            dispatch(topTech(value.data.articles));
        }
        fetchData();
    }, [])

    return (
        <div>

        </div>
    )
}

export default TopTechnology;
