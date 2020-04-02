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
                        <div>
                            <h2>The road</h2>
                        </div>
                        <div className="section-one-text">
                            <p>This is me, a man, or rather a man-child.

From a young age i have been curious of the world around me. From trying to repair stuff(Wich ended up with me breaking them even more), to figuring out how and why stuff works. It was back in 1998. Our very own first computer, running windows 98 with built-in games wich you had to run from DOS. This was the beginning of my passion for technology. I would spend several hours a day, exploring the operating system, messing around with the commando line. to just making god-awful art in paint where you made lots of shapes and filled them with colour.

A while later the era of the internet arrived. A place filled with information about everything. Essentially this was a goldmine for learning new stuff. I could search for anything and i would get the information i needed. This lead to my search "How to program?". It turned out that this was something i love to do. Started out with some basic 'Hello World' applications written in Java and C++. "THIS IS AWESOME! I write some code here, and then the computer does stuff for me!". The creator within me rejoiced. So, my fate was sealed. I moved to Oslo to get an education in Information Technology. Here i specialized in "Intelligent Systems", wich emphasized on Internet of Things, Machine learning, Data Science and Embedded Systems. While i do love working with IoT and messing around with my Arduino, my main focus will be to work with web development, both frontend and backend.

Looking forward to many years of doing what i love.

Keep on learning</p>
                        </div>
                    </section>
                </div>
            </div>
        </Router>
    )
}

export default App