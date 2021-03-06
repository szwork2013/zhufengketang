/**
 * Created by weimin on 17-2-12.
 */
import React,{Component} from "react"
import {Route,Router,IndexRoute,browserHistory} from "react-router"
import {Provider} from "react-redux"
import {syncHistoryWithStore} from "react-router-redux"

import store from "../store/configureStore"
import HomeContainer from "../containers/HomeContainer"
import Course from "./Course"
import Setting from "./Setting"
import PageNav from "./PageNav"
import About from "./About"
import Password from "./Password"
import Login from "./Login"
import Register from "./Register"

class Routes extends Component{
    render(){
        const history = syncHistoryWithStore(browserHistory,store)
        return (
            <Provider store={store}>
                <Router history={history} >
                    <Route path="/about" component={About}></Route>
                    <Route path="/password" component={Password}></Route>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/register" component={Register}></Route>
                    <Route path="/" component={PageNav}>
                        <IndexRoute component={HomeContainer}></IndexRoute>
                        <Route path="course" component={Course}></Route>
                        <Route path="setting" component={Setting}></Route>
                    </Route>
                </Router>   
            </Provider>
        )
    }
}

export default Routes;