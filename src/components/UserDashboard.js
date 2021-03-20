
import React, { useState, useContext } from 'react'
import { useDispatch } from 'react-redux';
import { saveTech, saveEnter, saveBusiness, saveSports, saveTop, deleteItem } from '../actions'
import Nav from './Nav';
import news from '../image/news.jpg'
import { ApiContext } from '../ApiContext';
import Modal from 'react-awesome-modal';

const empty = {
    title: '',
    urlToImage: news,
    description: '',
    author: '',
    publishedAt: '',
}
const UserDashboard = () => {
    const [dropvalue, setDropValue] = useState('business');
    const [visible, setVisible] = useState(false);
    let newDate = new Date()
    const dispatch = useDispatch();
    const [dash, setDash] = useState({
        title: '',
        urlToImage: news,
        description: '',
        author: '',
        publishedAt: newDate.toString(),

    })
    const { truevalue } = useContext(ApiContext)


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
 




    const handleDashboard = (e) => {
        e.preventDefault();
        if (dash.title.length > 0) {
            if (dash.description.length > 0) {
                if (dropvalue === 'technology') {
                    dispatch(saveTech(dash));
                    setDash(empty);
                }
                if (dropvalue === 'business') {
                    dispatch(saveBusiness(dash));
                    setDash(empty);
                }
                if (dropvalue === 'top') {
                    dispatch(saveTop(dash));
                    setDash(empty);
                }
                if (dropvalue === 'sports') {
                    dispatch(saveSports(dash));
                    setDash(empty);

                }
                if (dropvalue === 'entertain') {
                    dispatch(saveEnter(dash));
                    dispatch(deleteItem(dash));

                    setDash(empty);

                }

            } else {
                alert("Plese fill description field");
            }
        } else {
                alert("Title Cannot Be empty");
        }
    }

    return (
        // {truevalue?<>
        <div>
            <Nav />
            <form onSubmit={handleDashboard} className="container mt-5">
                <div className="form-group">
                    <label >Title</label>
                    <input type="text" className="form-control"
                        placeholder="Enter Title"
                        value={dash.title}
                        onChange={(e) => {
                            setDash({ ...dash, title: e.target.value })
                        }}
                    />
                </div>
                <div className="form-group">
                    <label >Select Category</label>
                    <select
                        className="custom-select"
                        onChange={(e) => {
                            const dropvalue = e.target.value;
                            setDropValue(dropvalue);
                        }}>
                        <option value="business">Business</option>
                        <option value="entertain">Entertainment</option>
                        <option value="sports">Sports</option>
                        <option value="top">Top Headline</option>
                        <option value="technology">Technology</option>
                    </select>
                </div>
                <div className="form-group">
                    <label className="form-group">Image Link</label>
                    <br />
                    <input
                        className="form-control"
                        value={dash.urlToImage}
                        onChange={(e) => {
                            setDash({ ...dash, urlToImage: e.target.value })
                        }}
                    />
                </div>

                <div className="form-group">
                    <label for="exampleFormControlTextarea1">Descripton</label>
                    <textarea className="form-control"
                        value={dash.description}
                        onChange={(e) => {
                            setDash({ ...dash, description: e.target.value })
                        }}
                        rows="3"></textarea>
                </div>
                <center>
                    <input type="submit" className="d-flex justify-content-center p-3" onClick={handleShow} />
                </center>
            </form>
            {/* </>:<Login/>} */}

        </div>
    )
}

export default UserDashboard
