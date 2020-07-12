import React,{Component} from 'react';


class Header extends Component{

    render(){
        console.log(this.props)
        return(
            
            <header className="header">
                 <div className="header-toprow">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="toprow-logo">
                                    <a href="/"><img src="/images/logo.png" alt="logo"/></a>
                                </div>
                            </div>
                            <div className="col-md-9">
                                <div className="row">
                                    <div className="col-md-8">
                                        <div className="toprow-banner">
                                            <img src="/images/header_banner.png" alt="header-banner"/>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="toprow-login-block">
                                            <ul className="toprow-loginarea">
                                                <li>
                                                    <a href="/register" className="purple-text" type="link">SignUp</a>
                                                </li>
                                                <li>
                                                    <a href="/login" className="wave-text" type="link">Login</a>
                                                </li>
                                            </ul>
                                            <div className="gif-banner">
                                                <img src="/images/header_radio_icon_on.gif" alt="harmonize-radio"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                

                <nav className="navbar navbar-expand-lg">
                    <div className="container">
                        <div className="mobile-logo">
                            <a className="navbar-brand" href="javascript.void()">
                                <img src="https://harmonizenetwork.com/music/images/logo.png" alt="logo"/>
                            </a>
                        </div>
                        <div className="humberger-icon">
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            </button>
                        </div>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="javascript.void()">About</a>
                                    <ul className="submenu">
                                        <li>
                                            <a href="javascript.void()">Our Story</a>
                                        </li>
                                        <li>
                                            <a href="javascript.void()">How it Work</a>
                                        </li>
                                        <li>
                                            <a href="javascript.void()">Management</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="javascript.void()">Learn & Grow</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="javascript.void()">Questionnaire</a>
                                    <ul className="submenu">
                                        <li>
                                            <a href="javascript.void()">Main Questionnaire</a>
                                        </li>
                                        <li>
                                            <a href="javascript.void()">Image Profile Analysis</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="javascript.void()">Explore Songs</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="javascript.void()">Refer & Earn</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="javascript.void()">Host & Concert</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="javascript.void()">Submit a Song</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="javascript.void()">FAQ</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="javascript.void()">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        )
    }
}

export default Header;