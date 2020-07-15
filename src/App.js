import React, {Component} from 'react';
import Sum from "./components/sum";
import Substr from "./components/substr";
import Multip from "./components/multip";
import Div from "./components/div";

import './App.css';


class App extends Component {

    render() {

        return (
            <div className='App'>
                <Sum/>
                <Substr/>
                <Multip/>
                <Div/>
            </div>
        );
    }
}

App.propTypes = {};

export default App;

