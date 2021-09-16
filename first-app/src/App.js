import React from 'react'
import Card from './components/Card'
import CardProps from './components/CardProps'
import FetchData from './components/FetchData'
import FetchSatuData from './components/FetchSatuData'
import Router from './router'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './views/Home'
import About from './views/About'
import Navbar from './components/Navbar'
function App() {
    return (
        // <CardProps />
        // <FetchData />
        // <FetchSatuData />
        <BrowserRouter >
            <Navbar />
            <Router />
        </BrowserRouter>

    )
}

export default App
