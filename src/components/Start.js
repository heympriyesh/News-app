import React from 'react'
import logo from '../image/inshorts.png';
import home from '../image/home.svg';
import { Link } from 'react-router-dom';
const Start = () => {
    return (
        <div>
            <nav className="d-flex justify-content-around  navbar">
                <div className="logo">
                    <img src={logo} />

                </div>
                <div className="after-logo">
                    <ul>
                        <Link to="/top-headlines">
                            <li className="start-link">Read More</li>
                        </Link>
                        <Link to="/signup"><li className="start-link">Signup</li></Link>
                        <Link to="/login"><li className="start-link">Login</li></Link>

                    </ul>
                </div>

            </nav>
            <div className="for-centre container">
                <div className="middle-me">
                    <div className="row">
                        <div className="col-6 start-image">
                            <img src={home} alt="image" />
                        </div>
                        <div className="col-6 main-content">
                            <div>
                                <h2 className="text-primary mb-4">Stay Informed in Less Words</h2>
                                <p className="main-content-p">
                                    We understand you don’t have time to go through long news
                                    articles everyday. So we cut the clutter and deliver them,
                                    in 60-word shorts. Short news for the new Generation.
                                            </p>
                                <center>
                                    <Link to="/top-headlines"><button
                                        className="start-login">
                                        Start Reading...!
                                          </button></Link>
                                </center>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
           

        </div>
    )
}

export default Start
