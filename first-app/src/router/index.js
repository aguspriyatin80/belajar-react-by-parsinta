import React from 'react'
import { Switch, Route } from 'react-router-dom'
import NotFound from '../views/errors/NotFound'
import About from '../views/About'
import Contact from '../views/Contact'
import Home from '../views/Home'
import Navbar from '../components/Navbar'
import Login from '../views/auth/Login'
import Register from '../views/auth/Register'
export default function Router() {
    return (


        <Switch>
            <Route exact path="/">
                <Navbar />
                <Home />
            </Route>
            <Route exact path="/about">
                <Navbar />
                <About />
            </Route>
            <Route exact path="/contact">
                <Navbar />
                <Contact />
            </Route>
            {/* <Route exact path="/login">
                <Login />
            </Route> */}
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="*" component={NotFound} />
        </Switch>


    )
}
