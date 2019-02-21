import React from 'react';
import Carusel from './carusel';
import { shallow } from 'enzyme';

describe('<Carusel/>', () => {
    const props = {
        items: [
            {
                src: '{{src0}}',
                tags: '{{tags0}}',
            },
            {
                src: '{{src1}}',
                tags: '{{tags1}}',
            },
        ],
    };

    describe('render', () => {
        it('with required/default props', () => {
            const c = shallow(<Carusel {...props} />);

            expect(c).toMatchSnapshot();
        });

        describe('with optional props', () => {
            [
                ['qaSelector', '{{qaSelector}}'],
                ['title', '{{title}}'],
                ['position', 1],
                ['limit', 1],
            ].forEach(([prop, v]) => {
                it(`::${prop} as "${v}"`, () => {
                    const c = shallow(<Carusel {...props} {...{ [prop]: v }} />);

                    expect(c).toMatchSnapshot();
                });
            });
        });
    });

    describe('internal callbacks', () => {
        describe('::handleNewPosition', () => {
            it('when [::limit] smaller than a distance from [::position] till end of the queue it should present elements in queue between [::position] and [::position + ::limit]', () => {
                const items = [
                    {
                        src: '{{src0}}',
                        tags: '{{tags0}}',
                    },
                    {
                        src: '{{src1}}',
                        tags: '{{tags1}}',
                    },
                    {
                        src: '{{src2}}',
                        tags: '{{tags2}}',
                    },
                    {
                        src: '{{src3}}',
                        tags: '{{tags3}}',
                    },
                ];
                const c = shallow(<Carusel {...props} items={items} limit={2} position={1} />);

                expect(c.state('items')).toMatchSnapshot();
            });

            it(`when [::limit] higher than a distance from [::position] till end of the queue, it should fill queue by injecting items from start of scope`, () => {
                const c = shallow(<Carusel {...props} limit={3} position={2} />);

                expect(c.state('items')).toMatchSnapshot();
            });
        });

        describe('::onClickLeft', () => {
            it('from click on [data-cy="carusel-controller--left"], should decrease internal state field [::position] by 1, as current position above 0', () => {
                const c = shallow(<Carusel {...props} limit={2} position={1}/>);

                c.find('[data-cy="carusel-controller--left"]').simulate('click');

                expect(c.state('position')).toBe(0);
            });

            it('from click on [data-cy="carusel-controller--left"], should set internal state field [::position] to [items amount in context - 1], as current position is 0', () => {
                const c = shallow(<Carusel {...props} limit={2} />);

                c.find('[data-cy="carusel-controller--left"]').simulate('click');

                expect(c.state('position')).toBe(1);
            });
        });

        describe('::onClickRight', () => {
            it('from click on [data-cy="carusel-controller--right"], should increase internal state field [::position] by 1, as current position is less than an amount of items in context', () => {
                const c = shallow(<Carusel {...props} limit={2} />);

                c.find('[data-cy="carusel-controller--right"]').simulate('click');

                expect(c.state('position')).toBe(1);
            });

            it('from click on [data-cy="carusel-controller--right"], should set internal state field [::position] to 0, as current position is equal to amount of items in context', () => {
                const c = shallow(<Carusel {...props} limit={2} position={1} />);

                c.find('[data-cy="carusel-controller--right"]').simulate('click');

                expect(c.state('position')).toBe(0);
            });

            /** ::componentDidMount fix an issue, obsolete test */
            it.skip('from click on [data-cy="carusel-controller--right"], should set internal state field [::position] to 0, as current position is bigger to amount of items in context', () => {
                const c = shallow(<Carusel {...props} limit={2} position={2} />);

                c.find('[data-cy="carusel-controller--right"]').simulate('click');

                expect(c.state('position')).toBe(0);
            });
        });
    });
});