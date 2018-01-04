import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './Home'
import Family from "./Family";
import Criminal from "./Criminal";
import About from "./About";
import Contact from "./Contact";

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/family' component={Family}/>
            <Route exact path='/criminal' component={Criminal}/>
            <Route exact path='/about' component={About}/>
            <Route exact path='/contact' component={Contact}/>
        </Switch>
    </main>
)

export default Main