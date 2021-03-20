// import React, { useState,useContext} from 'react'
// import {Link,useHistory} from 'react-router-dom';
// import logo from '../image/inshorts.png';
// import axios from 'axios';
// // import Search from './Search';
// import {topSearch} from '../actions'
// import { ApiContext } from '../ApiContext';

// import { useDispatch, useSelector } from 'react-redux';
// const LocalNav=()=>{
//     const [submit,setSubmit]=useState();
//     const [navbar,setNavbar]=useState(false);
//     // const API_KEY = useContext(ApiContext);
//     const dispatch = useDispatch();
//     let history=useHistory();
//     const state = useSelector(state => state.search.search);
//     const {API_KEY, truevalue, settruevalue}=useContext(ApiContext);

//     const handleSubmit=(e)=>{
//         e.preventDefault();
//         console.log("VAlue is logged")
//         console.log("The value of submitted Data",submit);
//         const fetchData = async () => {
//             const value = await axios.get(`https://newsapi.org/v2/everything?q=${submit}&apiKey=${API_KEY}`);
//                 console.log("Serach value after Submit",value.data.articles)
//                  dispatch(topSearch(value.data.articles));
//         }
//         fetchData();
//         console.log("Serach State length,",state.length);
//         history.push('/search');
//     }
//     const setlogut=()=>{
//         settruevalue(false);
//         // localStorage.clear();
//     }
//     //     const changeBackground=()=>{
// //         if(window.scrollY>=80)
// //         {
// //             setNavbar(true);
// //         }else{
// //             setNavbar(false)
// //         }
// //     };
// //     window.addEventListener('scroll',changeBackground)
//     return(
//         <>
//         <nav className={navbar?"navbar active navbar-expand-lg navbar-light bg-light":"navbar navbar-expand-lg navbar-light bg-light"}>
//   <Link className="navbar-brand logo" to="/">                    
//       <img src={logo} alt="..."/>
// </Link>
//   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//     <span className="navbar-toggler-icon"></span>
//   </button>

//   <div className="collapse navbar-collapse" id="navbarSupportedContent">
//     <ul className="navbar-nav mr-auto">
//       <li className="nav-item active">
//         <Link className="nav-link" >Top News
//          <span className="sr-only">(current)</span></Link>
//       </li>
//       <li className="nav-item">
//         <Link className="nav-link" to="/technology">Link</Link>
//       </li>
//       <li className="nav-item">
//         <Link className="nav-link" to="/business">Business</Link>
//       </li>
//       <li className="nav-item">
//         <Link className="nav-link" to="/sports">Sports</Link>
//       </li>
//       <li className="nav-item">
//         <Link className="nav-link" to="/entertainment">Entertainment</Link>
//       </li>
//       <li className="nav-item">
//         <Link className="nav-link" to="/custom-search">CustomSerach</Link>
//       </li>
     
//       <li className="nav-item">
//         <Link className="nav-link" to="/additem">AddItem</Link>
//       </li>
//       <li className="nav-item">
//         <Link className="nav-link" to="/user-detail">User Details</Link>
//       </li>
//     </ul>
//     <form className="form-inline my-2 my-lg-0" onSubmit={handleSubmit}>
//       <input className="form-control mr-sm-2" type="search"
//       value={submit}
//         onChange={(e)=>setSubmit(e.target.value)}
//        placeholder="Search" aria-label="Search"/>
//       <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//     </form>
//   </div>
//   <button onClick={setlogut}>
//                     Logout
//                 </button>
// </nav>
//         </>
//     )
// }
// export default LocalNav;