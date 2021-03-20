import React, {useContext } from 'react';
import male from '../image/male.svg';
import female from '../image/female.svg';
import Nav from './Nav';
import {ApiContext} from '../ApiContext'

import Login from './Login';

const Dashboard = () => {
    const { truevalue}= useContext(ApiContext);

    var locavalue = JSON.parse(localStorage.getItem("UserDetail"));

    return (
        <div>
                {truevalue?<>
                <Nav />
                <div className="for-centre">
                    <div className="middle-me bg-dark">
                        <img src={!locavalue ? '' : locavalue.gender === "MALE" ? male : female} alt="..." className="rounded d-flex justify-center h-25 w-25 container mt-3" />
                        <div className="container">
                            <div className="row d-flexr">
                                <hr className="bg-white container" />

                                <div className="col-6 text-white d-flex justify-content-center">
                                    Name
                                </div>
                                <div className="col-6 text-white">
                                    <p>{locavalue.firstname}</p>
                                </div>
                                <br />
                                <hr className="bg-white container" />
                                <div className="col-6 text-white d-flex justify-content-center">
                                    Email
                                </div>
                                <div className="col-6 text-white">
                                    <p>{locavalue.email}</p>
                                </div>
                                <hr className="bg-white container" />

                                <div className="col-6 text-white d-flex justify-content-center">
                                    Gender
                                </div>
                                <div className="col-6 text-white">
                                    <p>{locavalue.gender}</p>
                                </div>
                                <hr className="bg-white container" />

                                <div className="col-6 text-white d-flex justify-content-center">
                                    Date of Birth
                                </div>
                                <div className="col-6 text-white">
                                    <p>{locavalue.dateofbirth}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div></>:<Login/>}
                
           
        </div>
    )
}

export default Dashboard
