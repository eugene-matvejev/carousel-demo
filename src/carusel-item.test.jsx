import React from 'react';
import CaruselItem from './carusel-item';
import { shallow } from 'enzyme';
 
describe('<CaruselItem/>', () => {
    const props = {
        src: '{{src}}',
        tags: '{{tags}}',
    };

    describe('render', () => {
        it('with required/default props', () => {
            const c = shallow(<CaruselItem {...props}/>);

            expect(c).toMatchSnapshot();
        });

        describe('with optional props', () => {
            [
                ['qaSelector', '{{qaSelector}}'],                
            ].forEach(([prop, v]) => {
                it(`::${prop} as "${v}"`, () => {
                    const c = shallow(<CaruselItem {...props} {...{[prop]: v}}/>);

                    expect(c).toMatchSnapshot();
                });
            });
        });
    });
});