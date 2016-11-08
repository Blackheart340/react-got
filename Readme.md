## React-got component

Component for fetching data from API. Just provide data from server directly in your component. Delivering data never have been so simple.

### Install
```bash
$ npm i --save react-got
```

### Property
##### url {String} – url with your data
##### params {Object} – params for receiving to the server
##### method {String} – default `json`;
##### component {Component} – rect component which getting data from API
##### loader {Component} – rect component which will be showed while data not ready
##### onSuccess {Function} – callback for success result
##### onError {Function} – callback for error

```js
import Data from 'react-got';
const url = '/api/login/'; // for example returns -> { user: 'UserName', login: 'UserLogin' }

const MyComponent = ({ data }) => (
    <div className="greetings">
        <h1>Hello, {data.user}</h1>
        <h3>Your login is {data.login}</h3>
    </div>
);


class App extends Component {

    handlerSuccess(data) {
        console.log(data);
    }

    handlerError(err) {
        console.log(err);
    }

    render() {
        return (
            <div className="application">
                <Data component={MyComponent} url={url} />

                <Data url={url}>
                    <MyComponent />
                </Data>

                <Data url={url} onSuccess={handlerSuccess} onError={handlerError}/>
            </div>
        );
    }
}

```
