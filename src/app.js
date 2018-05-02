import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux'

const app=document.createElement('div');
document.body.appendChild(app);
//import List from './component/app.jsx'
import App from './component/content.jsx'
//import Redux from './component/redux'
import { createStore, combineReducers } from 'redux'
import reducers from './redux/reducers'
const store = createStore(
    combineReducers(reducers)
)
ReactDom.render(<Provider store={store}><App /></Provider>,app);



