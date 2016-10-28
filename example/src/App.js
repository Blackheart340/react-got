import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Data from '../../dist/index.js';

const Comp = ({data}) => {

    return (
        <div>
            <h2>Key = {data.key}</h2>
        </div>
    );
};

class App extends Component {
    constructor(props) {
        super(props);

        this.handlerSuccess = this.handlerSuccess.bind(this);
        this.state = {
            loaded: 'false'
        };
    }

    handlerSuccess() {
        this.setState({
            loaded: 'true'
        });
    }

    render() {
      const url = 'http://echo.jsontest.com/insert-key-here/insert-value-here/key/value';

        return (
            <div className="container">
                Loader – {this.state.loaded}
                <Data url={url} component={Comp} onSuccess={this.handlerSuccess} />

                <Data url={url}>
                    <Comp />
                </Data>
            </div>
        );
    }
}

export default App;
