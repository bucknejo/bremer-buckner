import React, {Component} from 'react'

class Services extends Component {
    render() {
        return (
            <section id="services-container-top">

                <div className="row">
                    <div className="col-md-2">&nbsp;</div>
                    <div className="col-md-8">
                        <h1 style="color: #465a9b;">What We Do</h1>
                        <p>Curabitur porta sodales metus, at pulvinar nulla viverra nec. Donec malesuada, magna non suscipit fringilla, turpis lorem mattis quam, eget sollicitudin turpis ante in dolor. Suspendisse sem magna, cursus in tincidunt ac, rutrum at nulla. Duis non nulla semper justo lacinia tristique ac vitae ligula. Curabitur sed est vel mauris vulputate bibendum eu vel erat. Pellentesque et viverra risus. Vestibulum tellus turpis, dapibus non pretium ut, porta a urna. Duis venenatis felis quis massa rutrum vel dapibus augue facilisis.</p>
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
                    <div className="col-md-2">
                        <h5>Practice Areas</h5>
                        <ul id="services-practice-areas-menu">
                            <li><a href="" ng-click="displayPracticeArea(0)" ng-className="{'services-practice-areas-menu-selected' : 0 === selectedIndex}">Appellate</a></li>
                            <li><a href="" ng-click="displayPracticeArea(1)" ng-className="{'services-practice-areas-menu-selected' : 1 === selectedIndex}">Construction Law</a></li>
                            <li><a href="" ng-click="displayPracticeArea(2)" ng-className="{'services-practice-areas-menu-selected' : 2 === selectedIndex}">Criminal Practice</a></li>
                            <li><a href="" ng-click="displayPracticeArea(3)" ng-className="{'services-practice-areas-menu-selected' : 3 === selectedIndex}">Family Law/Divorce</a></li>
                            <li><a href="" ng-click="displayPracticeArea(4)" ng-className="{'services-practice-areas-menu-selected' : 4 === selectedIndex}">General Litigation</a></li>
                            <li><a href="" ng-click="displayPracticeArea(5)" ng-className="{'services-practice-areas-menu-selected' : 5 === selectedIndex}">Juvenile Practice</a></li>
                            <li><a href="" ng-click="displayPracticeArea(6)" ng-className="{'services-practice-areas-menu-selected' : 6 === selectedIndex}">Land Use/Zoning</a></li>
                            <li><a href="" ng-click="displayPracticeArea(7)" ng-className="{'services-practice-areas-menu-selected' : 7 === selectedIndex}">Medical Malpractice</a></li>
                            <li><a href="" ng-click="displayPracticeArea(8)" ng-className="{'services-practice-areas-menu-selected' : 8 === selectedIndex}">Municipal Court</a></li>
                            <li><a href="" ng-click="displayPracticeArea(9)" ng-className="{'services-practice-areas-menu-selected' : 9 === selectedIndex}">Negligence/Tort Claims</a></li>
                            <li><a href="" ng-click="displayPracticeArea(10)" ng-className="{'services-practice-areas-menu-selected' : 10 === selectedIndex}">Real Estate & Estates</a></li>
                            <li><a href="" ng-click="displayPracticeArea(11)" ng-className="{'services-practice-areas-menu-selected' : 11 === selectedIndex}">Wills/Trusts</a></li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <div ng-show="0 === selectedIndex" className="services-practice-area">
                            <h5>Appellate</h5>
                            <div>Under construction - please check back soon.</div>
                        </div>
                        <div ng-show="1 === selectedIndex" className="services-practice-area">
                            <h5>Construction Law</h5>
                            <div>Under construction - please check back soon.</div>
                        </div>
                        <div ng-show="2 === selectedIndex" className="services-practice-area">
                            <h5>Criminal Practice</h5>
                            <div>Under construction - please check back soon.</div>
                        </div>
                        <div ng-show="3 === selectedIndex" className="services-practice-area">
                            <h5>Family Law/Divorce</h5>
                            <div>Under construction - please check back soon.</div>
                        </div>
                        <div ng-show="4 === selectedIndex" className="services-practice-area">
                            <h5>General Litigation</h5>
                            <div>Under construction - please check back soon.</div>
                        </div>
                        <div ng-show="5 === selectedIndex" className="services-practice-area">
                            <h5>Juvenile Practice</h5>
                            <div>Under construction - please check back soon.</div>
                        </div>
                        <div ng-show="6 === selectedIndex" className="services-practice-area">
                            <h5>Land Use/Zoning</h5>
                            <div>Under construction - please check back soon.</div>
                        </div>
                        <div ng-show="7 === selectedIndex" className="services-practice-area">
                            <h5>Medical Malpractice</h5>
                            <div>Under construction - please check back soon.</div>
                        </div>
                        <div ng-show="8 === selectedIndex" className="services-practice-area">
                            <h5>Municipal Court</h5>
                            <div>Under construction - please check back soon.</div>
                        </div>
                        <div ng-show="9 === selectedIndex" className="services-practice-area">
                            <h5>Negligence/Tort Claims</h5>
                            <div>Under construction - please check back soon.</div>
                        </div>
                        <div ng-show="10 === selectedIndex" className="services-practice-area">
                            <h5>Real Estate & Estates</h5>
                            <div>Under construction - please check back soon.</div>
                        </div>
                        <div ng-show="11 === selectedIndex" className="services-practice-area">
                            <h5>Wills/Trusts</h5>
                            <div>Under construction - please check back soon.</div>
                        </div>
                    </div>
                    <div className="col-md-2">&nbsp;</div>
                </div>

            </section>            
        );
    }
}

export default Services;