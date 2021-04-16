import React, {Component} from 'react';
import crypto from 'crypto'

const isCryptoAvailableInBrowser = crypto !== undefined

const msg = isCryptoAvailableInBrowser ?
    '浏览器下node:crypto可用'
    : '浏览器下node:crypto不可用'

class App extends Component {
    render() {
        return (
            <div>
                <h2>Webpack4: {msg}</h2>
            </div>
        );
    }
}

export default App;
