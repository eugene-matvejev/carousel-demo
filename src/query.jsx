import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Query extends PureComponent {
    constructor() {
        super();
        
        this.state = {
            isLoading: true,
            data: undefined,
            errors: [],
        }

        this.onSuccess = this.onSuccess.bind(this);
        this.onError = this.onError.bind(this);
    }

    componentDidMount() {
        this.props.onMount(this.props, this.state, this.onSuccess, this.onError);
    }

    onSuccess(data) {
        this.setState({ data, errors: undefined, isLoading: false });
    }

    onError(errors) {
        /** display like toasts on something like that */
        this.setState({ data: undefined, errors, isLoading: false });
    }

    render() {
        const { qaSelector, children } = this.props;
        const { isLoading } = this.state;

        if (isLoading) {
            return <div data-cy={`${qaSelector}is-loading`} className="lds-ripple">
                <div/>
                <div/>
            </div>;
        }

        return children(this.props, this.state);
    }

    static propTypes = {
        qaSelector: PropTypes.string,
        onMount: PropTypes.func.isRequired,
        children: PropTypes.oneOfType([
            PropTypes.func,
            PropTypes.node,
        ]).isRequired,
    }

    static defaultProps = {
        qaSelector: '',
    }
}
