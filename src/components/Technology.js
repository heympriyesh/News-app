import React, { useContext, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import Nav from './Nav';
import news from '../image/news.jpg'
import Login from './Login';
import { ApiContext } from '../ApiContext';
import { removeTechnology } from '../actions';
import Edit from './Edit';
import ShowData from './ShowData';


const Technology = () => {
    let technologyData = useSelector(state => state.technolgy.tech);
    const { truevalue } = useContext(ApiContext);


    const dispatch = useDispatch();
    const deleteItem = (index) => {
        technologyData = technologyData.filter((x, id) => (id !== index));
        dispatch(removeTechnology(technologyData))
    }
    console.log("Checking indesx", technologyData[0])
    const [editCheck, seteditCheck] = useState(true);
    const [dash, setDash] = useState({
        title: '',
        urlToImage: '',
        description: '',
        author: '',
        publishedAt: '',
        id: ''

    })
    const edit = (index) => {
        console.log("This is index value", index);
        setDash({ title: technologyData[index].title, urlToImage: technologyData[index].urlToImage, description: technologyData[index].description, author: technologyData[index].author, publishedAt: technologyData[index].publishedAt, id: index });
        seteditCheck(!editCheck);
    }
    return (
        <>
            {editCheck ?
                <div>
                    <><Nav />
                        <ShowData props={technologyData} truevalue={truevalue} edit={edit} deleteItem={deleteItem} news={news} />
                    </>
                </div> : <>
                    <Edit dash1={dash} seteditCheck={seteditCheck} editCheck={editCheck} />
                </>}
        </>
    )
}

export default Technology
