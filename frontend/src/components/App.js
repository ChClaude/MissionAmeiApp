import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Main from "./components/Main";

class App extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <Main/>
                <Footer/>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));