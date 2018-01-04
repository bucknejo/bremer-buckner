import React, {Component} from 'react'
import Message from "./Message";

class Contact extends Component {
    render() {
        return (
            <section id="contact-container-top">
                
                <div className="row">
                    <div className="col-md-2">&nbsp;</div>
                    <div className="col-md-8">

                        <div className="contact-address-01">Bremer &amp; Buckner, LLC</div>
                        <div className="contact-address-02">2 University Plaza Drive Suite 312</div>
                        <div className="contact-address-02">Hackensack, NJ 07601</div>
                        <div className="contact-address-02">(201) 488-2141 <span className="contact-method">Phone</span></div>
                        <div className="contact-address-02">(201) 487-1257 <span className="contact-method">Fax</span></div>

                    </div>
                    <div className="col-md-2">&nbsp;</div>
                </div>


                <div className="row">
                    <div className="col-md-2">&nbsp;</div>
                    <div className="col-md-8">
                        <hr className="jtb"/>
                    </div>
                    <div className="col-md-2">&nbsp;</div>
                </div>

                <div className="row">

                    <div className="col-md-2">&nbsp;</div>
                    <div className="col-md-8">

                        <Message/>

                    </div>
                    <div className="col-md-2">&nbsp;</div>
                </div>

                <div className="row">
                    <div className="col-md-2">&nbsp;</div>
                    <div className="col-md-8">
                        <hr className="jtb"/>
                    </div>
                    <div className="col-md-2">&nbsp;</div>
                </div>

                <div className="row">
                    <div className="col-md-2">&nbsp;</div>
                    <div className="col-md-8">

                        <h3>How To Get Here</h3>

                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3015.807906954766!2d-74.0366915851209!3d40.89802843415166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2fa0b9f0a7893%3A0x7e5216dc08abf01b!2s2+University+Plaza!5e0!3m2!1sen!2sus!4v1464357346396" width="600" height="450">&nbsp;</iframe>

                    </div>
                    <div className="col-md-2">&nbsp;</div>
                </div>


            </section>            
            
        );
    }
}

export default Contact