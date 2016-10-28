import React, { Component, PropTypes } from 'react';
import 'isomorphic-fetch';

/**
 * param {string} url
 * param {object} params
 * param {string} method
 * param {Component} component
 * param {Component} loader
 * param {function} onSuccess
 * param {function} onError
 */

class ReactData extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: null
        };
    }

    componentDidMount() {
        const {url, params, method, onError, onSuccess} = this.props;
        const _this = this;

        fetch(url, params)
            .then(res => {

                if (!res.ok) {
                    this.setState({
                        data: new Error(result.statusText)
                    });

                    onError({ statusText: result.statusText});
                }

                res[method]().then((data) => {
                    _this.setState({data});

                    onSuccess({ data });
                });
            });
    }

    render() {
        const {url, loader: LoaderComponent, component: ChildComponent, children, onSucces, onError} = this.props;
        const {data} = this.state;

        if (!data) {
            if (LoaderComponent) return (<LoaderComponent />);
            return null;
        }

        const props = { data, ...this.props };

        delete props.onSuccess;
        delete props.onError;
        delete props.url;
        delete props.component;

        if (ChildComponent) return <ChildComponent {...props} />;
        if (children) return React.cloneElement(children, props, {});
    }
}

ReactData.propTypes = {
    url: PropTypes.string,
    params: PropTypes.object,
    method: PropTypes.string,
    component: PropTypes.object,
    loader: PropTypes.object,
    childer: PropTypes.object,
    onSuccess: PropTypes.func,
    onError: PropTypes.func
};

ReactData.defaultProps = {
    params: {},
    method: 'json',
    onSuccess() {},
    onError() {}
};

export default ReactData;
