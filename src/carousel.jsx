import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CarouselItem from './carousel-item';

export default class Carousel extends PureComponent {
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
        if (position >= this.props.items.length) {
            position = 0;
        } else if (position < 0) {
            position = this.props.items.length - 1;
        }

        const { limit } = this.props;
        const items = this.props.items.slice(position, position + limit);

        while (items.length < limit) {
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

        return <section className="carousel">
            {
                title &&
                <div data-cy={`${qaSelector}carousel-title`} className="carousel_title">
                    {title}
                </div>
            }
            <div className="carousel_container">
                {
                    items.map((props, i) => <CarouselItem
                        key={i}
                        qaSelector={`${qaSelector}carousel-item__${i}`}
                        {...props}
                        /** only for demo purposes, I injected this code to show that it rotate stuff properly, shouldn't be in production */
                        position={this.props.items.indexOf(props)}
                    />)
                }
            </div>
            <button
                onClick={this.onClickLeft}
                data-cy={`${qaSelector}carousel-controller--left`}
                className="carousel_control--left"
            >
                Prev
            </button>
            <button
                onClick={this.onClickRight}
                data-cy={`${qaSelector}carousel-controller--right`}
                className="carousel_control--right"
            >
                Next
            </button>
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
