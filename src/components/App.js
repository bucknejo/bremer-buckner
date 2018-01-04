import React, {Component} from 'react';
import './App.css';
import Header from './Header'
import Main from './Main'
import Footer from './Footer'

class App extends Component {
    render() {
        return (
            <div className="App container-fluid">
                <div className="row">
                    <Header/>
                </div>
                <div className="row">
                    <Main/>
                </div>
                <div className="row">
                    <Footer/>
                </div>
            </div>
        );
    }
}




export default App;
