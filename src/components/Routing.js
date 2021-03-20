import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Business from './Business';
import Technology from './Technology';
import Sports from './Sports';
import Entertainment from './Entertainment';
import Home from './Home';
import Search from './Search'
import CustomSerach from './CustomSerach';
import Signup from './Signup';
import Start from './Start';
import Login from './Login';
import UserDashboard from './UserDashboard';
import Dashboard from './Dashboard';
import LocalNav from './LocalNav';
import Edit from './Edit';



const Routing = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/"><Start/></Route>
                <Route exact path="/top-headlines"><Home/></Route>
                <Route exact path="/technolgy"><Technology/></Route>
                <Route exact path="/business"><Business/></Route>
                <Route exact path="/sports"><Sports/></Route>
                <Route exact path="/entertainment"><Entertainment/></Route>
                <Route exact path="/search"><Search/></Route>
                <Route exact path="/custom-search"><CustomSerach/></Route>
                <Route exact path="/signup"><Signup/></Route>
                <Route exact path="/login"><Login/></Route>
                <Route exact path="/additem"><UserDashboard/></Route>
                <Route exact path="/user-detail"><Dashboard/></Route>
                <Route exact path="/edit"><Edit/></Route>
            </Switch>
        </div>
    )
}

export default Routing
