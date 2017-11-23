import React from "react";
import "./app.less"

import {HashRouter as Router, Route, NavLink} from "react-router-dom"
import {ConnectedRouter} from 'react-router-redux'
import createHistory from 'history/createHashHistory'

import Home from "../Home/home";
import Identify from "../Identify/identify";
import Profile from "../Profile/index.js";
import Login from '../Login/index.js'
import Register from '../Register/index.js'
import RegSuc from '../RegSuc/index.js'
import Cart from "../Cart/cart";
import Classify from "../Classify/classify";
import Search from "../Search/search";
import Classifyof from "../Classifyof/classifyof";
import Tab from "../../components/Tab/tab";



const history = createHistory();
export default class App extends React.Component {
    render() {
        const RouteWithSubRoutes = (route) => (
            <Route path={route.path} render={props => (
                // pass the sub-routes down to keep nesting
                <route.component {...props} routes={route.routes}/>
            )}/>
        )

        return (
            <ConnectedRouter history={history}>
                <div>
                    <Route exact path="/" component={Home}/>
                    <Route path="/identify" component={Identify}/>
                    <Route path="/classify" component={Classify}/>
                    <Route path="/cart" component={Cart}/>
                    <Route path="/profile" component={Profile} exact>
                    </Route>
                    <Route path="/profile/addr" component={Addr} exact></Route>
                    <Route path="/profile/addr/detail" component={AddrDetail}></Route>

                    <Route path="/login" component={Login}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/regsuc" component={RegSuc}/>
                    <Route path="/forget" component={Forget}/>
                    
                    <Route exact path="/" component={Home} />
                    <Route path="/identify" component={Identify} />
                    <Route path="/classify" component={Classify} />
                    <Route path="/search" component={Search} />
                    <Route path="/classifyof" component={Classifyof} />
                    <Route path="/cart" component={Cart} />
                    <Route path="/profile" component={Profile} />
                    <Tab/>
                </div>
            </ConnectedRouter>
        )
    }
}