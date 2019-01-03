import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { store } from './store';

//CREACTE JOB GULP AND TEST UNIT
ReactDOM.render(
    <Provider store={store}> 
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
