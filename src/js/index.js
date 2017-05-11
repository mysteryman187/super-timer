import React from 'react';
import { render } from 'react-dom';
import App from './components/app';
import { Provider } from 'react-redux';
import store from './store';
import '../less/app.less';

render((
     <Provider store={store}>
        <App/>
     </Provider>
), document.getElementById('app'));