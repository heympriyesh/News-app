import React, { useContext, useEffect, useEntertainmentData, useState } from 'react'
import { useDispatch, useSelector, useStore } from 'react-redux';
import Nav from './Nav';
import news from '../image/news.jpg'
import { ApiContext } from "../ApiContext";
import { removeEntertain } from '../actions'
import Edit from './Edit';
import ShowData from './ShowData';
const Entertainment = () => {

    let EntertainmentData = useSelector(state => state.enterain.enter);
    const { truevalue } = useContext(ApiContext);
    const dispatch = useDispatch();
    const deleteItem = (index) => {
        EntertainmentData = EntertainmentData.filter((x, id) => (id !== index));
        console.log("delete filter", EntertainmentData)
        dispatch(removeEntertain(EntertainmentData))
        console.log("EntertainmentData Delte Filter", EntertainmentData.length)
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
        console.log("This is index value", index);
        setDash({ title: EntertainmentData[index].title, urlToImage: EntertainmentData[index].urlToImage, description: EntertainmentData[index].description, author: EntertainmentData[index].author, publishedAt: EntertainmentData[index].publishedAt, id: index });
        seteditCheck(!editCheck);
    }
    return (
        <>
            {editCheck ?
                <div>
                    <><Nav />
                        <>
                            <ShowData props={EntertainmentData} truevalue={truevalue} edit={edit} deleteItem={deleteItem} news={news} />
                        </>
                    </>
                </div> : <>
                    <Edit dash1={dash} seteditCheck={seteditCheck} editCheck={editCheck} />
                </>}
        </>
    )
}

export default Entertainment
