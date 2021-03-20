import React, { useEffect,useContext } from 'react'
import { topEntertain } from '../../actions';
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { ApiContext } from '../../ApiContext';

const TopEntertainment = () => {
    // console.log("Checking the value")
    const {API_KEY} = useContext(ApiContext);
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchData = async () => {
            // setLoading(true);
            const value = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=${API_KEY}`);
            console.log(value)
            // setData(value.data.articles);
            dispatch(topEntertain(value.data.articles));
            // setLoading(false);
        }
        fetchData();
    }, [])

    return (
        <div>

        </div>
    )
}

export default TopEntertainment;
