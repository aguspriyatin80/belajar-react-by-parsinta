import React from 'react'
import { Switch, Route } from 'react-router-dom'
import About from '../views/About'
import Contact from '../views/Contact'
import Home from '../views/Home'
export default function Router() {
    return (


        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/contact" component={Contact} />
        </Switch>


    )
}
