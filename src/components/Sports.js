import React, { useContext, useState } from 'react'

import { useSelector, useDispatch } from 'react-redux';
import Nav from './Nav';
import news from '../image/news.jpg'
import { ApiContext } from '../ApiContext';
import { removeSports } from '../actions';
import Edit from './Edit';
import ShowData from './ShowData';
const Sports = () => {

    let sportsData = useSelector(sportsData => sportsData.Sports.sports);
    const { truevalue } = useContext(ApiContext);
    const dispatch = useDispatch();
    const deleteItem = (index) => {
        sportsData = sportsData.filter((x, id) => (id !== index));
        console.log("delete filter", sportsData)
        dispatch(removeSports(sportsData))
        console.log("sportsData Delte Filter", sportsData.length)
    }
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
        setDash({ title: sportsData[index].title, urlToImage: sportsData[index].urlToImage, description: sportsData[index].description, author: sportsData[index].author, publishedAt: sportsData[index].publishedAt, id: index });
        seteditCheck(!editCheck);
    }
    return (
        <>
            {editCheck ?
                <div>
                    <><Nav />
                        <>  

                            <ShowData props={sportsData} truevalue={truevalue} edit={edit} deleteItem={deleteItem} news={news} />

                        </>
                    </>
                </div> : <>
                    <Edit dash1={dash} seteditCheck={seteditCheck} editCheck={editCheck} />
                </>}
        </>
    )
}

export default Sports

