import React, { useState, useContext } from 'react'
import { useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom';
import { ApiContext } from '../ApiContext';
import home from '../image/home.svg';
import logo from '../image/inshorts.png'
import Dashboard from './Dashboard';
const Login = () => {

    const [login, setLogin] = useState({
        email: '',
        password: '',
        emailError: '',
        passwordError: ''
    })
    const [showError,setShowError]=useState(false);
    const check = () => {
        let emailError = "";
        let passwordError = "";
        if (!login.email) {
            emailError = "*Please Enter Email";
        }else{
            setShowError(true);
        }
        if (!login.password) {
            passwordError = "*Please Enter Password";
        } else {
            setShowError(true);
        }
        if (emailError || passwordError) {
            setLogin({ ...login, emailError, passwordError });
            return false;
        }
        return true;
    }
    const { settruevalue,truevalue } = useContext(ApiContext);
    const state = useSelector(state => state.singup.value);
    let history = useHistory();
    const validateLogin = (e) => {
        e.preventDefault();
        check();
        


    state.map((item, index) => {
        {
            if (item.email === login.email && item.password === login.password) {
             settruevalue(true);
                localStorage.setItem('UserDetail', JSON.stringify(item));
                history.push('/top-headlines');
            }
            else {
                check();

            }
        }
    })
}
    return (
        <div>
            {truevalue?<Dashboard/>:<>
            <nav className='navbar'>
                <div className="logo">
                    <Link to="/">
                        <img src={logo} alt="..." />
                    </Link>
                </div>
                <div className="after-logo">
                    <ul>
                        <Link to="/">
                            <li>Home</li>
                        </Link>

                        <Link to="/signup">
                            <li>Signup</li>
                        </Link>
                    </ul>
                </div>
            </nav>
            <div className="container top-class">
                <div className="container d-flex justify-content-center pt-5">
                    <h3 className="text-primary">Login Here to Read the News</h3>
                </div>
                <div className="row cener-div">
                        <div className="col-6  start-image">
                        <img src={home} alt="..." className="h-75 w-100" />
                    </div>
                    <div className="col-6 right-div">
                
                        <form onSubmit={validateLogin}>
                            <div>
                                <div className="row ">
                                    <center>
                                         <label className={showError?'login-error':'d-none'}>
                                         Enter Correct Credentails</label>
                                    </center>
                                    <div className="col-12 d-flex justify-content-center mb-2">  
                                        <label>Email</label>
                                    </div>
                                    <div className="col-12 d-flex justify-content-center mb-2">
                                        <input
                                            value={login.email}
                                            onChange={(e) => {
                                                setLogin({ ...login, email: e.target.value })
                                            }}
                                        />

                                    </div>
                                        <p className="error d-flex-okk">{login.emailError}</p>
                                    <div className="col-12 d-flex justify-content-center d-flex-okk mb-2">
                                        <label>Password</label>
                                    </div>
                                    <div className="col-12 d-flex justify-content-center mb-2">
                                        <input
                                            type="password"
                                            value={login.password}
                                            onChange={(e) => {
                                                setLogin({ ...login, password: e.target.value })
                                            }}
                                        />

                                    </div>
                                        <p className="error d-flex-okk">{login.passwordError}</p>
                                </div>
                            </div>
                            <center>
                                <input type="submit" className="d-flex justify-content-center" />
                            </center> 
                            <center className="mt-4">
                                <p>Create a account <Link to="/signup">Signup</Link></p>
                            </center>
                        </form>
                    </div>
                </div>

            </div>
            </>}
        </div>
    )
}

export default Login;
