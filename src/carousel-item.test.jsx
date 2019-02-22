import React from 'react';
import CarouselItem from './carousel-item';
import { shallow } from 'enzyme';
 
describe('<CarouselItem/>', () => {
    const props = {
        src: '{{src}}',
        tags: '{{tags}}',
    };

    describe('render', () => {
        it('with required/default props', () => {
            const c = shallow(<CarouselItem {...props}/>);

            expect(c).toMatchSnapshot();
        });

        describe('with optional props', () => {
            [
                ['qaSelector', '{{qaSelector}}'],                
            ].forEach(([prop, v]) => {
                it(`::${prop} as "${v}"`, () => {
                    const c = shallow(<CarouselItem {...props} {...{[prop]: v}}/>);

                    expect(c).toMatchSnapshot();
                });
            });
        });
    });
});