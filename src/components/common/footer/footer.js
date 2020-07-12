import React,{Component} from 'react';


class Footer extends Component{

    render(){
        return(
            <footer className="footer"> 
                <div className="container">
                    <ul className="footer-socailmedia-icon">
                        <li>
                            <a href="javascript.void();"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                        </li>
                        <li>
                            <a href="javascript.void();"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                        </li>
                        <li>
                            <a href="javascript.void();"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                        </li>
                        <li>
                            <a href="javascript.void();"><i class="fa fa-google-plus" aria-hidden="true"></i></a>
                        </li>
                        <li>
                            <a href="javascript.void();"><i class="fa fa-youtube" aria-hidden="true"></i></a>
                        </li>
                    </ul>
                    <p className="copyright-text">Copyright © 2020 Harmonize Network. All Rights Reserved.</p>
                </div>
            </footer>
            )
        }
    }
    
export default Footer;