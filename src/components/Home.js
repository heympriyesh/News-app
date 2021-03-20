import React, { useContext,useState,usetopHeadlineData } from 'react';

import { useSelector,useDispatch } from 'react-redux';
import Nav from './Nav';
import {ApiContext} from '../ApiContext';
import Login from './Login';
import news from '../image/news.jpg'
import { removeTopnews } from '../actions';
import Edit from './Edit'
import ShowData from './ShowData'
const Home = () => {
    let topHeadlineData = useSelector(state => state.top.top);
    const { truevalue } = useContext(ApiContext);
    const dispatch=useDispatch();
    const deleteItem = (index) => {
        topHeadlineData=topHeadlineData.filter((x,id) => (id !== index));
            console.log("delete filter",topHeadlineData)
            dispatch(removeTopnews(topHeadlineData))
            console.log("topHeadlineData Delte Filter",topHeadlineData.length)
        }
    const [editCheck,seteditCheck]=useState(true);

        const [dash,setDash]=useState({
            title:'',
            urlToImage:'',
            description:'',
            author:'',
            publishedAt:'',
            id:''
    
        })
    const edit = (index) => {
        console.log("This is index value", index);
        setDash({ title: topHeadlineData[index].title, urlToImage: topHeadlineData[index].urlToImage, description: topHeadlineData[index].description, author: topHeadlineData[index].author, publishedAt: topHeadlineData[index].publishedAt, id: index });
        seteditCheck(!editCheck);
    }
    return (
        <>
        {editCheck?
        <div>
           <><Nav />
                <>
                    <ShowData props={topHeadlineData} truevalue={truevalue} edit={edit} deleteItem={deleteItem} news={news} />
                </>
            </> 
        </div>:<>
            <Edit dash1={dash} seteditCheck={seteditCheck} editCheck={editCheck}/>
        </>}
        </>
        
    )
}

export default Home

