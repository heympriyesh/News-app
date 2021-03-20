import React, { useContext, useState } from 'react'

import { useSelector, useDispatch } from 'react-redux';
import Nav from './Nav';
import news from '../image/news.jpg'
import { ApiContext } from '../ApiContext';
import { removeBusiness } from '../actions';
import Edit from './Edit';
import ShowData from './ShowData';
const Business = () => {

    let state = useSelector(state => state.business.busin);
    const { truevalue } = useContext(ApiContext);
    const dispatch = useDispatch();
    const deleteItem = (index) => {
        state = state.filter((x, id) => (id !== index));
        console.log("delete filter", state)
        dispatch(removeBusiness(state))
        console.log("State Delte Filter", state.length)
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
        setDash({ title: state[index].title, urlToImage: state[index].urlToImage, description: state[index].description, author: state[index].author, publishedAt: state[index].publishedAt, id: index });
        seteditCheck(!editCheck);
    }
    return (
        <>
            {editCheck ?
                <div>
                    <><Nav />
                        <>

                            <ShowData props={state} truevalue={truevalue} edit={edit} deleteItem={deleteItem} news={news} />
                        </>
                    </>
                </div> : <>
                    <Edit dash1={dash} seteditCheck={seteditCheck} editCheck={editCheck} />
                </>}
        </>
    )
}

export default Business
