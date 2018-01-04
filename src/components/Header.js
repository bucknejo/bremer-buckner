import React, {Component} from 'react';
import header_logo from '../img/bb-logo-style-02.png';

import { Link } from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <div className="col-md-12">

                <div className="row">
                    <div className="col-md-6 site-top-size">
                        <div id="site-top-logo">
                            <Link to="/">
                                <img src={header_logo} alt="Buckner &amp; Bremer, LLC" />
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-6 site-top-size">
                        <ul id="site-top-menu">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/family">Family Law</Link></li>
                            <li><Link to="/criminal">Criminal Law</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                </div>

            </div>
        );
    }
}

export default Header
