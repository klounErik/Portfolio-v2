import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Home from './components/Home'
import './App.css'

const App = () => {

    return (
        <Router>
            <div className="app">
                <nav>
                    <div className="content">
                        <div className="nav-container">
                            <span>{"< >"}</span>
                            <ul className="link-container">
                                <Link to="/home" href="#">
                                    <li className="link">Home</li>
                                </Link>
                                <a>
                                    <li className="link">About</li>
                                </a>
                                <a>
                                    <li className="link">Work</li>
                                </a>
                            </ul>
                            <span>{"</ >"}</span>
                        </div>
                    </div>
                </nav>
                <div className="app-content">
                    <Switch>
                        <Route path="/"><Home /></Route>
                    </Switch>
                    <section className="section-one">
                      
                        <div className="section-one-text">
                          
                        </div>
                    </section>
                </div>
            </div>
        </Router>
    )
}

export default App