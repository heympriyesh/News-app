

import React, { useState,useEffect ,useContext} from 'react'
import { useDispatch } from 'react-redux'
import { addData } from '../actions/index'
import DatePicker from 'react-datepicker';
import left from '../image/signup.svg';
import { Link, useHistory } from 'react-router-dom';
import logo from '../image/inshorts.png'
import {useSelector} from 'react-redux';
import {ApiContext} from '../ApiContext';
import Dashboard from './Dashboard';

const initialState = {
    firstname: "",
    email: "",
    password: "",
    firstnameError: "",
    emailError: "",
    passwordError: "",
    genderError:""
};

const Signup = () => {
    const [name, setName] = useState(
        {
            firstname: "",
            email: "",
            password: "",
            firstnameError: "",
            emailError: "",
            passwordError: "",
            dateofbirth: "",
            gender:"",
            genderError:""
        }
        );
        const inda=new Date()
    const [selectedDate, setSelectedDate] = useState(inda);
    let history = useHistory();
    let regEmail = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    let regPass = new RegExp(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/);

    useEffect(() => {
        setName({ ...name, dateofbirth: selectedDate.toDateString() });
    }, [selectedDate])

    const dispatch = useDispatch();
    const state = useSelector(state => state.singup.value)
    const {truevalue}=useContext(ApiContext)
    const validate = () => {
        console.log("The value of validation ", name);
        let firstnameError = "";
        let emailError = "";
        let passwordError = "";
        let genderError="";

        if (!name.firstname) {
            firstnameError = "*name cannot be blank";
        }
        if(!name.gender){
            genderError="*Please Select Gender";
        }
        if (!regEmail.test(name.email)) {
            emailError = "*invalid email";
        }
        if (!regPass.test(name.password)) {
            passwordError = "*invalid password"
        }
        if (emailError || firstnameError || passwordError||genderError) {
            setName({ ...name, emailError, firstnameError, passwordError,genderError });
            return false;
        }

        return true;
    }

    const dekhlo = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (isValid) {
            setName({ ...name,dateofbirth:selectedDate })
            if(state.find(person=>person.email===name.email))
            {
                alert("This User already Exist");
            }else{
                dispatch(addData(name));
                setName(initialState);
                history.push('/login')
            }
            // console.log("The name log", name);
           
        }
    }

    return (
        <div>
            {truevalue?<Dashboard/>:<>
            <nav className='navbar'>
                <div className="logo">
                    <Link to="/">
                        <img src={logo} />
                    </Link>
                </div>
                <div className="after-logo">
                    <ul>
                        <Link to="/">
                            <li>Home</li>
                        </Link>

                        <Link to="/login">
                            <li>Login</li>
                        </Link>
                    </ul>
                </div>
            </nav>            <div className="container top-class">
                <center className="mt-4">
                    <h3 className="text-primary">Signup and make your life easy..!!</h3>
                </center>
                <div className="row cener-div">
                    <div className="col-6">
                        <img src={left} />
                    </div>
                    <div className="col-6 right-div">
                        {/* <center> */}

                        <form onSubmit={dekhlo} >
                            <div className="container">
                                <div className="row d-flex justify-content-center">
                                    <div className="col-12">
                                        <label>Name</label>
                                    </div>
                                    <div className="col-12">
                                        <input
                                            placeholder="Enter Your Name"
                                            value={name.firstname}
                                            onChange={(e) => {
                                                setName({ ...name, firstname: e.target.value })
                                            }}
                                        />
                                        <p className="error">{name.firstnameError}</p>
                                    </div>
                                </div>
                                <div className="row d-flex justify-content-center">
                                    <div className="col-12">
                                        <label>Email</label>

                                    </div>
                                    <div className="col-12">
                                        <input
                                            placeholder="Enter Your Email"
                                            value={name.email}
                                            onChange={(e) => {
                                                setName({ ...name, email: e.target.value })
                                            }}
                                        />
                                        <p className="error">{name.emailError}</p>
                                    </div>
                                </div>
                                <div className="row d-flex justify-content-center">
                                    <div className="col-12">
                                        <label>Password</label>
                                    </div>
                                    <div className="col-12">
                                        <input
                                            placeholder="Enter Password"
                                            type="password"
                                            value={name.password}
                                            onChange={(e) => {
                                                setName({ ...name, password: e.target.value })
                                            }}
                                        />
                                        <p className="error">{name.passwordError}</p>
                                    </div>

                                </div>
                                <div className="row d-flex justify-content-center mb-2">
                                    <div className="col-12">
                                        <label>Date of Birth</label>
                                    </div>
                                    <div className="col-12">
                                        <DatePicker
                                            selected={selectedDate}
                                            onChange={date => setSelectedDate(date)}
                                            dateFormat='yyyy-MM-dd'
                                            minDate={new Date('2003-03-12')}
                                            maxDate={new Date()}
                                        />
                                    </div>

                                </div>
                                <div className="row d-flex justify-content-center">
                                    <div className="col-12">
                                        <div onChange={(e)=>{
                                            setName({...name,gender:e.target.value})
                                        }}>
                                            
                                            <input type="radio" value="MALE" name="gender" className="ml-3 mr-2"/>Male
                                         <input type="radio" value="FEMALE" name="gender" className="ml-3"/> Female
                                        </div>
                                        <p className="error">{name.genderError}</p>
                                    </div>
                                </div>
                               <center>
                                    <input type="submit" className="d-flex justify-content-center bg-primary text-white w-25" />
                                   </center> 
                            </div>
                            <center className="mt-4">
                                <p>Already Have a account ? <Link to="/login">Login</Link></p>
                            </center>
                        </form>
                       
                    </div>
                </div>

            </div>
            </>}
        </div>


    )
}

export default Signup;