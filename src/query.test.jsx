import React from 'react';
import Query from './query';
import { shallow } from 'enzyme';
 
describe('<Query/>', () => {
    const props = {
        onMount: () => true,
        children: () => <div/>
    };

    describe('render', () => {
        it('with required/default props', () => {
            const c = shallow(<Query {...props}/>);

            expect(c).toMatchSnapshot();
        });

        describe('with optional props', () => {
            [
                ['qaSelector', '{{qaSelector}}'],
            ].forEach(([prop, v]) => {
                it(`::${prop} as "${v}"`, () => {
                    const c = shallow(<Query {...props} {...{[prop]: v}}/>);

                    expect(c).toMatchSnapshot();
                });
            });
        });
    });

    describe('lifecycles events', () => {
        describe('::componentDidMount', () => {
            it('should invoke external callback [::onMount]', () => {
                const spy = spyOn(props, 'onMount');

                const c = shallow(<Query {...props}/>);

                expect(spy).toBeCalledWith(c.instance().props, c.state(), c.instance().onSuccess, c.instance().onError);
            });
        });
    });

    describe('internal callbacks', () => {
        describe('::onSuccess', () => {
            it('should set internal state field [::isLoading] to false, reset [::errors] and [::data] from payload', () => {
                const spy = spyOn(Query.prototype, 'setState');

                const c = shallow(<Query {...props} />);
                const data = [
                    {
                        src: 'src0',
                    },
                    {
                        src: 'src1',
                    }
                ];

                c.instance().onSuccess(data);

                expect(spy).toBeCalledWith({ data, errors: undefined, isLoading: false });
            });
        });

        
        describe('::onError', () => {
            it('should set internal state field [::isLoading] to false, reset [::data] and [::errors] from payload', () => {
                const spy = spyOn(Query.prototype, 'setState');

                const c = shallow(<Query {...props} />);
                const errors = [
                    'error 0',
                ];

                c.instance().onError(errors);

                expect(spy).toBeCalledWith({ data: undefined, errors, isLoading: false });
            });
        });
    });
});