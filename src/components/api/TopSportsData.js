import React, { useEffect,useContext } from 'react'
import { topSports } from '../../actions';
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { ApiContext } from '../../ApiContext';

const TopSportsData = () => {
    // console.log("Checking the value")
    const {API_KEY }= useContext(ApiContext);

    const dispatch = useDispatch();
    useEffect(() => {
        const fetchData = async () => {
            const value = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=${API_KEY}`);
            // console.log(value)
            dispatch(topSports(value.data.articles));
        }
        fetchData();
    }, [])

    return (
        <div>

        </div>
    )
}

export default TopSportsData;
