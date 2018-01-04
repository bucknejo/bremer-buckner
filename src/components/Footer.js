import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <div className="col-md-12 site-bottom">

                <div className="row">
                    <div className="col-md-6 pull-left">

                        <ul id="site-bottom-contact">
                            <li>Bremer &amp; Buckner LLC</li>
                            <li>2 University Plaza Drive Suite 312</li>
                            <li>Hackensack, NJ 07601</li>
                            <li>(201) 488-2141 <span className="contact-method bottom">Phone</span></li>
                            <li>(201) 487-1257 <span className="contact-method bottom">Fax</span></li>
                            <li><a href="https://www.bremerbucknerlaw.com" className="site-bottom-anchor-01">Bremer &amp; Buckner, LLC</a></li>
                        </ul>

                    </div>

                    <div className="col-md-6 pull-right">
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer
