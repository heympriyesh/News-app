import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import allReducer from './useReducer/index';
import { ApiProvider } from './ApiContext';


const store = createStore(
  allReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <ApiProvider>
        <App />
      </ApiProvider>
     
    </Provider>
  </BrowserRouter>
  ,
  document.getElementById('root')
);

