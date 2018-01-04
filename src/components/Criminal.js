import React, {Component} from 'react'

class Criminal extends Component {
    render() {
        return (
            <section id="criminal-container-top">

                <div className="row">
                    <div className="col-md-2">&nbsp;</div>
                    <div className="col-md-8">
                        <h1 className="site-h1-light-blue">Criminal Law</h1>

                        <p>Our firm accepts all kinds of criminal law matters, including:</p>

                        <ul>
                            <li>Assault</li>
                            <li>Domestic Violence</li>
                            <li>Drug Crimes</li>
                            <li>DWI/DUI</li>
                            <li>Sex Crimes</li>
                            <li>Theft/Fraud Crimes</li>
                            <li>Expungements</li>

                        </ul>

                        <p>Our legal team brings more than 30+ years of experience to assist in all of your criminal law needs.  Call (201) 488-2141 to schedule an initial consultation. </p>

                    </div>
                    <div className="col-md-2">&nbsp;</div>
                </div>

            </section>            
            
        );
    }
}

export default Criminal