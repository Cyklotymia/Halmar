import React from 'react';
import  ReactDOM  from 'react-dom';

import App from './tools/App';

const rootElement=document.getElementById('root');

if (rootElement) {
    ReactDOM.render(<App/>,rootElement);
};