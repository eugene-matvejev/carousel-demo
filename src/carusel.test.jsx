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
            const c = shallow(<Carusel {...props}/>);

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
                    const c = shallow(<Carusel {...props} {...{[prop]: v}}/>);

                    expect(c).toMatchSnapshot();
                });
            });
        });
    });
});