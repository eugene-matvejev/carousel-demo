import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import './index.scss';

import Carousel from './carousel';
import Query from './query';

const onMount = (_0, _1, onSuccess, onError) => {
/**
 * because of cypress, i decided to use XHR wrapped in axios. as native fetch is not intercepted by cypress
 */
    return axios
        .get('https://pixabay.com/api/?key=9656065-a4094594c34f9ac14c7fc4c39&q=beautiful+landscape&image_type=photo')
        .then(({ data }) => {
            const items = data.hits.map(({ webformatURL: src, tags }) => ({ 
                src,
                tags,
            }));

            onSuccess(items);
        })
        .catch(onError);

    // const items = (new Array(7)).fill(1).map((_, i) => ({
    //     src: i,
    //     label: `label-${i}`,
    // }))

    // onSuccess(items);
}

const App = () => <Query
    onMount={onMount}
    children={(_, {data}) => <Carousel title="Carousel Test" items={data}/>}
/>;

ReactDOM.render(<App/>, document.getElementById('root'));

