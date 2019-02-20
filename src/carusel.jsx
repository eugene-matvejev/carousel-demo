import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CaruselItem from './carusel-item';
// import Icon from './icon';

export default class Carusel extends PureComponent {
    constructor({ position }) {
        super();

        this.state = {
            position,
            items: [],
        }

        this.handleNewPosition = this.handleNewPosition.bind(this);

        this.onClickLeft = this.onClickLeft.bind(this);
        this.onClickRight = this.onClickRight.bind(this);
    }

    componentDidMount() {
        this.handleNewPosition(this.state.position);
    }

    handleNewPosition(position) {
        if (position > this.props.items.length) {
            position = 0;
        } else if (position < 0) {
            position = this.props.items.length;
        }

        const { limit } = this.props;
        const items = this.props.items.slice(position, position + limit);

        if (items.length < limit) {
            items.push(...this.props.items.slice(0, limit - items.length));
        }

        this.setState({ position, items });
    }

    onClickLeft() {
        this.handleNewPosition(this.state.position - 1);
    }

    onClickRight() {
        this.handleNewPosition(this.state.position + 1);
    }

    render() {
        const { qaSelector, title } = this.props;
        const { items } = this.state;

        return <section className="carusel">
            {
                title &&
                <div data-cy={`${qaSelector}carusel-title`} className="carusel_title">
                    {title}
                </div>
            }
            <div className="carusel_container">
                {
                    items.map((props, i) => <CaruselItem
                        key={i}
                        qaSelector={`${qaSelector}carusel-item__${i}`}
                        {...props}
                        /** only for demo purposes, I injected this code to show that it rotate stuff properly, shouldn't be in production */
                        position={this.props.items.indexOf(props)}
                    />)
                }
            </div>
            <div className="carusel_controls">
                <div
                    onClick={this.onClickLeft}
                    data-cy={`${qaSelector}carusel-controller--left`}
                    className="carusel_control--left"
                >
                    Prev
                    {/* <Icon src="//assets/svg/arrow.svg" /> */}
                </div>
                <div
                    onClick={this.onClickRight}
                    data-cy={`${qaSelector}carusel-controller--right`}
                    className="carusel_control--right"
                >
                    Next
                    {/* <Icon src="//assets/svg/arrow.svg" /> */}
                </div>
            </div>
        </section>;
    }

    static propTypes = {
        qaSelector: PropTypes.string,
        title: PropTypes.string,
        items: PropTypes.arrayOf(PropTypes.object).isRequired,
        position: PropTypes.number,
        limit: PropTypes.number,
    }

    static defaultProps = {
        qaSelector: '',
        position: 0,
        limit: 5,
    }
}
