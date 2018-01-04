import React, {Component} from 'react';
import header_logo from '../img/bb-logo-style-02.png';
import columns_beta from '../img/columns-beta.jpg';
import superlawyers_02 from '../img/superlawyers-02.png';
import Message from './Message';

class Home extends Component {
    render() {
        return (

            <div>

                <section>
                    <div className="row center-block" id="main">
                        <img src={columns_beta} alt="Buckner &amp; Bremer, LLC" height="100%" width="100%"/>
                        <div className="main-logo">
                            <img src={header_logo} alt="Buckner &amp; Bremer, LLC" id="slide" />
                        </div>
                    </div>
                </section>

                <section id="home-container-profiles">
                    <div className="row">
                        <div className="col-md-2">&nbsp;</div>
                        <div className="col-md-8">
                            <h1>Who We Are</h1>

                            <p>The law firm of Bremer Buckner, LLC is based in Bergen County, conveniently located in Hackensack, New Jersey in 2 University Plaza.  We serve the needs of clients throughout Bergen County, as well as, clients from several other counties, including, but not limited to, Passaic, Morris, Essex and Hudson.  Between our partners, we have over 30+ years of experience assisting clients with all of their family law and criminal law needs.</p>
                            <p>Often times the areas of family law and criminal law cross paths, which can be both emotionally and financially complex.  We understand that our client's case is unique and pride ourselves on being responsive to all of our clients needs.</p>
                            <p>Mr. Bremer began his career as the law clerk to the Honorable William C. Meehan, J.S.C., retired, the then Presiding Judge of the Criminal Part and thereafter as an Assistant Prosecutor with the Bergen County Prosecutors Office.  Mr. Buckner began his career as the law clerk to the Honorable Harold C. Hollenbeck, J.S.C., retired, who oversaw the Court's Juvenile Delinquency docket, DYFS (now DCP&amp;P) docket and all other Family Part matters.  As a result of their experience in the court system, Mr. Bremer and Mr. Buckner bring a unique perspective to their practice.</p>
                            <p>Both Mr. Bremer and Mr. Buckner practiced privately for well over a decade as partners in two of Bergen County's most established Family Law firms before joining together to use their knowledge and experience to assist their clients with all of their legal needs.</p>
                            <p>Whether your needs are family or criminal law related, contact Bremer Buckner, LLC to schedule a consultation.</p>

                        </div>
                        <div className="col-md-2">&nbsp;</div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="home-headshot right">
                                <div className="home-headshot-caption" ng-click="jumpToAttorney(1)">
                                    <span>Kevin L. Bremer, Esq.</span>
                                    <br />
                                    <br />
                                    <open-new-tab href="http://profiles.superlawyers.com/new-jersey/hackensack/lawyer/kevin-l-bremer/6c37628b-ad4f-4257-a1fd-5a291439be4f.html">Rated By Superlawyers</open-new-tab>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="home-headshot left">
                                <div className="home-headshot-caption" ng-click="jumpToAttorney(2)">
                                    <span>Joshua T. Buckner, Esq.</span>
                                    <br />
                                    <br />
                                    <open-new-tab href="http://profiles.superlawyers.com/new-jersey/river-edge/lawyer/joshua-t-buckner/653d7271-cbd8-4fc8-9670-2a65f2c83279.html">Rated By Superlawyers</open-new-tab>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="home-container-awards">

                    <div className="row">
                        <div className="col-md-2">&nbsp;</div>
                        <div className="col-md-8">
                            <div>
                                <open-new-tab href="http://www.superlawyers.com">
                                    <img src={superlawyers_02} alt="Super Lawyers" />
                                </open-new-tab>
                            </div>
                        </div>
                        <div className="col-md-2">&nbsp;</div>
                    </div>

                </section>

                <section id="home-container-consultation">
                    <div>
                        <div>TO DISCUSS YOUR MATTER WITH EITHER MR. BREMER OR MR. BUCKNER SEND US YOUR DETAILS ABOUT YOUR SITUATION OR CONTACT US DIRECTLY AT (201) 488-2141.</div>
                    </div>
                </section>

                <section id="home-container-message">

                    <div className="row">

                        <div className="col-md-2">&nbsp;</div>
                        <div className="col-md-8">

                            <Message/>

                        </div>
                        <div className="col-md-2">&nbsp;</div>
                    </div>

                </section>

                <section id="home-container-location">
                    <h1 className="site-h1-light-blue">How To Get Here</h1>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3015.807906954766!2d-74.0366915851209!3d40.89802843415166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2fa0b9f0a7893%3A0x7e5216dc08abf01b!2s2+University+Plaza!5e0!3m2!1sen!2sus!4v1464357346396" width="600" height="450">&nbsp;</iframe>

                </section>



            </div>

        );
    }
}

export default Home