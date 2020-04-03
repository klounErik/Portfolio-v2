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
                        <Route path="/"><Home /></Route>
                    <section className="section-one">
                        <div className="section-one-text">
                        <h2>The road</h2>
                        <article>
                        <p><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b> Morbi molestie sem id ligula gravida, quis pellentesque felis tincidunt. Aenean scelerisque, eros id iaculis tempor, lorem ex feugiat mi, in egestas nunc ex id nisi. Integer aliquet nulla quis ipsum consequat, ut condimentum lectus molestie. Fusce non pharetra ex. Proin vitae ex faucibus, faucibus ligula vel, molestie lacus. Donec varius eros a ligula dictum interdum. Nulla a rutrum quam.</p>
                        <p>Maecenas vulputate, eros in ornare porttitor, lacus leo dictum est, vitae rhoncus velit ipsum a libero. Curabitur aliquam nisl magna, sed elementum turpis fermentum eu. Integer mollis, orci ut dictum vulputate, risus felis rhoncus dui, et porttitor dui lacus at dolor. Duis massa ligula, vehicula eu arcu sit amet, consequat vestibulum sem. Quisque eu tellus sed lectus varius feugiat. Vestibulum aliquet dignissim massa sed volutpat. Suspendisse vitae lacinia nisi, eget laoreet libero. Aenean malesuada dui efficitur quam tristique pharetra. Nunc vulputate lobortis lectus, ac feugiat ligula scelerisque a. Praesent in libero sit amet eros scelerisque placerat. Sed at erat posuere, tincidunt mi vitae, luctus nibh. Proin sed enim justo.</p>
                        <p>Nullam suscipit risus nec augue mollis, ut lacinia justo sodales. Sed accumsan euismod nibh et tincidunt. Vestibulum ac commodo urna. Maecenas sagittis suscipit blandit. Morbi euismod orci leo, a iaculis diam ullamcorper nec. Pellentesque ut cursus augue. Integer magna sapien, malesuada sed interdum a, vehicula at libero.</p>
                        <p>Nullam suscipit risus nec augue mollis, ut lacinia justo sodales. Sed accumsan euismod nibh et tincidunt. Vestibulum ac commodo urna. Maecenas sagittis suscipit blandit. Morbi euismod orci leo, a iaculis diam ullamcorper nec. Pellentesque ut cursus augue. Integer magna sapien, malesuada sed interdum a, vehicula at libero.</p>
                        <p>Nullam suscipit risus nec augue mollis, ut lacinia justo sodales. Sed accumsan euismod nibh et tincidunt. Vestibulum ac commodo urna. Maecenas sagittis suscipit blandit. Morbi euismod orci leo, a iaculis diam ullamcorper nec. Pellentesque ut cursus augue. Integer magna sapien, malesuada sed interdum a, vehicula at libero.</p>
                        </article>
                        </div>
                    </section>
                </div>
            </div>
        </Router>
    )
}

export default App