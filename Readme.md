## React-data component


```js
    import Data from 'react-data';
    const url = '/api/login/'; // for example returns -> { user: 'UserName', login: 'UserLogin' }

    const MyComponent = ({ data }) => (
        <div className="greetings">
            <h1>Hello, {data.user}</h1>
            <h3>Your login is {data.login}</h3>
        </div>
    );


    const App = () => (
        <div className="application">
            <Data component={MyComponent} url={url} />

            <Data url={url}>
                <MyComponent />
            </Data>

            <Data url={url} onSuccess={handlerSuccess} onError={handlerError}/>
        </div>
    );

```
