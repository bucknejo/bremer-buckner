import React, {Component} from 'react'

class Family extends Component {
    render() {
        return (
            <section id="family-container-top">

                <div className="row">
                    <div className="col-md-2">&nbsp;</div>
                    <div className="col-md-8">
                        <h1 className="site-h1-light-blue">Family Law</h1>

                        <p>Our firm accepts all kinds of family law matters, including:</p>

                        <ul>
                            <li>Divorce</li>
                            <li>Child Custody</li>
                            <li>Child Support</li>
                            <li>Alimony</li>
                            <li>Division of Assets and Liabilities</li>
                            <li>Pre-nuptial agreements</li>
                            <li>High-net worth and complex divorce cases</li>
                            <li>Domestic violence</li>
                            <li>DCP&amp;P (formerly DYFS)</li>
                            <li>Support Modification</li>
                        </ul>

                        <p>Our legal team brings more than 30+ years of experience to assist in all of your family law needs.  Call (201) 488-2141 to schedule an initial consultation.</p>

                    </div>
                    <div className="col-md-2">&nbsp;</div>
                </div>

            </section>            
        );
    }
}

export default Family