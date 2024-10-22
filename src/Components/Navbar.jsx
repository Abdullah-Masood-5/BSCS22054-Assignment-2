import React from 'react'

const Navbar = () => {
    return (
        <header style={{ backgroundColor: 'black' }} id="header" >
            <div className="header-top">
                <div className="container">
                    <div className="row justify-content-end">
                        <div className="col-lg-8 col-sm-4 col-8 header-top-right no-padding">
                            <ul>
                                <li>
                                    Mon-Fri: 8am to 2pm
                                </li>
                                <li>
                                    Sat-Sun: 11am to 4pm
                                </li>
                                <li>
                                    <p>(012) 6985 236 7512</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row align-items-center justify-content-between d-flex">
                    <div id="logo">
                        <a href="/"><img src="img/logo.png" alt="" title="" /></a>
                    </div>
                    <nav id="nav-menu-container">
                        <ul className="nav-menu">
                            <li className="menu-active"><a href="/">Home</a></li>
                            <li><a href="/About">About</a></li>
                            <li><a href="/Coffee">Coffee</a></li>
                            <li><a href="/Review">Review</a></li>
                            <li><a href="/Blog">Blog</a></li>
                            <li className="menu-has-children"><a href="/">Pages</a>
                                <ul>
                                    <li><a href="/Generic">Generic</a></li>
                                    <li><a href="/">Elements</a></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>

    )
}

export default Navbar
